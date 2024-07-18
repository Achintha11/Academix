import { configureStore } from "@reduxjs/toolkit";
import teacherReducer from "../features/teacher/teacherSlice";
import studentReducer from "../features/student/studentSlice";
import courseReducers from "../features/courses/courseSlice";
import announcementReducer from "../features/announcement/announcementSlice";
import authReducer from "../features/auth/authSlice";
import enrollmentReducer from "../features/enrollment/enrollmentSlice";
import modalReducer from "../features/courseDetailsModal/modalSlice";
import assignmentReducer from "../features/assignment/assignmentSlice";

const store = configureStore({
  reducer: {
    teachers: teacherReducer,
    students: studentReducer,
    courses: courseReducers,
    announcements: announcementReducer,
    auth: authReducer,
    enrollments: enrollmentReducer,
    modal: modalReducer,
    assignments: assignmentReducer,
  },
});

export default store;
