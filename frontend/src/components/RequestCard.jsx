/* eslint-disable react/prop-types */
import React from "react";
import { FaUser, FaBook } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { updateEnrollmentRequest } from "../../features/enrollment/enrollmentSlice";

const RequestCard = ({ student, course, status, requestedAt, _id }) => {
  const dispatch = useDispatch();
  const handleAccept = () => {
    const id = _id;
    const action = "approved";
    dispatch(updateEnrollmentRequest({ id, action }));
  };

  const handleReject = () => {
    console.log(_id);

    const action = "rejected";
    const id = _id;
    dispatch(updateEnrollmentRequest({ id, action }));
  };

  return (
    <div className="card mb-3 text-dark user-course-card">
      <div className="card-body">
        <div className="d-flex align-items-center mb-3">
          <FaUser className="me-2" />
          <h5 className="card-title mb-0">{student.name}</h5>
        </div>
        <p className="card-text">
          <strong>Student ID:</strong> {student.studentId}
        </p>
        <p className="card-text">
          <strong>Email:</strong> {student.email}
        </p>
        <hr />
        <div className="d-flex align-items-center mb-3">
          <FaBook className="me-2" />
          <h5 className="card-title mb-0">{course.courseName}</h5>
        </div>
        <p className="card-text">
          <strong>Course ID:</strong> {course.courseId}
        </p>
        <hr />
        <p className="card-text">
          <strong>Status:</strong> {status}
        </p>
        <p className="card-text">
          <strong>Requested At:</strong>{" "}
          {new Date(requestedAt).toLocaleString()}
        </p>
      </div>
      <div className="card-footer">
        <div className="d-flex">
          {status === "pending" && (
            <>
              <button
                className="btn btn-success me-2  px-5"
                onClick={handleAccept}
              >
                Accept
              </button>
              <button
                className="btn btn-danger mx-3 px-5"
                onClick={handleReject}
              >
                Reject
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
