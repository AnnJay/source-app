import { ElementsContainerComponent } from "./ElementsContainerComponent";
import { UrlButtons } from "./UrlButtons";
import { UrlComponent } from "./UrlComponent";

export const ListComponent = ({ urls, dispatch, currentUrlId }) => {
  return (
    <div className="list-container">
      <UrlComponent urlItem={urls[currentUrlId]} />

      <ElementsContainerComponent
        urls={urls}
        dispatch={dispatch}
        currentUrlId={currentUrlId}
      />

      <UrlButtons />
    </div>
  );
};
