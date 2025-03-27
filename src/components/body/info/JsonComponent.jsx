export const JsonComponent = ({ loadedJSON }) => {
  return (
    <div className="overflow-auto h-75 rounded-2 bg-light border-dark">
      <pre>{JSON.stringify(loadedJSON, null, 2)}</pre>
    </div>
  );
};
