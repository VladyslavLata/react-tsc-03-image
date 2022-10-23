import React from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalBox } from './Modal.styled';

const modalEl = document.getElementById('modal')!;

interface IProps {
  onClose: () => void,
  children: React.ReactNode,
}

export class Modal extends React.Component<IProps> {
  componentDidMount() {
    window.addEventListener('keydown', this.onCloseModalPressEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseModalPressEsc);
  }

  onCloseModalPressEsc = (e: KeyboardEvent) => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  closeModalClickBackdrop = (e: React.MouseEvent ) => {
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
