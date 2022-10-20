import { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Searchbar } from '../Searchbar/Searchbar';
import { searchImages } from 'Api/Api';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { Message } from '../Message/Message';
import { ApplicationBox } from './App.styled';

export class App extends Component {
  state = {
    totalImages: 0,
    images: [],
    searchQuery: '',
    page: 1,
    status: 'idle',
    error: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;
    if (searchQuery !== prevState.searchQuery || page !== prevState.page) {
      try {
        this.setState({ status: 'pending' });
        const responseDataImages = await searchImages(searchQuery, page);
        this.setState(state => ({
          images: [...state.images, ...responseDataImages.hits],
          totalImages: responseDataImages.totalHits,
          status: 'resolved',
        }));
      } catch (error) {
        this.setState({ status: 'rejected', error: error });
        console.error(error.message);
      }
    }
  }

  getSearchQuery = searchQuery => {
    if (searchQuery === this.state.searchQuery) {
      return;
    }
    this.setState({ searchQuery, page: 1, images: [] });
  };

  loadMoreImages = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const { images, status, totalImages, page, error, searchQuery } =
      this.state;
    const totalPages = Math.ceil(totalImages / 12);
    return (
      <ApplicationBox>
        <Searchbar onSubmit={this.getSearchQuery} />
        {status !== 'idle' && totalImages > 0 && (
          <ImageGallery imagesData={images} />
        )}
        {status === 'rejected' && <Message>{error.message}</Message>}
        {status === 'resolved' && totalImages === 0 && (
          <Message>
            Your search "{searchQuery}" did not match any listings. Change the
            request field and try again.
          </Message>
        )}
        {status === 'resolved' && totalPages > page && (
          <Button loadMore={this.loadMoreImages}>Load more</Button>
        )}
        {status === 'pending' && (
          <ThreeDots
            color="#3f51b5"
            wrapperStyle={{ justifyContent: 'center' }}
          />
        )}
      </ApplicationBox>
    );
  }
}
