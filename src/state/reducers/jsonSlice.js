import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  loadedJSON: {},
  countRows: 0,
  countColumns: 0,
  statusLoadedJSON: false,
};

const jsonSlice = createSlice({
  name: "json",
  initialState: INITIAL_STATE,
  reducers: {
    clearJson(state) {
      state.loadedJSON = {};
      state.countRows = 0;
      state.countColumns = 0;
      state.statusLoadedJSON = false;
    },
    count(state, action) {
      state.countRows = action.payload.rows;
      state.countColumns = action.payload.columns;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadJSON.fulfilled, (state, action) => {
      state.loadedJSON = action.payload.loadedJSON;
      state.statusLoadedJSON = true;
    });
  },
});

export const loadJSON = createAsyncThunk("json/loadJSON", async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return { loadedJSON: data };
  } catch (error) {
    console.log(error);
  }
});

export const { clearJson, count } = jsonSlice.actions;

export const jsonReducer = jsonSlice.reducer;
