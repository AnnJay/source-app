export const UrlComponent = ({ urlItem }) => {
  return (
    <h3 className="w-100 text-center p-2 mb-4 rounded-2 fs-5 bg-info">
      {urlItem?.url ? urlItem.url : "Путь к источнику"}
    </h3>
  );
};
