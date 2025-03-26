import { useState } from "react";
import { SourceModal } from "../../modals/SourceModal";

export const UrlButtons = ({ dispatch, currentUrl, currentUrlId }) => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  return (
    <div className="url-component-container">
      <button
        className="button text-dark button--success"
        onClick={() => setOpenAddModal(true)}
      >
        Добавить источник
      </button>
      <button
        className="button text-dark button--danger"
        disabled={!currentUrl}
      >
        Удалить источник
      </button>
      <button
        className="button text-dark button--warning"
        onClick={() => setOpenEditModal(true)}
        disabled={!currentUrl}
      >
        Изменить источник
      </button>

      {openAddModal && (
        <SourceModal
          onClose={() => setOpenAddModal(false)}
          dispatch={dispatch}
        />
      )}

      {openEditModal && (
        <SourceModal
          onClose={() => setOpenEditModal(false)}
          isEdit
          currentUrl={currentUrl}
          dispatch={dispatch}
          currentUrlId={currentUrlId}
        />
      )}
    </div>
  );
};
