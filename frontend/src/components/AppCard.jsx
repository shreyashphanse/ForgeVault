import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../styles/AppCard.css";

function AppCard({ app }) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
      <Link to={`/app/${app.slug}`} className="app-card">
        <img
          src={`${import.meta.env.VITE_API_URL.replace("/api", "")}/logos/${app.logo}`}
          alt={app.appName}
        />

        <div className="card-body">
          <span className="category-badge">{app.category}</span>

          <h2>{app.appName}</h2>

          <p>{app.shortDescription}</p>

          <div className="card-footer">
            <span className="version">v{app.version}</span>

            <span className="view-btn">View →</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default AppCard;
