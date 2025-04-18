import { useState } from "react";

import { useDispatch } from "react-redux";
import { addUrl, updateUrl } from "../../state/reducers/urlsSlice";

export const SourceModal = (props) => {
  const { onClose, isEdit, currentUrl, currentUrlId } = props;

  const dispatch = useDispatch();

  const [innerState, setInnerState] = useState(
    isEdit ? { ...currentUrl } : { name: "", path: "" }
  );

  const handleChangeValue = (e) => {
    setInnerState({ ...innerState, [e.target.name]: e.target.value });
  };

  const handleSaveData = () => {
    if (!innerState.name || !innerState.url) return;

    if (isEdit) {
      dispatch(updateUrl({ index: currentUrlId, url: innerState }));
    } else {
      dispatch(addUrl({ url: innerState }));
    }

    onClose();
  };

  return (
    <div
      className="modal d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header p-2">
            <h5 className="modal-title">
              {isEdit ? "Изменить источник" : "Добавить источник"}
            </h5>
            <button className="btn-close fs-6" onClick={onClose}></button>
          </div>

          <div className="modal-body">
            <input
              type="text"
              placeholder="Имя источника"
              className="form-control mb-3"
              name="name"
              value={innerState.name}
              onChange={handleChangeValue}
            />

            <textarea
              placeholder="Путь к источнику"
              className="form-control"
              name="url"
              value={innerState.url}
              onChange={handleChangeValue}
              rows={4}
            />
          </div>

          <div className="modal-footer p-1">
            <button
              className="btn btn-warning text-dark me-2"
              onClick={onClose}
            >
              Отменить
            </button>
            <button
              className="btn btn-success text-dark"
              onClick={handleSaveData}
            >
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
