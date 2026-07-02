import "../styles/DeleteModal.css";

function DeleteModal({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
  loading = false,
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="delete-modal">
        <h2>{title}</h2>

        <p>{message}</p>

        <div className="modal-actions">
          <button className="cancel-btn" onClick={onCancel} disabled={loading}>
            Cancel
          </button>

          <button className="delete-btn" onClick={onConfirm} disabled={loading}>
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
