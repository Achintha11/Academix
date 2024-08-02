import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getEnrollmentRequests = createAsyncThunk(
  "enrollments/getEnrollmentRequests ",
  async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/enrollmentRequests`);
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
        `${BASE_URL}/api/v1/enrollmentRequests`,
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
        `${BASE_URL}/api/v1/enrollmentRequests/${id}`,
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
