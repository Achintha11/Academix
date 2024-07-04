import { useDispatch } from "react-redux";
import { removeCourse } from "../../features/courses/courseSlice";

/* eslint-disable react/prop-types */
const UserCourseCard = ({ courseId, courseName }) => {
  const dispatch = useDispatch();
  return (
    <div
      className=" card mb-3 border-0 my-3 user-course-card"
      style={{
        cursor: "pointer",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
    >
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 className="card-title">{courseName}</h5>
          <p className="card-text">ID: {courseId}</p>
        </div>
        <div style={{ pointerEvents: "auto" }}>
          <button className="btn btn-warning me-3 btn-sm">Edit</button>
          <button
            onClick={() => dispatch(removeCourse(courseId))}
            className="btn btn-danger btn-sm"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCourseCard;
