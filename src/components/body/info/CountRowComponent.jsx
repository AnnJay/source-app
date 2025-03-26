export const CountRowComponent = ({ countRows }) => {
  return (
    <div className="info-row">
      <p className="info-row-title">Количество записей</p>
      <input
        className="info-row-number"
        type="text"
        readOnly
        value={countRows}
      />
    </div>
  );
};
