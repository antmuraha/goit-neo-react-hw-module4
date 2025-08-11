import { useCallback } from 'react';
import Modal from 'react-modal';
import classnames from '../../libs/classnames';

import styles from './index.module.css';

const ImageModal = ({ images, selectedImageIdx, onClose }) => {
  const image = images[selectedImageIdx];
  const modalIsOpen = !!image;

  const closeModal = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <div>
      <Modal
        className={styles.modal}
        overlayClassName={styles.overlay}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
      >
        <div className={classnames(styles.imageModal)} onClick={onClose}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <img src={image?.urls?.regular} alt={image?.alt_description} className={styles.image} />
            {image?.description && (
              <div className={styles.imageInfo}>
                <p>Description: {image?.description}</p>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export default ImageModal;
