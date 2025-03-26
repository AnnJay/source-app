export const LoadedComponent = ({ statusLoadedJSON }) => {
  return (
    <div className="loader-container">
      {statusLoadedJSON ? "Данные загружены" : ""}
    </div>
  );
};
