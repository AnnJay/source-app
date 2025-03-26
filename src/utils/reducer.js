import { countRowsAndColumns } from "./count";
import {
  getUrlsFromLocalStorage,
  saveUrlsInLocalStorage,
} from "./localStorage";

export const actions = {
  changeCurrentURL_ID: "changeCurrentURL_ID",
  changeLoadedJSON: "changeLoadedJSON",
  changeUrlsArray: "changeUrlsArray",
  countRowsAndColumns: "countRowsAndColumns",
  fetchUrlsFromLocalStorage: "fetchUrlsFromLocalStorage",
  saveUrlsInLocalStorage: "saveUrlsInLocalStorage",
  startLoading: "startLoading",
  addSource: "addSource",
  updateSource: "updateSource",
  deleteSource: "deleteSource",
};

const emptyFields = {
  currentURL_ID: -1,
  statusLoadedJSON: false,
  loadedJSON: {},
  countRows: 0,
  countColumns: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.changeCurrentURL_ID:
      return { ...state, currentURL_ID: action.payload };

    case actions.changeUrlsArray:
      return { ...state, urls: action.payload, ...emptyFields };

    case actions.saveUrlsInLocalStorage:
      saveUrlsInLocalStorage(state.urls);
      return state;

    case actions.fetchUrlsFromLocalStorage:
      const fetchedUrls = getUrlsFromLocalStorage();

      return {
        ...state,
        urls: fetchedUrls ? fetchedUrls : [],
        ...emptyFields,
      };

    case actions.startLoading:
      return {
        ...state,
        statusLoadedJSON: false,
        loadedJSON: {},
        countRows: 0,
        countColumns: 0,
      };

    case actions.changeLoadedJSON:
      return { ...state, loadedJSON: action.payload, statusLoadedJSON: true };

    case actions.countRowsAndColumns:
      if (state.currentURL_ID < 0) return state;

      const countData = countRowsAndColumns(state.loadedJSON);

      if (!countData) return state;

      return {
        ...state,
        countRows: countData.rows,
        countColumns: countData.columns,
      };

    case actions.addSource:
      return { ...state, urls: [...state.urls, action.payload] };

    case actions.updateSource:
      const copyUrls = [...state.urls];
      copyUrls[action.payload.index] = action.payload.updatedUrl;
      return { ...state, urls: copyUrls };

    case actions.deleteSource:
      const filteredUrls = state.urls.filter(
        (_, i) => i !== action.payload.index
      );

      return {
        ...state,
        urls: filteredUrls,
        ...emptyFields,
      };

    default:
      return state;
  }
};
