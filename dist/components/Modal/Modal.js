"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const Modal_styled_1 = require("./Modal.styled");
const modalEl = document.getElementById('modal');
class Modal extends react_1.Component {
    constructor() {
        super(...arguments);
        this.onCloseModalPressEsc = e => {
            if (e.code === 'Escape') {
                this.props.onClose();
            }
        };
        this.closeModalClickBackdrop = e => {
            if (e.target === e.currentTarget) {
                this.props.onClose();
            }
        };
    }
    componentDidMount() {
        window.addEventListener('keydown', this.onCloseModalPressEsc);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.onCloseModalPressEsc);
    }
    render() {
        return (0, react_dom_1.createPortal)(<Modal_styled_1.Backdrop onClick={this.closeModalClickBackdrop}>
        <Modal_styled_1.ModalBox>{this.props.children}</Modal_styled_1.ModalBox>
      </Modal_styled_1.Backdrop>, modalEl);
    }
}
exports.Modal = Modal;
//# sourceMappingURL=Modal.js.map