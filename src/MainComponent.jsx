import { BodyComponent } from "./components/body/BodyComponent";
import { MenuComponent } from "./components/menu/MenuComponent";

export const MainComponent = () => {
  return (
    <div className="main-container">
      <MenuComponent />
      <BodyComponent />
    </div>
  );
};
