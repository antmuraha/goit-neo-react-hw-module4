import styles from './index.module.css';

const Contact = props => {
  const { id, name, number, onDelete } = props;
  return (
    <div className={styles.contact}>
      <div className={styles.wrapper}>
        <div className={styles.name}>👤 {name}</div>
        <div className={styles.number}>📞 {number}</div>
      </div>
      <button className={styles.deleteButton} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
