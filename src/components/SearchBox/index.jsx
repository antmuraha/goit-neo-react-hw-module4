import { useId } from 'react';
import styles from './index.module.css';

const SearchBox = props => {
  const { search, onSearch } = props;
  const id = useId();

  return (
    <div className={styles.searchBox}>
      <label htmlFor={id}>Find contacts by name</label>
      <input type="text" id={id} value={search} onChange={onSearch} />
    </div>
  );
};

export default SearchBox;
