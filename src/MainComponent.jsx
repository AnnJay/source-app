import { useReducer } from "react";

import { BodyComponent } from "./components/body/BodyComponent";
import { MenuComponent } from "./components/menu/MenuComponent";
import { reducer } from "./utils/reducer";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const INITIAL_STATE = {
  urls: [],
  loadedJSON: {},
  countRows: 0,
  countColumns: 0,
  statusLoadedJSON: false,
  currentURL_ID: -1,
};

export const MainComponent = () => {
  const [appState, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <div className="d-flex bg-dark justify-content-center">
      <div className="container vh-100 w-100 row gap-4 p-5">
        <MenuComponent
          dispatch={dispatch}
          statusLoadedJSON={appState.statusLoadedJSON}
        />
        <BodyComponent appState={appState} dispatch={dispatch} />
      </div>
    </div>
  );
};
