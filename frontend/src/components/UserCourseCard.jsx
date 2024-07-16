import { useDispatch, useSelector } from "react-redux";
import { removeCourse } from "../../features/courses/courseSlice";
import {
  getEnrollmentRequests,
  requestEnrollment,
} from "../../features/enrollment/enrollmentSlice";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { showModal } from "../../features/courseDetailsModal/modalSlice";

/* eslint-disable react/prop-types */
const UserCourseCard = ({ courseId, courseName, _id }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);
  const { requests, status } = useSelector((store) => store.enrollments);
  const location = useLocation();

  let hasRequested;
  let isApproved;
  const handleShowModal = () => {
    dispatch(showModal());
  };

  if (status === "success" && requests.length > 0) {
    hasRequested = requests.some(
      (request) =>
        request.course.courseId === courseId && request.student._id === user._id
    );

    isApproved = requests.some(
      (request) =>
        request.course.courseId === courseId &&
        request.student._id === user._id &&
        request.status === "approved"
    );
  }

  const handleEnrollmentRequest = () => {
    const student = user._id;
    const course = _id;
    dispatch(requestEnrollment({ student, course })).then(() => {
      dispatch(getEnrollmentRequests());
    });
  };

  return (
    <div
      className=" card mb-3 border-0 my-3 user-course-card"
      style={{
        cursor: "pointer",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onClick={handleShowModal}
    >
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 className="card-title">{courseName}</h5>
          <p className="card-text">ID: {courseId}</p>
        </div>

        {user.role === "admin" && (
          <div style={{ pointerEvents: "auto" }}>
            <button className="btn btn-warning me-3 btn-sm">Edit</button>
            <button
              onClick={() => dispatch(removeCourse(courseId))}
              className="btn btn-danger btn-sm"
            >
              Remove
            </button>
          </div>
        )}

        {user.role === "student" &&
          location.pathname !== "/dashboard/my-courses" && (
            <div style={{ pointerEvents: "auto" }}>
              {isApproved ? (
                <span className="text-success">
                  You are enrolled in this course
                </span>
              ) : (
                <button
                  onClick={handleEnrollmentRequest}
                  className="btn btn-success me-3 btn-normal"
                  disabled={hasRequested}
                >
                  {hasRequested ? "Requested" : "Enroll"}
                </button>
              )}
            </div>
          )}
      </div>
    </div>
  );
};

export default UserCourseCard;
