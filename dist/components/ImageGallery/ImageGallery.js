"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageGallery = void 0;
const ImageGallery_styled_1 = require("./ImageGallery.styled");
const ImageGalleryItem_1 = require("../ImageGalleryItem/ImageGalleryItem");
const ImageGallery = ({ imagesData }) => {
    return (<ImageGallery_styled_1.Gallery>
      {imagesData.map(imageData => (<ImageGallery_styled_1.GalleryItem key={imageData.id}>
          <ImageGalleryItem_1.ImageGalleryItem imageData={imageData}/>
        </ImageGallery_styled_1.GalleryItem>))}
    </ImageGallery_styled_1.Gallery>);
};
exports.ImageGallery = ImageGallery;
//# sourceMappingURL=ImageGallery.js.map