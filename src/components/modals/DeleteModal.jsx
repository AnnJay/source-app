import { actions } from "../../utils/reducer";
import { Modal } from "./Modal";

export const DeleteModal = ({ onClose, dispatch, currentUrlId, name }) => {
  const handleDeleteSource = () => {
    dispatch({ type: actions.deleteSource, payload: { index: currentUrlId } });
    onClose();
  };

  return (
    <Modal isModalOpen={true} onClose={onClose}>
      <div className="modal-header">Удалить источник</div>

      <div className="modal-body">
        <p>
          Точно удалить источник <span className="text-bold">{name}</span>?
        </p>
      </div>

      <div className="modal-footer">
        <button className="button button--warning text-dark" onClick={onClose}>
          Отменить
        </button>

        <button
          className="button button--danger text-dark"
          onClick={handleDeleteSource}
        >
          Удалить
        </button>
      </div>
    </Modal>
  );
};
