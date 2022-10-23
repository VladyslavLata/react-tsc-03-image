"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_1 = require("react");
const react_loader_spinner_1 = require("react-loader-spinner");
const Searchbar_1 = require("../Searchbar/Searchbar");
const Api_1 = require("../../Api/Api");
const ImageGallery_1 = require("../ImageGallery/ImageGallery");
const Button_1 = require("../Button/Button");
const Message_1 = require("../Message/Message");
const App_styled_1 = require("./App.styled");
class App extends react_1.Component {
    constructor(props) {
        super(props);
        this.getSearchQuery = (searchQuery) => {
            if (searchQuery === this.state.searchQuery) {
                return;
            }
            this.setState({ searchQuery, page: 1, images: [] });
        };
        this.loadMoreImages = () => {
            this.setState(({ page }) => ({ page: page + 1 }));
        };
        this.state = {
            totalImages: 0,
            images: [],
            searchQuery: '',
            page: 1,
            status: 'idle',
            error: '',
        };
    }
    componentDidUpdate(_, prevState) {
        return __awaiter(this, void 0, void 0, function* () {
            const { searchQuery, page } = this.state;
            if (searchQuery !== prevState.searchQuery || page !== prevState.page) {
                try {
                    this.setState({ status: 'pending' });
                    const responseDataImages = yield (0, Api_1.searchImages)(searchQuery, page);
                    this.setState(state => ({
                        images: [...state.images, ...responseDataImages.hits],
                        totalImages: responseDataImages.totalHits,
                        status: 'resolved',
                    }));
                }
                catch (error) {
                    if (error instanceof Error) {
                        this.setState({ status: 'rejected', error: error.message });
                        console.error(error.message);
                    }
                }
            }
        });
    }
    render() {
        const { images, status, totalImages, page, error, searchQuery } = this.state;
        const totalPages = Math.ceil(totalImages / 12);
        return (<App_styled_1.ApplicationBox>
        <Searchbar_1.Searchbar onSubmit={this.getSearchQuery}/>
        {status !== 'idle' && totalImages > 0 && (<ImageGallery_1.ImageGallery imagesData={images}/>)}
        {status === 'rejected' && <Message_1.Message>{error}</Message_1.Message>}
        {status === 'resolved' && totalImages === 0 && (<Message_1.Message>
            Your search "{searchQuery}" did not match any listings. Change the
            request field and try again.
          </Message_1.Message>)}
        {status === 'resolved' && totalPages > page && (<Button_1.Button loadMore={this.loadMoreImages}>Load more</Button_1.Button>)}
        {status === 'pending' && (<react_loader_spinner_1.ThreeDots color="#3f51b5" wrapperStyle={{ justifyContent: 'center' }}/>)}
      </App_styled_1.ApplicationBox>);
    }
}
exports.App = App;
//# sourceMappingURL=App.jsx.map