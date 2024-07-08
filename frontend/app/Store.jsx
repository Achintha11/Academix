import { configureStore } from "@reduxjs/toolkit";
import teacherReducer from "../features/teacher/teacherSlice";
import studentReducer from "../features/student/studentSlice";
import courseReducers from "../features/courses/courseSlice";
import announcementReducer from "../features/announcement/announcementSlice";
import authReducer from "../features/auth/authSlice";
import enrollmentReducer from "../features/enrollment/enrollmentSlice";

const store = configureStore({
  reducer: {
    teachers: teacherReducer,
    students: studentReducer,
    courses: courseReducers,
    announcements: announcementReducer,
    auth: authReducer,
    enrollments: enrollmentReducer,
  },
});

export default store;
