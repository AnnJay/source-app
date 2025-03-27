import { useState } from "react";
import { useSelector } from "react-redux";

import { SourceModal } from "../../modals/SourceModal";
import { DeleteModal } from "../../modals/DeleteModal";

export const UrlButtons = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const { urls, currentURL_ID } = useSelector((state) => state.urls);

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
        disabled={currentURL_ID < 0}
        onClick={() => setOpenDeleteModal(true)}
      >
        Удалить источник
      </button>
      <button
        className="btn text-dark btn-warning"
        onClick={() => setOpenEditModal(true)}
        disabled={currentURL_ID < 0}
      >
        Изменить источник
      </button>

      {openAddModal && <SourceModal onClose={() => setOpenAddModal(false)} />}

      {openEditModal && (
        <SourceModal
          onClose={() => setOpenEditModal(false)}
          isEdit
          currentUrl={urls[currentURL_ID]}
          currentUrlId={currentURL_ID}
        />
      )}

      {openDeleteModal && (
        <DeleteModal
          onClose={() => setOpenDeleteModal(false)}
          name={urls[currentURL_ID].name}
          currentUrlId={currentURL_ID}
        />
      )}
    </div>
  );
};
