import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAssignments = createAsyncThunk(
  "assignments/getAssignments",
  async (courseId) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/assignments/${courseId}`
      );
      console.log("Assignments fetched:", response.data);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addNewAssignment = createAsyncThunk(
  "assignments/addNewAssignments",
  async ({
    assignmentTitle,
    assignmentDescription,
    assignmentDueDate,
    courseId,
  }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/assignments",
        { assignmentTitle, assignmentDescription, assignmentDueDate, courseId }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const assignmentSlice = createSlice({
  name: "assignments",
  initialState: {
    assignments: [],
    assignmentTitle: "",
    assignmentDescription: "",
    assignmentDueDate: "",
    selectedCourse: null,
  },

  reducers: {
    setAssignmentTitle: (state, action) => {
      state.assignmentTitle = action.payload;
    },
    setAssignmentDescription: (state, action) => {
      state.assignmentDescription = action.payload;
    },
    setAssignmentDueDate: (state, action) => {
      state.assignmentDueDate = action.payload;
    },
    setSelectedCourse: (state, action) => {
      state.selectedCourse = action.payload;
    },
    clearSelectedCourse: (state) => {
      state.selectedCourse = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAssignments.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAssignments.fulfilled, (state, action) => {
        state.assignments = action.payload;
        state.loading = false;
      })
      .addCase(getAssignments.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default assignmentSlice.reducer;
export const {
  setAssignmentDueDate,
  setAssignmentDescription,
  setAssignmentTitle,
  setSelectedCourse,
  clearSelectedCourse,
} = assignmentSlice.actions;
