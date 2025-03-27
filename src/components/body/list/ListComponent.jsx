import { ElementsContainerComponent } from "./ElementsContainerComponent";
import { UrlButtons } from "./UrlButtons";
import { UrlComponent } from "./UrlComponent";

export const ListComponent = () => {
  return (
    <div className="h-50">
      <UrlComponent />

      <ElementsContainerComponent />

      <UrlButtons />
    </div>
  );
};
