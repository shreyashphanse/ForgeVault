import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import toast from "react-hot-toast";

import Sidebar from "../components/Sidebar";
import AppForm from "../components/AppForm";
import LoadingSpinner from "../components/LoadingSpinner";

import api from "../services/api";

function EditApp() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApp();
  }, []);

  const fetchApp = async () => {
    try {
      const res = await api.get(`/apps/id/${id}`);

      setApp(res.data);
    } catch (err) {
      console.error(err);

      toast.error("Unable to load application.");

      navigate("/admin/dashboard");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <main className="dashboard-content">
        {loading ? (
          <LoadingSpinner text="Loading Application..." />
        ) : (
          <AppForm mode="edit" appData={app} />
        )}
      </main>
    </div>
  );
}

export default EditApp;
