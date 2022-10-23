"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Searchbar = void 0;
const react_1 = __importDefault(require("react"));
const formik_1 = require("formik");
const yup = __importStar(require("yup"));
const Searchbar_styled_1 = require("./Searchbar.styled");
const ri_1 = require("react-icons/ri");
const searchValidationSchema = yup.object().shape({
    search: yup
        .string()
        .min(1, 'Enter search parameters')
        .max(50, 'Too The request must not exceed 50 characters!')
        .required('Enter search parameters'),
});
const Searchbar = ({ onSubmit }) => {
    return (<Searchbar_styled_1.SearcPanel>
      <formik_1.Formik initialValues={{ search: '' }} onSubmit={(values) => {
            onSubmit(values.search.trim());
        }} validationSchema={searchValidationSchema}>
        <Searchbar_styled_1.SearchForm>
          <Searchbar_styled_1.ButtonForm type="submit">
            <ri_1.RiSearch2Line size="25px"/>
          </Searchbar_styled_1.ButtonForm>
          <Searchbar_styled_1.Input name="search" type="text" autoComplete="off" autoFocus placeholder="Search images and photos"/>
          <Searchbar_styled_1.MessageFormError name="search" component="p"/>
        </Searchbar_styled_1.SearchForm>
      </formik_1.Formik>
    </Searchbar_styled_1.SearcPanel>);
};
exports.Searchbar = Searchbar;
//# sourceMappingURL=Searchbar.jsx.map