import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state) => {
      state.show = true;
    },
    hideModal: (state) => {
      state.show = false;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;
export const selectModal = (state) => state.modal.show;
export default modalSlice.reducer;
