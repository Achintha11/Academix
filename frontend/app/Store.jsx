import { configureStore } from "@reduxjs/toolkit";
import teacherReducer from "../features/teacher/teacherSlice";
import studentReducer from "../features/student/studentSlice";
import courseReducers from "../features/courses/courseSlice";

const store = configureStore({
  reducer: {
    teachers: teacherReducer,
    students: studentReducer,
    courses: courseReducers,
  },
});

export default store;
