"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageInfo = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.MessageInfo = styled_components_1.default.p `
  padding: ${p => p.theme.space[5]}px ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};
`;
//# sourceMappingURL=Message.styled.jsx.map