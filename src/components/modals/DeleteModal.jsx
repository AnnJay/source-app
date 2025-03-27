import { actions } from "../../utils/reducer";

export const DeleteModal = ({ onClose, dispatch, currentUrlId, name }) => {
  const handleDeleteSource = () => {
    dispatch({ type: actions.deleteSource, payload: { index: currentUrlId } });
    onClose();
  };

  return (
    <>
      <div className="modal-backdrop show" onClick={onClose}></div>

      <div
        className="modal d-block"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header p-2">
              <h5 className="modal-title">Удалить источник</h5>
              <button
                type="button"
                className="btn-close fs-6"
                onClick={onClose}
              ></button>
            </div>

            <div className="modal-body">
              <p className="mb-0">
                Точно удалить источник <span className="fw-bold">{name}</span>?
              </p>
            </div>

            <div className="modal-footer p-1">
              <button className="btn btn-warning text-dark" onClick={onClose}>
                Отменить
              </button>
              <button
                className="btn btn-danger text-dark"
                onClick={handleDeleteSource}
              >
                Удалить
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
