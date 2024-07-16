import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  hideModal,
  selectModal,
  showModal,
} from "../../features/courseDetailsModal/modalSlice";

const CourseDetailsModal = () => {
  const dispatch = useDispatch();
  const modalOpen = useSelector(selectModal);

  const handleClose = () => {
    dispatch(hideModal());
  };

  return (
    <Modal show={modalOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="text-muted">Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-muted">
        Woohoo, you are reading this text in a modal!
      </Modal.Body>
    </Modal>
  );
};

export default CourseDetailsModal;
