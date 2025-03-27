import { CountColumnComponent } from "./CountColumnComponent";
import { CountRowComponent } from "./CountRowComponent";
import { JsonComponent } from "./JsonComponent";

export const InfoComponent = () => {
  return (
    <div
      className="d-flex flex-column justify-content-start gap-2 w-100 mt-4"
      style={{ height: "calc(100% - 350px)" }}
    >
      <h2 className="text-center fs-4">Информация</h2>
      <CountRowComponent />
      <CountColumnComponent />
      <JsonComponent />
    </div>
  );
};
