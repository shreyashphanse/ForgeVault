import Sidebar from "../components/Sidebar";
import AppForm from "../components/AppForm";

function UploadApp() {
  return (
    <div className="dashboard">
      <Sidebar />

      <main className="dashboard-content">
        <AppForm mode="create" />
      </main>
    </div>
  );
}

export default UploadApp;
