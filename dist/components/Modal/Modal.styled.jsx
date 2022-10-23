"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalBox = exports.Backdrop = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Backdrop = styled_components_1.default.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
`;
exports.ModalBox = styled_components_1.default.div `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;
//# sourceMappingURL=Modal.styled.jsx.map