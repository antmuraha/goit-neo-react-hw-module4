import { notifyInfo } from '../toast/Toaster';

import styles from './index.module.css';

const SearchBar = props => {
  const { search, onSearch } = props;

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const input = form.elements.search;

    if (input.value.trim().length < 3) {
      notifyInfo('Please enter a search term.\nMin 3 characters required.');
      return;
    }

    if (search === input.value) {
      notifyInfo('You are already searching for this image.');
      return;
    }
    onSearch(input.value);
  };

  return (
    <header className={styles.searchBar}>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">&#128269;</button>
      </form>
    </header>
  );
};

export default SearchBar;
