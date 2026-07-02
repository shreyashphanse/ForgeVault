import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AppDetails from "./pages/AppDetails";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import UploadApp from "./pages/UploadApp";
import EditApp from "./pages/EditApp";
import Health from "./pages/Health";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/app/:slug" element={<AppDetails />} />

      <Route path="/admin" element={<AdminLogin />} />

      <Route path="/admin/dashboard" element={<Dashboard />} />

      <Route path="/admin/upload" element={<UploadApp />} />

      <Route path="/admin/edit/:id" element={<EditApp />} />

      <Route path="/health" element={<Health />} />
    </Routes>
  );
}

export default App;
