import { ElementComponent } from "./ElementComponent";

export const ElementsContainerComponent = ({ urls }) => {
  return (
    <ul className="list">
      {urls.map((url, i) => (
        <ElementComponent name={url.name} url={url.url} key={i} />
      ))}
    </ul>
  );
};
