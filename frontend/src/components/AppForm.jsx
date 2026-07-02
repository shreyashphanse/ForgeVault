import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/AppForm.css";
import toast from "react-hot-toast";

function AppForm({ mode = "create", appData = null }) {
  const [formData, setFormData] = useState({
    appName: appData?.appName || "",
    slug: appData?.slug || "",
    category: appData?.category || "Utility",
    shortDescription: appData?.shortDescription || "",
    description: appData?.description || "",
    releaseNotes: appData?.releaseNotes || "",
    version: appData?.version || "1.0.0",
    github: appData?.github || "",
  });

  const [logo, setLogo] = useState(null);
  const [logoPreview, setLogoPreview] = useState(
    appData
      ? `${import.meta.env.VITE_API_URL.replace("/api", "")}/logos/${appData.logo}`
      : null,
  );
  const [apk, setApk] = useState(null);

  const [features, setFeatures] = useState(appData?.features?.join(", ") || "");
  const [permissions, setPermissions] = useState(
    appData?.permissions?.join(", ") || "",
  );
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!appData) return;

    setFormData({
      appName: appData.appName || "",
      slug: appData.slug || "",
      category: appData.category || "Utility",
      shortDescription: appData.shortDescription || "",
      description: appData.description || "",
      releaseNotes: appData.releaseNotes || "",
      version: appData.version || "1.0.0",
      github: appData.github || "",
    });

    setFeatures(appData.features?.join(", ") || "");
    setPermissions(appData.permissions?.join(", ") || "");

    setLogoPreview(
      `${import.meta.env.VITE_API_URL.replace("/api", "")}/logos/${appData.logo}`,
    );

    setLogo(null);
    setApk(null);
  }, [appData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "appName" && mode === "create") {
      setFormData((prev) => ({
        ...prev,
        appName: value,
        slug: value
          .toLowerCase()
          .replace(/[^a-z0-9 ]/g, "")
          .trim()
          .replace(/\s+/g, "-"),
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.appName.trim())
      return toast.error("Application name is required.");

    if (!formData.slug.trim()) return toast.error("Slug is required.");

    if (!formData.shortDescription.trim())
      return toast.error("Short description is required.");

    if (!formData.description.trim())
      return toast.error("Description is required.");

    if (!features.trim()) return toast.error("Add at least one feature.");

    if (!permissions.trim()) return toast.error("Add at least one permission.");

    if (mode === "create" && !logo) return toast.error("Select a logo.");

    if (mode === "create" && !apk) return toast.error("Select an APK.");

    const data = new FormData();

    data.append("appName", formData.appName);
    data.append("slug", formData.slug);
    data.append("category", formData.category);
    data.append("shortDescription", formData.shortDescription);
    data.append("description", formData.description);
    data.append("version", formData.version);
    data.append("github", formData.github);
    data.append("releaseNotes", formData.releaseNotes);

    data.append(
      "features",
      JSON.stringify(
        features
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
      ),
    );

    data.append(
      "permissions",
      JSON.stringify(
        permissions
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
      ),
    );

    if (logo) data.append("logo", logo);
    if (apk) data.append("apk", apk);

    try {
      setLoading(true);

      if (mode === "create") {
        await api.post("/apps", data, {
          headers: {
            Authorization: localStorage.getItem("adminToken"),
            "Content-Type": "multipart/form-data",
          },
        });

        toast.success("Application uploaded successfully.");
        setFormData({
          appName: "",
          slug: "",
          category: "Utility",
          shortDescription: "",
          description: "",
          version: "1.0.0",
          github: "",
          releaseNotes: "",
        });

        setFeatures("");
        setPermissions("");

        setLogo(null);
        setApk(null);
        setLogoPreview(null);
        setTimeout(() => {
          navigate("/admin/dashboard");
        }, 1200);
      } else {
        await api.put(`/apps/${appData._id}`, data, {
          headers: {
            Authorization: localStorage.getItem("adminToken"),
            "Content-Type": "multipart/form-data",
          },
        });

        toast.success("Application updated successfully.");
      }
    } catch (err) {
      console.error(err);

      if (err.response?.status === 401) {
        toast.error("Session expired. Please login again.");
        navigate("/admin");
      } else {
        toast.error(err.response?.data?.message || "Upload failed.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1>{mode === "create" ? "Upload Application" : "Edit Application"}</h1>

      <input
        disabled={loading}
        name="appName"
        placeholder="Application Name"
        value={formData.appName}
        onChange={handleChange}
      />

      <input
        name="slug"
        disabled={mode === "edit" || loading}
        placeholder="Slug (save-my-bill)"
        value={formData.slug}
        onChange={handleChange}
      />

      <input
        disabled={loading}
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
      />

      <input
        disabled={loading}
        name="version"
        placeholder="Version"
        value={formData.version}
        onChange={handleChange}
      />

      <input
        disabled={loading}
        name="github"
        placeholder="GitHub Repository"
        value={formData.github}
        onChange={handleChange}
      />

      <textarea
        name="shortDescription"
        placeholder="Short Description"
        rows={3}
        value={formData.shortDescription}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Full Description"
        rows={6}
        value={formData.description}
        onChange={handleChange}
      />

      <h3>Features</h3>

      <textarea
        rows={4}
        placeholder="OCR, Dark Mode, Notifications, Categories"
        value={features}
        onChange={(e) => setFeatures(e.target.value)}
      />

      <h3>Permissions</h3>

      <textarea
        rows={3}
        placeholder="Storage, Notifications, Internet"
        value={permissions}
        onChange={(e) => setPermissions(e.target.value)}
      />

      <textarea
        name="releaseNotes"
        placeholder="Release Notes"
        rows={5}
        value={formData.releaseNotes}
        onChange={handleChange}
      />

      <label>Application Logo</label>

      <input
        disabled={loading}
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files[0];

          setLogo(file);

          if (file) {
            setLogoPreview(URL.createObjectURL(file));
          }
        }}
      />
      {logoPreview && (
        <img src={logoPreview} alt="Logo Preview" className="logo-preview" />
      )}

      <label>APK File</label>

      <input
        disabled={loading}
        type="file"
        accept=".apk"
        onChange={(e) => setApk(e.target.files[0])}
      />
      {apk && <p className="apk-name">Selected APK: {apk.name}</p>}

      <button type="submit" disabled={loading} className="submit-btn">
        {loading
          ? "Please Wait..."
          : mode === "create"
            ? "Upload Application"
            : "Save Changes"}
      </button>
    </form>
  );
}

export default AppForm;
