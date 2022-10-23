"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryItem = exports.Gallery = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Gallery = styled_components_1.default.ul `
  padding: ${p => p.theme.space[4]}px;
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[4]}px;
`;
exports.GalleryItem = styled_components_1.default.li `
  width: calc((100% - 5 * 16px) / 6);
  border-radius: ${p => p.theme.radii.md};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
//# sourceMappingURL=ImageGallery.styled.jsx.map