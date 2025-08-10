import { useEffect } from 'react';
import { useState } from 'react';

const LOCAL_STORAGE_KEY = 'contacts-state';

const initialState = {
  contacts: [],
  search: '',
};

const saveToLocalStorage = state => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
};

const loadFromLocalStorage = () => {
  const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (savedState) {
    try {
      return JSON.parse(savedState);
    } catch (error) {
      console.error('Error parsing saved state:', error);
    }
  }
  return initialState; // Return initial state if no saved state found
};

const useStore = () => {
  const [state, setState] = useState(loadFromLocalStorage());

  const handlerSearch = event => {
    const searchValue = event.target.value;
    setState(prevState => ({
      ...prevState,
      search: searchValue,
    }));
  };

  const handlerAddContact = ({ id, name, number }) => {
    const newContact = {
      id,
      name,
      number,
    };

    setState(prevState => ({
      ...prevState,
      contacts: [...prevState.contacts, newContact],
    }));
  };

  const handlerDeleteContact = contactId => {
    setState(prevState => ({
      ...prevState,
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  // Save state to localStorage before the page unloads
  useEffect(() => {
    function saveCallback() {
      saveToLocalStorage(state);
    }
    window.addEventListener('beforeunload', saveCallback);
    return () => {
      window.removeEventListener('beforeunload', saveCallback);
    };
  }, [state]);

  return {
    state: {
      ...state,
      contacts: state.search
        ? state.contacts.filter(contact => contact.name.toLowerCase().includes(state.search.toLowerCase()))
        : state.contacts,
    },
    handlerSearch,
    handlerAddContact,
    handlerDeleteContact,
  };
};

export default useStore;
