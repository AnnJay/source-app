import {
  getUrlsFromLocalStorage,
  saveUrlsInLocalStorage,
} from "./localStorage";

export const actions = {
  changeCurrentURL_ID: "changeCurrentURL_ID",
  changeUrlsArray: "changeUrlsArray",
  saveUrlsInLocalStorage: "saveUrlsInLocalStorage",
  fetchUrlsFromLocalStorage: "fetchUrlsFromLocalStorage",
  startLoading: "startLoading",
  changeLoadedJSON: "changeLoadedJSON",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.changeCurrentURL_ID:
      return { ...state, currentURL_ID: action.payload };

    case actions.changeUrlsArray:
      return { ...state, urls: action.payload, currentURL_ID: -1 };

    case actions.saveUrlsInLocalStorage:
      saveUrlsInLocalStorage(state.urls);
      return state;

    case actions.fetchUrlsFromLocalStorage:
      const fetchedUrls = getUrlsFromLocalStorage();

      return {
        ...state,
        urls: fetchedUrls ? fetchedUrls : [],
        currentURL_ID: -1,
      };

    case actions.startLoading:
      return { ...state, statusLoadedJSON: false };

    case actions.changeLoadedJSON:
      return { ...state, loadedJSON: action.payload, statusLoadedJSON: true };

    default:
      return state;
  }
};

// удалить источник
// добавить источник
// изменить источник
