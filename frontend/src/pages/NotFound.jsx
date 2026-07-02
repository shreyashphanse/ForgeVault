import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

import "../styles/NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-card">
        <FaExclamationTriangle className="not-found-icon" />

        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>The page you're looking for doesn't exist or may have been moved.</p>

        <Link to="/" className="home-btn">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
