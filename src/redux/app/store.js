import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "../features/tab/tabSlice";

const store = configureStore({
  reducer: {
    tab: tabReducer,
  },
});

export default store;
