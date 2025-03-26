import { useEffect } from "react";

import { actions } from "../../utils/reducer";
import { InfoComponent } from "./info/InfoComponent";
import { ListComponent } from "./list/ListComponent";

import "./body.css";

export const BodyComponent = ({ appState, dispatch }) => {
  useEffect(() => {
    if (appState.currentURL_ID >= 0) {
      const url = appState.urls[appState.currentURL_ID].url;

      dispatch({ type: actions.startLoading });

      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          dispatch({ type: actions.changeLoadedJSON, payload: data });
        })
        .catch((error) => console.log(error));
    }
  }, [appState.currentURL_ID]);

  return (
    <div className="body-container">
      <h2 className="body-title">Список источников данных</h2>

      <ListComponent
        urls={appState.urls}
        dispatch={dispatch}
        currentUrlId={appState.currentURL_ID}
      />

      <InfoComponent loadedJSON={appState.loadedJSON} />
    </div>
  );
};
