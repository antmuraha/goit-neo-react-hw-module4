import useStore from './data/useStore';
import ContactForm from './components/ContactForm';
import SearchBox from './components/SearchBox';
import ContactList from './components/ContactList';

import styles from './app.module.css';

function App() {
  const { state, handlerAddContact, handlerDeleteContact, handlerSearch } = useStore();

  return (
    <div className={styles.app}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handlerAddContact} />
      <SearchBox search={state.search} onSearch={handlerSearch} />
      <ContactList contacts={state.contacts} onDelete={handlerDeleteContact} />
    </div>
  );
}

export default App;
