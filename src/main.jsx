import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { MainComponent } from "./MainComponent.jsx";
import store from "./state/store.js";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <MainComponent />
    </Provider>
  </StrictMode>
);
