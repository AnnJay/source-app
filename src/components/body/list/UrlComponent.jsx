import { useSelector } from "react-redux";

export const UrlComponent = () => {
  const { urls, currentURL_ID } = useSelector((state) => state.urls);

  return (
    <h3 className="w-100 text-center p-2 mb-4 rounded-2 fs-5 bg-info">
      {currentURL_ID >= 0 && urls[currentURL_ID]
        ? urls[currentURL_ID].url
        : "Путь к источнику"}
    </h3>
  );
};
