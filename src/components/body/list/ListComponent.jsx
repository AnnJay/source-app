import { ElementsContainerComponent } from "./ElementsContainerComponent";
import { UrlButtons } from "./UrlButtons";
import { UrlComponent } from "./UrlComponent";

export const ListComponent = ({ urls }) => {
  return (
    <div className="list-container">
      <UrlComponent />

      <ElementsContainerComponent urls={urls} />

      <UrlButtons />
    </div>
  );
};
