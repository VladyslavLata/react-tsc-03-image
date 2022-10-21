import { Component } from 'react';
import { Image } from './ImageGalleryItem.styled';
import { Modal } from '../Modal/Modal';

interface IState {
  openModal: boolean,
}

interface IProps {
  imageData: {webformatURL: string, tags: string, largeImageURL:string}
}

export class ImageGalleryItem extends Component<IProps, IState> {
 constructor(props: IProps) {
    super(props);

    this.state = {
  openModal: false,
    };
  }

  toggleModal = () => {
    this.setState(({ openModal }) => ({ openModal: !openModal }));
  };

  render() {
    const {
      imageData: { webformatURL, tags, largeImageURL },
    } = this.props;
    return (
      <>
        <Image onClick={this.toggleModal} src={webformatURL} alt={tags} />
        {this.state.openModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}
