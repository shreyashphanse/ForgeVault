import { Link, useLocation, useNavigate } from "react-router-dom";
import api from "../services/api";

import "../styles/Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = async () => {
    try {
      await api.post(
        "/admin/logout",
        {},
        {
          headers: {
            Authorization: localStorage.getItem("adminToken"),
          },
        },
      );
    } catch (err) {
      console.log(err);
    }

    localStorage.removeItem("adminToken");
    navigate("/");
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <img src="/logo.png" alt="ForgeVault Logo" className="sidebar-logo" />

        <h2>ForgeVault</h2>
      </div>

      <nav>
        <Link
          to="/admin/dashboard"
          className={location.pathname === "/admin/dashboard" ? "active" : ""}
        >
          Dashboard
        </Link>

        <Link
          to="/admin/upload"
          className={location.pathname === "/admin/upload" ? "active" : ""}
        >
          Upload App
        </Link>
      </nav>

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;
