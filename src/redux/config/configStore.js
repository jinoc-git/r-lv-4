import { configureStore } from "@reduxjs/toolkit";
import users from "../modules/usersSlice";

const store = configureStore({
  reducer: {
    users,
  },
  devTools: process.env.NODE_ENV !== 'production'
})

export default store;