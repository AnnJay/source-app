import { ElementsContainerComponent } from "./ElementsContainerComponent";
import { UrlButtons } from "./UrlButtons";
import { UrlComponent } from "./UrlComponent";

export const ListComponent = () => {
  return (
    <div className="list-container">
      <UrlComponent />
      
      <ElementsContainerComponent />

      <UrlButtons />
    </div>
  );
};
