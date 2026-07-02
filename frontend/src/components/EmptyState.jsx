import "../styles/EmptyState.css";

function EmptyState({
  title = "Nothing Found",
  description = "There is nothing to display right now.",
}) {
  return (
    <div className="empty-state">
      <div className="empty-icon">📦</div>

      <h2>{title}</h2>

      <p>{description}</p>
    </div>
  );
}

export default EmptyState;
