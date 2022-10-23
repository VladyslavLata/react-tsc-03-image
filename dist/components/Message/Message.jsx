"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const react_1 = __importDefault(require("react"));
const Message_styled_1 = require("./Message.styled");
const Message = ({ children }) => {
    return <Message_styled_1.MessageInfo>{children}</Message_styled_1.MessageInfo>;
};
exports.Message = Message;
//# sourceMappingURL=Message.jsx.map