import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./UserSlice";

export const store = configureStore({
  reducer: {
    users: userSlice,
  },
});
