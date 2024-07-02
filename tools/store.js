import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
/* import favorateReducer from "./favorateSlice"; */
const store = configureStore({
  reducer: {
    auth: authReducer,
    /*   favorates: favorateReducer, */
  },
});
export default store;
