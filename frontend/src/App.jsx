import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AppDetails from "./pages/AppDetails";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import UploadApp from "./pages/UploadApp";
import EditApp from "./pages/EditApp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/app/:slug" element={<AppDetails />} />

      <Route path="/admin" element={<AdminLogin />} />

      <Route path="/admin/dashboard" element={<Dashboard />} />

      <Route path="/admin/upload" element={<UploadApp />} />

      <Route path="/admin/edit/:id" element={<EditApp />} />
    </Routes>
  );
}

export default App;
