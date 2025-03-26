import { useReducer } from "react";

import { BodyComponent } from "./components/body/BodyComponent";
import { MenuComponent } from "./components/menu/MenuComponent";
import { reducer } from "./utils/reducer";

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
    <div className="main-container">
      <MenuComponent
        dispatch={dispatch}
        statusLoadedJSON={appState.statusLoadedJSON}
      />
      <BodyComponent appState={appState} dispatch={dispatch} />
    </div>
  );
};
