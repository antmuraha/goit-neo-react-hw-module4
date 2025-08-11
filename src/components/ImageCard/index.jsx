import styles from './index.module.css';

const ImageCard = props => {
  const { image, onSelect } = props;

  return (
    <div className={styles.imageCard} onClick={() => onSelect(image)}>
      <img src={image.urls.small} alt={image.name} title={image.name} />
    </div>
  );
};

export default ImageCard;
