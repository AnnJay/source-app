import { useSelector } from "react-redux";

import { ElementComponent } from "./ElementComponent";

export const ElementsContainerComponent = () => {
  const { urls } = useSelector((state) => state.urls);

  return (
    <ul
      className="list-group overflow-auto rounded-2 mb-4 bg-light"
      style={{ height: "160px" }}
    >
      {urls.map((url, i) => (
        <ElementComponent name={url.name} key={i} index={i} />
      ))}
    </ul>
  );
};
