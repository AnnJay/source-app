export const UrlComponent = ({ urlItem }) => {
  return (
    <h3 className="source-path-title">
      {urlItem?.url ? urlItem.url : "Путь к источнику"}
    </h3>
  );
};
