import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice";
import personReducer from "./personSlice";
import authReducer from "./authSlice";

const appStore = configureStore({
  reducer: {
    movies: moviesReducer,
    person: personReducer,
    auth: authReducer,
  },
});

export default appStore;
