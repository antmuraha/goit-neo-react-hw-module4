import { useEffect } from 'react';
import { useState } from 'react';
import { fetchImages } from './api';

const initialState = {
  images: [],
  page: 1,
  loading: false,
  ended: false,
  error: false,
  search: '',
  selectedImageIdx: null,
};

const useStore = () => {
  const [state, setState] = useState({ ...initialState });

  const handlerSearch = searchValue => {
    setState(prevState => ({
      ...prevState,
      page: 1,
      ended: false,
      images: [],
      search: searchValue,
    }));
  };

  const handlerSelectImage = imageIdx => {
    setState(prevState => ({
      ...prevState,
      selectedImageIdx: imageIdx,
    }));
  };

  const handlerLoadMore = () => {
    setState(prevState => ({
      ...prevState,
      error: false,
      page: prevState.error ? 1 : prevState.page + 1,
    }));
  };

  const setLoading = isLoading => {
    setState(prevState => ({
      ...prevState,
      loading: isLoading,
    }));
  };

  useEffect(() => {
    setLoading(true);
    fetchImages(state.page, state.search)
      .then(data => {
        setState(prevState => ({
          ...prevState,
          images: state.page === 1 ? data.results : [...prevState.images, ...data.results],
          loading: false,
          ended: data.results.length === 0 || data.total_pages === state.page,
        }));
      })
      .catch(() => {
        setState(prevState => ({
          ...prevState,
          error: true,
        }));
      })
      .finally(() => {
        setLoading(false);
      });
  }, [state.page, state.search, state.error]);

  return {
    ...state,
    handlerSearch,
    handlerSelectImage,
    handlerLoadMore,
  };
};

export default useStore;
