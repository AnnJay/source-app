import { ElementComponent } from "./ElementComponent";

export const ElementsContainerComponent = ({
  urls,
  dispatch,
  currentUrlId,
}) => {
  return (
    <ul className="list">
      {urls.map((url, i) => (
        <ElementComponent
          name={url.name}
          key={i}
          dispatch={dispatch}
          index={i}
          currentUrlId={currentUrlId}
        />
      ))}
    </ul>
  );
};
