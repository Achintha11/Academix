import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "http://192.168.1.5:3000/api/v1/teachers"
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const addTeacher = createAsyncThunk(
  "teachers/addTeacher",
  async ({ email, name, teacherId }, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://192.168.1.5:3000/api/v1/teachers",
        {
          email,
          name,
          teacherId,
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const removeTeacher = createAsyncThunk(
  "teachers/removeTeacher",
  async (teacherId) => {
    try {
      await axios.delete(
        `http://192.168.1.5:3000/api/v1/teachers/${teacherId}`
      );
      return teacherId;
    } catch (error) {
      console.log(error);
    }
  }
);

const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    teachers: [],
    name: "",
    email: "",
    teacherId: "",
    status: "idle",
  },

  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setTeacherId: (state, action) => {
      state.teacherId = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTeachers.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchTeachers.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.teachers = action.payload;
    });
    builder.addCase(fetchTeachers.rejected, (state) => {
      state.status = "failed";
    });
    builder.addCase(addTeacher.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(addTeacher.fulfilled, (state, action) => {
      state.teachers.push(action.payload);
      state.status = "succeeded";
    });
    builder.addCase(removeTeacher.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(removeTeacher.fulfilled, (state) => {
      state.status = "succeeded";
    });
    builder.addCase(removeTeacher.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export const { setEmail, setName, setTeacherId } = teachersSlice.actions;
export default teachersSlice.reducer;
