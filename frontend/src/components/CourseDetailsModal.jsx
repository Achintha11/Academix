import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  hideModal,
  selectModal,
} from "../../features/courseDetailsModal/modalSlice";
import "../styles/CourseDetailModal.scss";
import TeacherCard from "./TeacherCard";
import AddAssignmentForm from "./AddAssignmentForm";
import { getAssignments } from "../../features/assignment/assignmentSlice";
import AssignmentsAccordion from "./AssignmentsAccordion";
import "bootstrap/dist/css/bootstrap.min.css";

const CourseDetailsModal = () => {
  const dispatch = useDispatch();
  const modalOpen = useSelector(selectModal);
  const { selectedCourse } = useSelector((store) => store.assignments);
  const { user } = useSelector((store) => store.auth);

  useEffect(() => {
    if (selectedCourse) {
      dispatch(getAssignments(selectedCourse._id));
    }
  }, [dispatch, selectedCourse]);

  const handleClose = () => {
    dispatch(hideModal());
  };

  return (
    <Modal
      scrollable
      show={modalOpen}
      onHide={handleClose}
      dialogClassName="custom-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-muted">
          {selectedCourse.courseName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-muted">
        <div className="container vh-100 border">
          <div className="row h-100 border">
            <div className="col-md-3 border">
              <div className="row">
                <div className="col">
                  <h1>Module Team</h1>
                </div>
              </div>
              <div className="row border p-0">
                <div className="col border p-0">
                  <TeacherCard />
                  <TeacherCard />
                  <TeacherCard />
                  <TeacherCard />
                  <TeacherCard />
                </div>
              </div>
            </div>
            <div className="col border">
              <div className="row">
                <div className="col">
                  <h2>Course Content</h2>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  {selectedCourse && user.role !== "student" && (
                    <AddAssignmentForm />
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col">
                  {selectedCourse && <AssignmentsAccordion />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CourseDetailsModal;
