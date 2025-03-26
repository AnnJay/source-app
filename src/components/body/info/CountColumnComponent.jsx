export const CountColumnComponent = ({ countColumns }) => {
  return (
    <div className="info-row">
      <p className="info-row-title text-primary ">Количество полей</p>
      <input
        className="info-row-number"
        type="text"
        readOnly
        value={countColumns}
      />
    </div>
  );
};
