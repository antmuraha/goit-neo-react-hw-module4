import styles from './index.module.css';

const LoadMoreBtn = props => {
  const { label, onClick } = props;

  return (
    <button className={styles.loadMoreBtn} onClick={onClick}>
      {label}
    </button>
  );
};

export default LoadMoreBtn;
