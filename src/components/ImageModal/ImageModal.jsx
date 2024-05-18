import Modal from "react-modal";
Modal.setAppElement("#root");
import css from "./ImageModal.module.css";

export default function ImageModal({ isOpen, closeModal, imageInfo }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      overlayClassName={css.modalOverlay}
      className={css.modalContent}
      bodyOpenClassName={css.modalOpen}
      contentLabel="Modal window with larger image"
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={true}
    >
      <img src={imageInfo} className="modalImg" />
    </Modal>
  );
}
