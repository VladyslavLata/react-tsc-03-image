"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageFormError = exports.Input = exports.ButtonForm = exports.SearchForm = exports.SearcPanel = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const formik_1 = require("formik");
exports.SearcPanel = styled_components_1.default.header `
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding: ${p => p.theme.space[9]}px ${p => p.theme.space[10]}px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.bgPrimary};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
exports.SearchForm = (0, styled_components_1.default)(formik_1.Form) `
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.sm};
  overflow: hidden;
`;
exports.ButtonForm = styled_components_1.default.button `
  display: inline-block;
  width: 48px;
  height: 48px;
  border: ${p => p.theme.borders.none};
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;
exports.Input = (0, styled_components_1.default)(formik_1.Field) `
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: ${p => p.theme.fontSizes.s};
  border: ${p => p.theme.borders.none};
  outline: none;
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;
`;
exports.MessageFormError = (0, styled_components_1.default)(formik_1.ErrorMessage) `
  position: absolute;
  bottom: 2px;
  right: 50%;
  transform: translateX(50%);
  font-size: ${p => p.theme.fontSizes.s};
  ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.red};
`;
//# sourceMappingURL=Searchbar.styled.jsx.map