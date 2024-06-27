import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    status: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.status = true;
    },
    logout: (state, _) => {
      state.user = null;
      state.status = false;
    },
  },
});

const { login, logout } = authSlice.actions;
export default authSlice.reducer;