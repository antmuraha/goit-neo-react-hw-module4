import ImageCard from '../ImageCard';

import styles from './index.module.css';

const ImageGallery = props => {
  const { images, onSelect } = props;

  return (
    <ul className={styles.imageGallery}>
      {images.map((image, idx) => (
        <li key={image.id}>
          <ImageCard image={image} onSelect={() => onSelect(idx)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
