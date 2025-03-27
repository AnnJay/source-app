import { ElementComponent } from "./ElementComponent";

export const ElementsContainerComponent = ({
  urls,
  dispatch,
  currentUrlId,
}) => {
  return (
    <ul
      className="list-group overflow-auto rounded-2 mb-4 bg-light"
      style={{ height: "160px" }}
    >
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
