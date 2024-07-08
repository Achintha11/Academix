import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addCourse,
  getAllCourses,
  setCourseId,
  setCourseName,
} from "../../features/courses/courseSlice";
import UserCourseCard from "../components/UserCourseCard";
import { useEffect } from "react";

const Courses = () => {
  const { courseName, courseId, courses } = useSelector(
    (store) => store.courses
  );
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch, courses]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(courseName, courseId);
    dispatch(addCourse({ courseId, courseName }));
  };

  return (
    <div className="container h-100 bg-white p-3">
      <div className="row my-3">
        <div className="col">
          <h1 className="text-muted">Courses</h1>
        </div>
      </div>

      {user.role === "admin" && (
        <div className="row">
          <div className="col">
            <form className="form-inline" onSubmit={handleSubmit}>
              <div className="form-group mr-3 mt-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Course ID"
                  required
                  onChange={(e) => dispatch(setCourseId(e.target.value))}
                />
              </div>
              <div className="form-group mr-3 mt-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Course Name"
                  required
                  onChange={(e) => dispatch(setCourseName(e.target.value))}
                />
              </div>
              <div className="form-group mt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-sm text-white"
                >
                  Add Course
                </button>
              </div>
            </form>
          </div>
          <div className="col">
            <div className="form-group position-relative mx-2 mt-2">
              <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-dark" />
              <input
                type="text"
                className="form-control pl-5"
                placeholder="Search Courses"
              />
            </div>
          </div>
        </div>
      )}

      <div className="row">
        <div className="col">
          {courses.map((course) => {
            const { courseId } = course;
            return <UserCourseCard key={courseId} {...course} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
