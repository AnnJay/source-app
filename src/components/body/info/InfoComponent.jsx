import { CountColumnComponent } from "./CountColumnComponent";
import { CountRowComponent } from "./CountRowComponent";
import { JsonComponent } from "./JsonComponent";

export const InfoComponent = () => {
  return (
    <div
      className="d-flex flex-column gap-2 w-100 mt-4 h-50"
      style={{ maxHeight: "50%" }}
    >
      <h2 className="text-center fs-4">Информация</h2>
      <CountRowComponent />
      <CountColumnComponent />
      <JsonComponent />
    </div>
  );
};
