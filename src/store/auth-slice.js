import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  isLoggedIn: !!localStorage.getItem("token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const { idToken } = action.payload;
      const { autoLogin } = action.payload;
      state.isLoggedIn = true;
      state.token = idToken;

      if (autoLogin) {
        localStorage.setItem("token", idToken);
      }
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
