import React from "react"
import { Gallery, GalleryItem } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { IDataImage } from "../../types/types"

interface IProps {
  imagesData: IDataImage[]
}

export const ImageGallery: React.FC< IProps > = ({ imagesData }) => {
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
