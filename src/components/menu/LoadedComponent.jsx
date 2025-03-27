export const LoadedComponent = ({ statusLoadedJSON }) => {
  return (
    <div className="text-center text-uppercase fs-6 fw-medium text-dark">
      {statusLoadedJSON ? "Данные загружены" : ""}
    </div>
  );
};
