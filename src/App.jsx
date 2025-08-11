import { useCallback } from 'react';
import ToasterComponent from './components/toast/Toaster';
import useStore from './data/useStore';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import LoadMoreBtn from './components/LoadMoreBtn';
import ImageModal from './components/ImageModal';
import ErrorMessage from './components/ErrorMessage';

import styles from './app.module.css';

function App() {
  const {
    images,
    loading,
    ended,
    error,
    search,
    handlerLoadMore,
    handlerSearch,
    handlerSelectImage,
    selectedImageIdx,
  } = useStore();

  const onCloseModal = useCallback(() => {
    handlerSelectImage(null);
  }, [handlerSelectImage]);

  return (
    <>
      <div className={styles.app}>
        <SearchBar search={search} onSearch={handlerSearch} />
        <ImageGallery images={images} onSelect={handlerSelectImage} />
        {images.length === 0 && error && <ErrorMessage message="Failed to fetch images. Please try again later." />}
        {loading && <Loader />}
        {!ended && !loading && <LoadMoreBtn label={error ? "Retry" : "Load More"} onClick={handlerLoadMore} />}
        <ImageModal images={images} selectedImageIdx={selectedImageIdx} onClose={onCloseModal} />
      </div>
      <ToasterComponent />
    </>
  );
}

export default App;
