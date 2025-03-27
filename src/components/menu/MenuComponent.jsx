import { ButtonsComponent } from "./ButtonsComponent";
import { LoadedComponent } from "./LoadedComponent";

export const MenuComponent = ({ dispatch, statusLoadedJSON }) => {
  return (
    <div className="h-100 col-3 p-3 d-flex flex-column justify-content-between bg-primary rounded-4">
      <div>
        <h2 className="mb-4 fs-5 text-center text-uppercase">Меню</h2>
        <ButtonsComponent dispatch={dispatch} />
      </div>

      <LoadedComponent statusLoadedJSON={statusLoadedJSON} />
    </div>
  );
};
