import { useSelector } from "react-redux";

export const LoadedComponent = () => {
  const { statusLoadedJSON } = useSelector((state) => state.json);
  
  return (
    <div className="text-center text-uppercase fs-6 fw-medium text-dark">
      {statusLoadedJSON ? "Данные загружены" : ""}
    </div>
  );
};
