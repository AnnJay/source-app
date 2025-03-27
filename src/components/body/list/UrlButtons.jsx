import { useState } from "react";

import { SourceModal } from "../../modals/SourceModal";
import { DeleteModal } from "../../modals/DeleteModal";

export const UrlButtons = ({ dispatch, currentUrl, currentUrlId }) => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  return (
    <div className="d-flex align-items-center justify-content-end gap-2">
      <button
        className="btn text-dark btn-success"
        onClick={() => setOpenAddModal(true)}
      >
        Добавить источник
      </button>
      <button
        className="btn text-dark btn-danger"
        disabled={!currentUrl}
        onClick={() => setOpenDeleteModal(true)}
      >
        Удалить источник
      </button>
      <button
        className="btn text-dark btn-warning"
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

      {openDeleteModal && (
        <DeleteModal
          onClose={() => setOpenDeleteModal(false)}
          name={currentUrl.name}
          dispatch={dispatch}
          currentUrlId={currentUrlId}
        />
      )}
    </div>
  );
};
