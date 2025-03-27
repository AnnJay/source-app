import { configureStore } from "@reduxjs/toolkit";
import { urlsReducer } from "./reducers/urlsSlice";
import { jsonReducer } from "./reducers/jsonSlice";

const store = configureStore({
  reducer: {
    urls: urlsReducer,
    json: jsonReducer,
  },
});

export default store;
