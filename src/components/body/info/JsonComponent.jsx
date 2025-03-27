import { useSelector } from "react-redux";

export const JsonComponent = () => {
  const { loadedJSON } = useSelector((state) => state.json);

  return (
    <div className="overflow-auto rounded-2 bg-light border-dark flex-grow-1">
      <pre>{JSON.stringify(loadedJSON, null, 2)}</pre>
    </div>
  );
};
