import { ElementsContainerComponent } from "./ElementsContainerComponent";
import { UrlButtons } from "./UrlButtons";
import { UrlComponent } from "./UrlComponent";

export const ListComponent = ({ urls, dispatch, currentUrlId }) => {
  return (
    <div className="h-50">
      <UrlComponent urlItem={urls[currentUrlId]} />

      <ElementsContainerComponent
        urls={urls}
        dispatch={dispatch}
        currentUrlId={currentUrlId}
      />

      <UrlButtons
        dispatch={dispatch}
        currentUrl={urls[currentUrlId]}
        currentUrlId={currentUrlId}
      />
    </div>
  );
};
