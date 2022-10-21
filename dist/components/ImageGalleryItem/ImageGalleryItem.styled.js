"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Image = styled_components_1.default.img `
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: ${p => p.theme.radii.md};

  &:hover,
  &:focus {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
//# sourceMappingURL=ImageGalleryItem.styled.js.map