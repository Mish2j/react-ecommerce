import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal-slice";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ModalWindow = () => {
  const dispatch = useDispatch();

  const title = useSelector((state) => state.modal.title);
  const message = useSelector((state) => state.modal.message);
  const isActive = useSelector((state) => state.modal.isActive);

  const handleClose = () => {
    dispatch(modalActions.closeModal());
  };

  return (
    <Modal show={isActive} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalWindow;
