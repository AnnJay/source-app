import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  urls: [],
  currentURL_ID: -1,
};

// changeLoadedJSON: "changeLoadedJSON",
// changeUrlsArray: "changeUrlsArray",
// countRowsAndColumns: "countRowsAndColumns",
// fetchUrlsFromLocalStorage: "fetchUrlsFromLocalStorage",
// saveUrlsInLocalStorage: "saveUrlsInLocalStorage",
// startLoading: "startLoading",
// addSource: "addSource",
// updateSource: "updateSource",
// deleteSource: "deleteSource",

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
  },
});

export const { changeCurrentUrl, setUrls } = urlsSlice.actions;

export const urlsReducer = urlsSlice.reducer;
