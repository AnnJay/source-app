import { ButtonsComponent } from "./ButtonsComponent";
import { LoadedComponent } from "./LoadedComponent";

import "./menu.css";

export const MenuComponent = () => {
  return (
    <div className="menu-container">
      <div>
        <h2 className="menu-title">Меню</h2>
        <ButtonsComponent />
      </div>

      <LoadedComponent />
    </div>
  );
};
