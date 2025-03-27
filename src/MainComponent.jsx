import { BodyComponent } from "./components/body/BodyComponent";
import { MenuComponent } from "./components/menu/MenuComponent";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export const MainComponent = () => {
  return (
    <div className="d-flex bg-dark justify-content-center">
      <div className="container vh-100 w-100 row gap-4 p-5">
        <MenuComponent />
        <BodyComponent />
      </div>
    </div>
  );
};
