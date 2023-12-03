import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/addPostSlice";
import userReducer from "../features/users/userSlice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer,
  },
});
