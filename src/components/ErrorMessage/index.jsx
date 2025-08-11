import styles from './index.module.css';

const ErrorMessage = props => {
  const { message } = props;
  return (
    <div className={styles.errorMessage}>
      <p className={styles.message}>⚠️ {message}</p>
    </div>
  );
};

export default ErrorMessage;
