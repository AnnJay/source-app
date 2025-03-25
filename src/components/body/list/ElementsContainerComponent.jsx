import { ElementComponent } from "./ElementComponent";

const mockUrls = [
  { name: "sdfsdfsdfsdf", url: "sdfsdfsdfsdfsd" },
  { name: "sdfsdfsdfsdf", url: "sdfsdfsdfsdfsd" },
  { name: "sdfsdfsdfsdf", url: "sdfsdfsdfsdfsd" },
  { name: "sdfsdfsdfsdf", url: "sdfsdfsdfsdfsd" },
  { name: "sdfsdfsdfsdf", url: "sdfsdfsdfsdfsd" },
  { name: "sdfsdfsdfsdf", url: "sdfsdfsdfsdfsd" },
];

export const ElementsContainerComponent = ({ urls = mockUrls }) => {
  return (
    <ul className="list">
      {urls.map((url, i) => (
        <ElementComponent name={url.name} url={url.url} key={i} />
      ))}
    </ul>
  );
};
