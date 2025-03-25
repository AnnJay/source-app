import "./modal.css";

export const Modal = ({ isModalOpen, onClose, children }) => {
  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
