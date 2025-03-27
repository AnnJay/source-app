import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  urls: [],
  currentURL_ID: -1,
};

const urlsSlice = createSlice({
  name: "urls",
  initialState: INITIAL_STATE,
  reducers: {
    changeCurrentUrl(state, action) {
      state.currentURL_ID = action.payload.id;
    },
    setUrls(state, action) {
      state.urls = action.payload.urls;
    },
    addUrl(state, action) {
      state.urls.push(action.payload.url);
    },
    updateUrl(state, action) {
      state.urls = state.urls.map((url, i) =>
        i === action.payload.index ? action.payload.url : url
      );
    },
    removeUrl(state, action) {
      state.urls = state.urls.filter((_, i) => i !== action.payload.id);
      state.currentURL_ID = -1;
    },
  },
});

export const { changeCurrentUrl, setUrls, addUrl, removeUrl, updateUrl } =
  urlsSlice.actions;

export const urlsReducer = urlsSlice.reducer;
