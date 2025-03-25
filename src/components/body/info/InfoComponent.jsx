import { CountColumnComponent } from "./CountColumnComponent";
import { CountRowComponent } from "./CountRowComponent";
import { JsonComponent } from "./JsonComponent";

export const InfoComponent = () => {
  return (
    <div className="info-container">
      <h2 className="info-title">Информация</h2>
      <CountRowComponent />
      <CountColumnComponent />
      <JsonComponent />
    </div>
  );
};
