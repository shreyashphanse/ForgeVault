import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import api from "../services/api";
import Sidebar from "../components/Sidebar";
import DeleteModal from "../components/DeleteModal";
import LoadingSpinner from "../components/LoadingSpinner";
import EmptyState from "../components/EmptyState";

import "../styles/Dashboard.css";

function Dashboard() {
  const [apps, setApps] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedApp, setSelectedApp] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    verifyAdmin();
    fetchApps();
  }, []);

  const verifyAdmin = async () => {
    try {
      await api.get("/admin/verify", {
        headers: {
          Authorization: localStorage.getItem("adminToken"),
        },
      });
    } catch {
      toast.error("Session expired. Please login again.");
      navigate("/admin");
    }
  };

  const fetchApps = async () => {
    try {
      const res = await api.get("/apps");
      setApps(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Unable to load applications.");
    } finally {
      setLoading(false);
    }
  };

  const deleteApp = async () => {
    if (!selectedApp) return;

    try {
      setDeleting(true);

      await api.delete(`/apps/${selectedApp._id}`, {
        headers: {
          Authorization: localStorage.getItem("adminToken"),
        },
      });

      toast.success("Application deleted successfully.");

      setDeleteModalOpen(false);
      setSelectedApp(null);

      fetchApps();
    } catch (err) {
      console.error(err);
      toast.error("Delete failed.");
    } finally {
      setDeleting(false);
    }
  };

  const filteredApps = useMemo(() => {
    return apps.filter((app) =>
      app.appName.toLowerCase().includes(search.toLowerCase()),
    );
  }, [apps, search]);

  return (
    <div className="dashboard">
      <Sidebar />
      <DeleteModal
        isOpen={deleteModalOpen}
        title="Delete Application"
        message={
          selectedApp
            ? `Are you sure you want to delete "${selectedApp.appName}"? This action cannot be undone.`
            : ""
        }
        onConfirm={deleteApp}
        onCancel={() => {
          setDeleteModalOpen(false);
          setSelectedApp(null);
        }}
        loading={deleting}
      />

      <main className="dashboard-content">
        <div className="dashboard-header">
          <div>
            <h1>Applications</h1>
            <p>{apps.length} Applications Uploaded</p>
          </div>

          <Link to="/admin/upload" className="upload-btn">
            + Upload Application
          </Link>
        </div>

        <input
          className="dashboard-search"
          placeholder="Search Applications..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {loading ? (
          <LoadingSpinner text="Loading Applications..." />
        ) : filteredApps.length === 0 ? (
          <EmptyState
            title="No Applications Found"
            description="Upload your first application to get started."
          />
        ) : (
          filteredApps.map((app) => (
            <div className="dashboard-card" key={app._id}>
              <img
                src={`${import.meta.env.VITE_API_URL.replace("/api", "")}/logos/${app.logo}`}
                alt={app.appName}
              />

              <div className="app-info">
                <h3>{app.appName}</h3>
                <p>{app.category}</p>
                <small>Version {app.version}</small>
              </div>

              <div className="actions">
                <Link to={`/admin/edit/${app._id}`}>Edit</Link>
                <button
                  onClick={() => {
                    setSelectedApp(app);
                    setDeleteModalOpen(true);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
}

export default Dashboard;
