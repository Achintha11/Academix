import { configureStore } from "@reduxjs/toolkit";
import teacherReducer from "../features/teacher/teacherSlice";
import studentReducer from "../features/student/studentSlice";
import courseReducers from "../features/courses/courseSlice";
import announcementReducer from "../features/announcement/announcementSlice";
import authReducer from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    teachers: teacherReducer,
    students: studentReducer,
    courses: courseReducers,
    announcements: announcementReducer,
    auth: authReducer,
  },
});

export default store;
