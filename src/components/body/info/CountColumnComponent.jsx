import { useSelector } from "react-redux";

export const CountColumnComponent = () => {
  const { countColumns } = useSelector((state) => state.json);

  return (
    <div className="d-flex justify-content-between">
      <p className="fs-5 fw-500 text-light w-75 mb-0">Количество полей</p>
      <input
        className="form-control w-25"
        type="text"
        readOnly
        value={countColumns}
      />
    </div>
  );
};
