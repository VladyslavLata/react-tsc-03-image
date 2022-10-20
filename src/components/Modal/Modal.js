import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalBox } from './Modal.styled';

const modalEl = document.getElementById('modal');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onCloseModalPressEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseModalPressEsc);
  }

  onCloseModalPressEsc = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  closeModalClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Backdrop onClick={this.closeModalClickBackdrop}>
        <ModalBox>{this.props.children}</ModalBox>
      </Backdrop>,
      modalEl
    );
  }
}
