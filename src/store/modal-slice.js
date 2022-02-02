import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  message: "",
  isActive: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action) {
      const { title, message } = action.payload;

      state.title = title;
      state.message = message;
      state.isActive = !state.isActive;
    },
    closeModal(state) {
      state.isActive = initialState.isActive;
      state.title = initialState.title;
      state.message = initialState.message;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice;
