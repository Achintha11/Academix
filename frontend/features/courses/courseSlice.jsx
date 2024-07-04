import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCourses = createAsyncThunk(
  "courses/getAllCourses",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "http://192.168.1.5:3000/api/v1/courses"
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const addCourse = createAsyncThunk(
  "courses/addCourse",
  async ({ courseId, courseName }, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://192.168.1.5:3000/api/v1/courses",
        {
          courseId,
          courseName,
        }
      );
      thunkAPI.dispatch(setCourseId(""));
      thunkAPI.dispatch(setCourseName(""));

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const removeCourse = createAsyncThunk(
  "courses/removeCourse",
  async (courseId) => {
    try {
      const response = await axios.delete(
        `http://192.168.1.5:3000/api/v1/courses/${courseId}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

const courseSlice = createSlice({
  name: "course",
  initialState: {
    courses: [],
    courseName: "",
    courseId: "",
    status: "idle",
  },

  reducers: {
    setCourseName: (state, action) => {
      state.courseName = action.payload;
    },

    setCourseId: (state, action) => {
      state.courseId = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllCourses.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getAllCourses.fulfilled, (state, action) => {
      state.courses = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(getAllCourses.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export const { setCourseName, setCourseId } = courseSlice.actions;

export default courseSlice.reducer;
