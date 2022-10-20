import { Gallery, GalleryItem } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ imagesData }) => {
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
