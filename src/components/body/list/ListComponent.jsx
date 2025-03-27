import { ElementsContainerComponent } from "./ElementsContainerComponent";
import { UrlButtons } from "./UrlButtons";
import { UrlComponent } from "./UrlComponent";

export const ListComponent = () => {
  return (
    <div style={{ height: "280px" }}>
      <UrlComponent />

      <ElementsContainerComponent />

      <UrlButtons />
    </div>
  );
};
