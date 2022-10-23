"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchImages = void 0;
const axios_1 = __importDefault(require("axios"));
axios_1.default.defaults.baseURL = 'https://pixabay.com';
const searchImages = (searchQuery, page) => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        params: {
            key: '28341788-9e42159be3be8e53d709707ca',
            q: `${searchQuery}`,
            image_type: 'photo',
            orientation: 'horizontal',
            page: `${page}`,
            per_page: 12,
        },
    };
    const response = yield axios_1.default.get('/api/', params);
    return response.data;
});
exports.searchImages = searchImages;
//# sourceMappingURL=Api.jsx.map