import { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Searchbar } from '../Searchbar/Searchbar';
import { searchImages } from '../../Api/Api';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { Message } from '../Message/Message';
import { ApplicationBox } from './App.styled';
import {  IDataImage } from "../../types/types";

interface IState {
    totalImages: number,
    images: IDataImage[],
    searchQuery: string,
    page: number,
    status: string,
    error: string,
}

export class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
    totalImages: 0,
      images: [],
      // {
      //  hits: [{
      //     id: 195893,
      //     pageURL: "https://pixabay.com/en/blossom-bloom-flower-195893/",
      //     type: "photo",
      //     tags: "blossom, bloom, flower",
      //     previewURL: "https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg",
      //     previewWidth: 150,
      //     previewHeight: 84,
      //     webformatURL: "https://pixabay.com/get/35bbf209e13e39d2_640.jpg",
      //     webformatWidth: 640,
      //     webformatHeight: 360,
      //     largeImageURL: "https://pixabay.com/get/ed6a99fd0a76647_1280.jpg",
      //     fullHDURL: "https://pixabay.com/get/ed6a9369fd0a76647_1920.jpg",
      //     imageURL: "https://pixabay.com/get/ed6a9364a9fd0a76647.jpg",
      //     imageWidth: 4000,
      //     imageHeight: 2250,
      //     imageSize: 4731420,
      //     views: 7671,
      //     downloads: 6439,
      //     likes: 5,
      //     comments: 2,
      //     user_id: 48777,
      //     user: "Josch13",
      //     userImageURL: "https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg",
      //   },]
      // },
    searchQuery: '',
    page: 1,
    status: 'idle',
    error: '',
    }
  }
  // state = {
  //   totalImages: 0,
  //   images: [],
  //   searchQuery: '',
  //   page: 1,
  //   status: 'idle',
  //   error: '',
  // };

  async componentDidUpdate(_:{}, prevState:IState) {
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
        if (error instanceof Error) {
        this.setState({ status: 'rejected', error: error.message });
        console.error(error.message);} 
      }
    }
  }

  getSearchQuery = (searchQuery: string) => {
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
        {status === 'rejected' && <Message>{error}</Message>}
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
