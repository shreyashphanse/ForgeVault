import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaCode,
  FaFolder,
  FaGithub,
  FaDownload,
  FaCalendarAlt,
  FaFileArchive,
  FaStar,
  FaShieldAlt,
} from "react-icons/fa";
import api from "../services/api";

import LoadingSpinner from "../components/LoadingSpinner";

import "../styles/AppDetails.css";

function AppDetails() {
  const { slug } = useParams();

  const [app, setApp] = useState(null);
  const [downloading, setDownloading] = useState(false);
  const heroLogoRef = useRef(null);

  useEffect(() => {
    fetchApp();

    const handleScroll = () => {
      if (!heroLogoRef.current) return;

      const scrollY = window.scrollY;

      heroLogoRef.current.style.transform = `translateX(-50%) translateY(${scrollY * -0.25}px)`;

      heroLogoRef.current.style.opacity = Math.max(0.12 - scrollY / 1800, 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const fetchApp = async () => {
    try {
      const res = await api.get(`/apps/${slug}`);
      setApp(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  const backendURL = import.meta.env.VITE_API_URL.replace("/api", "");

  const handleDownload = async () => {
    try {
      setDownloading(true);

      await api.patch(`/apps/download/${app._id}`);

      window.location.href = `${backendURL}/apks/${app.apk}`;
      setApp((prev) => ({
        ...prev,
        downloads: prev.downloads + 1,
      }));
    } catch (err) {
      console.error(err);
    } finally {
      setDownloading(false);
    }
  };

  if (!app) {
    return <LoadingSpinner text="Loading Application..." />;
  }

  return (
    <div className="details-page">
      <div className="details-hero">
        <img
          src={`${backendURL}/logos/${app.logo}`}
          alt=""
          ref={heroLogoRef}
          className="hero-bg-logo"
        />

        <div className="hero-overlay"></div>
      </div>

      <h1>{app.appName}</h1>

      <div className="details-meta">
        <span>{app.category}</span>
        <span>v{app.version}</span>
      </div>

      <p className="details-description">{app.description}</p>

      <div className="details-info">
        <div>
          <FaCode className="info-icon" />
          <strong>Version</strong>
          <span>{app.version}</span>
        </div>

        <div>
          <FaFolder className="info-icon" />
          <strong>Category</strong>
          <span>{app.category}</span>
        </div>

        <div>
          <FaFileArchive className="info-icon" />
          <strong>APK Size</strong>
          <span>{app.apkSize}</span>
        </div>

        <div>
          <FaDownload className="info-icon" />
          <strong>Downloads</strong>
          <span>{app.downloads}</span>
        </div>

        <div>
          <FaCalendarAlt className="info-icon" />
          <strong>Last Updated</strong>
          <span>{new Date(app.lastUpdated).toLocaleDateString()}</span>
        </div>
      </div>

      <div className="section">
        <h2>
          <FaStar className="section-icon" />
          Features
        </h2>
        <ul>
          {app.features.map((feature, index) => (
            <li key={index}>✓ {feature}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>
          <FaShieldAlt className="section-icon" />
          Permissions
        </h2>
        <ul>
          {app.permissions.map((permission, index) => (
            <li key={index}>{permission}</li>
          ))}
        </ul>
      </div>

      {app.releaseNotes && (
        <div className="section">
          <h2>
            <FaStar className="section-icon" />
            What's New
          </h2>
          <p>{app.releaseNotes}</p>
        </div>
      )}

      <div className="details-actions">
        <button
          className="download-btn"
          onClick={handleDownload}
          disabled={downloading}
        >
          {downloading ? (
            "Preparing Download..."
          ) : (
            <>
              <FaDownload />
              Download APK
            </>
          )}
        </button>

        {app.github && (
          <a
            href={app.github}
            target="_blank"
            rel="noreferrer"
            className="github-btn"
          >
            <>
              <FaGithub />
              GitHub Repository
            </>
          </a>
        )}
      </div>
    </div>
  );
}

export default AppDetails;
