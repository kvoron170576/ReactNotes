import { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchArticlesWithQuery } from './api';
import toast, { Toaster } from 'react-hot-toast';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';
import { Loader } from 'components/Loader/Loader';
const getInitialQuery = () => {
  const savedSearchQuery = localStorage.getItem('search-query');
  if (savedSearchQuery !== null) {
    return JSON.parse(savedSearchQuery);
  }
  return '';
};
export const ImageFinder = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState(getInitialQuery);
  const [queryText, setQueryText] = useState(getInitialQuery);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const [time, setTime] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const resetRequestData = () => {
    setLoading(true);
    setError(false);
  };

  const onSubmit = e => {
    e.preventDefault();
    setQuery(e.target.query.value);
    setPage(1);
    setTime(Date.now());
    setImages([]);
    setLoadMore(false);
  };

  useEffect(() => {
    async function getImages() {
      if (!query) return;
      //const controller = new AbortController();
      try {
        resetRequestData();
        const { hits, totalHits } = await fetchArticlesWithQuery(query, page);
        if (page > 1) {
          setImages([...images, ...hits]);
        } else {
          if (!hits.length) {
            toast.error('Nothing found!');
            return;
          }
          setImages(hits);
          setLoadMore(true);
        }
        if (!hits.length || page >= Math.ceil(totalHits / 12)) {
          setLoadMore(false);
          toast.error('No more images!');
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [query, page, time]);

  useEffect(() => {
    localStorage.setItem('search-query', JSON.stringify(query));
  }, [query]);

  useEffect(() => {
    if (error) {
      toast.error('HTTP error!');
    }
  }, [error]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  const openModal = largeImageURL => {
    setLargeImageURL(largeImageURL);
    setModalIsOpen(true);
    document.addEventListener('keydown', onEscKeyPress);
  };

  const closeModalHandler = evt => {
    if (evt.target === evt.currentTarget) {
      closeModal();
    }
  };
  const closeModal = () => {
    setModalIsOpen(false);
    document.removeEventListener('keydown', onEscKeyPress);
  };
  const onEscKeyPress = evt => {
    const ESC_KEY_CODE = 'Escape';
    if (evt.code === ESC_KEY_CODE) {
      closeModal();
    }
  };
  const changeQueryText = evt => {
    setQueryText(evt.target.value);
  };

  return (
    <div>
      <Searchbar
        onSubmit={onSubmit}
        queryText={queryText}
        onChangeQueryText={changeQueryText}
      />
      <ImageGallery items={images} openModal={openModal} />
      {modalIsOpen && (
        <Modal largeImageURL={largeImageURL} closeModal={closeModalHandler} />
      )}
      {loadMore && <Button onHandleLoadMore={handleLoadMore} />}
      {loading && <Loader />}
      <Toaster />
    </div>
  );
};
