import { configureStore } from "@reduxjs/toolkit";
import listsReducer from "../store/listsSlice";
import dateReducer from "../store/dateSlice";

export const store = configureStore({
  reducer: {
    lists: listsReducer,
    date: dateReducer,
  },
});
