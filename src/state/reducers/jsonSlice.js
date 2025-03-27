import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  loadedJSON: {},
  countRows: 0,
  countColumns: 0,
  statusLoadedJSON: false,
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

const jsonSlice = createSlice({
  name: "json",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadJSON.pending, (state) => {
        state.statusLoadedJSON = false;
      })
      .addCase(loadJSON.fulfilled, (state, action) => {
        state.loadedJSON = action.payload.loadedJSON;
      });
  },
});

export const loadJSON = createAsyncThunk("urls/loadJSON", async (url) => {
  fetch(url)
    .then((response) => {
      return { loadedJSON: response.json() };
    })
    .catch((error) => console.log(error));
});

export const {} = jsonSlice.actions;

export const jsonReducer = jsonSlice.reducer;
