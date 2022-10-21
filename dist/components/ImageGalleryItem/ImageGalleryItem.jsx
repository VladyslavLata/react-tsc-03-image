"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageGalleryItem = void 0;
const react_1 = require("react");
const ImageGalleryItem_styled_1 = require("./ImageGalleryItem.styled");
const Modal_1 = require("../Modal/Modal");
class ImageGalleryItem extends react_1.Component {
    constructor(props) {
        super(props);
        this.toggleModal = () => {
            this.setState(({ openModal }) => ({ openModal: !openModal }));
        };
        this.state = {
            openModal: false,
        };
    }
    render() {
        const { imageData: { webformatURL, tags, largeImageURL }, } = this.props;
        return (<>
        <ImageGalleryItem_styled_1.Image onClick={this.toggleModal} src={webformatURL} alt={tags}/>
        {this.state.openModal && (<Modal_1.Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags}/>
          </Modal_1.Modal>)}
      </>);
    }
}
exports.ImageGalleryItem = ImageGalleryItem;
//# sourceMappingURL=ImageGalleryItem.jsx.map