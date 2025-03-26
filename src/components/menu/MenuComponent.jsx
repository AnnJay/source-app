import { ButtonsComponent } from "./ButtonsComponent";
import { LoadedComponent } from "./LoadedComponent";

import "./menu.css";

export const MenuComponent = ({ dispatch, statusLoadedJSON }) => {
  return (
    <div className="menu-container">
      <div>
        <h2 className="menu-title">Меню</h2>
        <ButtonsComponent dispatch={dispatch} />
      </div>

      <LoadedComponent statusLoadedJSON={statusLoadedJSON} />
    </div>
  );
};
