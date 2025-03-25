export const JsonComponent = ({ loadedJSON }) => {
  return (
    <div className="json-container">
      <pre>{JSON.stringify(loadedJSON, null, 2)}</pre>
    </div>
  );
};
