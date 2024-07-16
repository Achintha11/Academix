import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCourseCard from "../components/UserCourseCard";
import { fetchStudentCourses } from "../../features/student/studentSlice";
import CourseDetailsModal from "../components/CourseDetailsModal";

const MyCourses = () => {
  const dispatch = useDispatch();
  const { courses, status, error } = useSelector((store) => store.students);
  const { user } = useSelector((store) => store.auth);

  useEffect(() => {
    if (user) {
      dispatch(fetchStudentCourses(user._id));
    }
  }, [dispatch, user]);

  return (
    <>
      <div className="container mt-4 bg-white">
        <h2 className="text-muted">My Courses</h2>
        {status === "loading" && <p>Loading...</p>}
        {status === "failed" && <p>Error: {error}</p>}
        {status === "succeeded" && (
          <div className="row">
            {Array.isArray(courses) && courses.length > 0 ? (
              courses.map((course) => (
                <div key={course._id} className="col mb-4">
                  <UserCourseCard
                    courseId={course.courseId}
                    courseName={course.courseName}
                    _id={course._id}
                  />
                </div>
              ))
            ) : (
              <p className="text-muted">No courses available</p>
            )}
          </div>
        )}
      </div>

      <CourseDetailsModal />
    </>
  );
};

export default MyCourses;
