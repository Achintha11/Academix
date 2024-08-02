import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const initialState = {
  announcements: [],
  status: "idle",
  showAlert: false,
};

export const getAllAnnouncements = createAsyncThunk(
  "announcements/getAllAnnouncements",
  async (_, thunkAPI) => {
    const role = thunkAPI.getState().auth.user.role;
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/announcements`, {
        headers: {
          Role: role,
        },
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const addAnnouncement = createAsyncThunk(
  "announcements/addAnnouncement",
  async (announcement, thunkAPI) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/v1/announcements`,
        announcement
      );
      thunkAPI.dispatch(setShowAlert(true));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteAnnouncement = createAsyncThunk(
  "announcements/deleteAnnouncement",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/api/v1/announcements/${id}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to delete announcement");
    }
  }
);

const announcementSlice = createSlice({
  name: "announcements",
  initialState,

  reducers: {
    setShowAlert: (state, action) => {
      state.showAlert = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllAnnouncements.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getAllAnnouncements.fulfilled, (state, action) => {
      state.announcements = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(getAllAnnouncements.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export const { setShowAlert } = announcementSlice.actions;

export default announcementSlice.reducer;
