import { useSelector } from "react-redux";

export const JsonComponent = () => {
  const { loadedJSON } = useSelector((state) => state.json);
  
  return (
    <div className="overflow-auto h-75 rounded-2 bg-light border-dark">
      <pre>{JSON.stringify(loadedJSON, null, 2)}</pre>
    </div>
  );
};
