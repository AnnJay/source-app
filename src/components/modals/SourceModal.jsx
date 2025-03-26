import { useState } from "react";

import { Modal } from "./Modal";
import { actions } from "../../utils/reducer";

export const SourceModal = (props) => {
  const { onClose, isEdit, dispatch, currentUrl, currentUrlId } = props;

  const [innerState, setInnerState] = useState(
    isEdit ? { ...currentUrl } : { name: "", path: "" }
  );

  const handleChangeValue = (e) => {
    setInnerState({ ...innerState, [e.target.name]: e.target.value });
  };

  const handleSaveData = () => {
    if (!innerState.name || !innerState.url) return;

    if (isEdit) {
      dispatch({
        type: actions.updateSource,
        payload: { index: currentUrlId, updatedUrl: innerState },
      });
    } else {
      dispatch({ type: actions.addSource, payload: innerState });
    }

    onClose();
  };

  return (
    <Modal isModalOpen={true} onClose={onClose}>
      <div className="modal-header">
        {isEdit ? "Изменить источник" : "Добавить источник"}
      </div>

      <div className="modal-body">
        <input
          type="text"
          placeholder="Имя источника"
          className="input"
          name="name"
          value={innerState.name}
          onChange={handleChangeValue}
        />

        <textarea
          placeholder="Путь к источнику"
          className="input input--high"
          name="url"
          value={innerState.url}
          onChange={handleChangeValue}
        />
      </div>

      <div className="modal-footer">
        <button className="button button--warning text-dark" onClick={onClose}>
          Отменить
        </button>
        
        <button
          className="button button--success text-dark"
          onClick={handleSaveData}
        >
          Сохранить
        </button>
      </div>
    </Modal>
  );
};
