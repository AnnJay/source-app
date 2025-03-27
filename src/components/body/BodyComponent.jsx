import { useEffect } from "react";

import { actions } from "../../utils/reducer";
import { InfoComponent } from "./info/InfoComponent";
import { ListComponent } from "./list/ListComponent";

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
    <div className="col-8 h-100 p-3 d-flex flex-column rounded-4 bg-primary">
      <h2 className="text-center fs-4 mb-4">Список источников данных</h2>

      <ListComponent
        urls={appState.urls}
        dispatch={dispatch}
        currentUrlId={appState.currentURL_ID}
      />

      <InfoComponent
        loadedJSON={appState.loadedJSON}
        countRows={appState.countRows}
        countColumns={appState.countColumns}
      />
    </div>
  );
};
