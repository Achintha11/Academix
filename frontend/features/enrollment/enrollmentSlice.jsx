import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getEnrollmentRequests = createAsyncThunk(
  "enrollments/getEnrollmentRequests ",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/enrollmentRequests"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const requestEnrollment = createAsyncThunk(
  "enrollments/requestEnrollment",
  async ({ student, course }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/enrollmentRequests",
        { student, course }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateEnrollmentRequest = createAsyncThunk(
  "enrollments/updateEnrollmentRequest",
  async ({ id, action }) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/v1/enrollmentRequests/${id}`,
        { status: action }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState: {
    requests: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEnrollmentRequests.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getEnrollmentRequests.fulfilled, (state, action) => {
      state.requests = action.payload;
      state.status = "success";
    });
    builder.addCase(getEnrollmentRequests.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export default enrollmentSlice.reducer;
