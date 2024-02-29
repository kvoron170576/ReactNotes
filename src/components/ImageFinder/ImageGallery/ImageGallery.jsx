import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ items, openModal }) => {
  return (
    <ImageGalleryList>
      {items.map(item => {
        return (
          <ImageGalleryItem key={item.id} item={item} openModal={openModal} />
        );
      })}
    </ImageGalleryList>
  );
};
