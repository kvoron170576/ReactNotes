export const ImageGalleryItem = ({
  item: { webformatURL, largeImageURL },
  openModal,
}) => {
  return (
    <li onClick={() => openModal(largeImageURL)}>
      <img src={webformatURL} alt={webformatURL} />
    </li>
  );
};
