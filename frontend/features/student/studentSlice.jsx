import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/students");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addStudent = createAsyncThunk(
  "students/addStudent",
  async ({ name, studentId, email }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/students",
        {
          name,
          studentId,
          email,
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const removeStudent = createAsyncThunk(
  "students/deleteStudent",
  async (studentId) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/v1/students/${studentId}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);
export const fetchStudentCourses = createAsyncThunk(
  "studentCourses/fetchStudentCourses",
  async (studentId) => {
    const response = await axios.get(
      `http://localhost:3000/api/v1/students/${studentId}/courses`
    );
    return response.data;
  }
);

const studentSlice = createSlice({
  name: "students",
  initialState: {
    students: [],
    courses: [],
    name: "",
    email: "",
    studentId: "",
    status: "idle",
  },

  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setStudentId: (state, action) => {
      state.studentId = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchStudents.fulfilled, (state, action) => {
      state.students = action.payload;
    });
    builder.addCase(removeStudent.fulfilled, (state) => {
      state.status = "succeeded";
    });
    builder.addCase(fetchStudentCourses.fulfilled, (state, action) => {
      state.courses = action.payload;
      state.status = "succeeded";
    });
  },
});

export const { setName, setEmail, setStudentId } = studentSlice.actions;

export default studentSlice.reducer;
