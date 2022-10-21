"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const Button_styled_1 = require("./Button.styled");
const Button = ({ loadMore, children }) => {
    return (<Button_styled_1.ButtonLoadMore type="button" onClick={loadMore}>
      {children}
    </Button_styled_1.ButtonLoadMore>);
};
exports.Button = Button;
//# sourceMappingURL=Button.jsx.map