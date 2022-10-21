import React from "react"
import { Gallery, GalleryItem } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery: React.FC = ({ imagesData }) => {
  return (
    <Gallery>
      {imagesData.map(imageData => (
        <GalleryItem key={imageData.id}>
          <ImageGalleryItem imageData={imageData} />
        </GalleryItem>
      ))}
    </Gallery>
  );
};
