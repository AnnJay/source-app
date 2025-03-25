import {
  getUrlsFromLocalStorage,
  saveUrlsInLocalStorage,
} from "./localStorage";

export const actions = {
  changeCurrentURL_ID: "changeCurrentURL_ID",
  changeUrlsArray: "changeUrlsArray",
  saveUrlsInLocalStorage: "saveUrlsInLocalStorage",
  fetchUrlsFromLocalStorage: "fetchUrlsFromLocalStorage",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.changeCurrentURL_ID:
      return { ...state, currentURL_ID: action.payload.id };

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

    default:
      return state;
  }
};

// выбрать текущий урл +++
// назначить значение urls полностью +++
// удалить источник
// добавить источник
// изменить источник
//
//
//
//
