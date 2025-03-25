import "./body.css";
import { InfoComponent } from "./info/InfoComponent";
import { ListComponent } from "./list/ListComponent";

export const BodyComponent = () => {
  return (
    <div className="body-container">
      <h2 className="body-title">Список источников данных</h2>

      <ListComponent />

      <InfoComponent />
    </div>
  );
};
