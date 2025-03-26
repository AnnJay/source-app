import { CountColumnComponent } from "./CountColumnComponent";
import { CountRowComponent } from "./CountRowComponent";
import { JsonComponent } from "./JsonComponent";

export const InfoComponent = ({ loadedJSON, countRows, countColumns }) => {
  return (
    <div className="info-container">
      <h2 className="info-title">Информация</h2>
      <CountRowComponent countRows={countRows} />
      <CountColumnComponent countColumns={countColumns} />
      <JsonComponent loadedJSON={loadedJSON} />
    </div>
  );
};
