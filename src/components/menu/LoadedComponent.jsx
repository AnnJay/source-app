export const LoadedComponent = ({ statusLoadedJSON }) => {
  return (
    <div className="loader-container text-primary ">
      {statusLoadedJSON ? "Данные загружены" : ""}
    </div>
  );
};
