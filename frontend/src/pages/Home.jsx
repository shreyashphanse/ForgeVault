import { useEffect, useState } from "react";
import api from "../services/api";
import { FaGithub, FaLinkedin, FaGlobe, FaEnvelope } from "react-icons/fa";
import AppCard from "../components/AppCard";
import LoadingSpinner from "../components/LoadingSpinner";
import EmptyState from "../components/EmptyState";
import { motion } from "framer-motion";

import "../styles/Home.css";

function Home() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApps();
  }, []);

  const fetchApps = async () => {
    try {
      const res = await api.get("/apps");
      setApps(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <header className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
          >
            ForgeVault
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.4,
              duration: 0.7,
            }}
          >
            {" "}
            A curated collection of Android applications built by
            <strong> Shreyash Phanse</strong>.
          </motion.p>
          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
          >
            {" "}
            <a
              href="https://github.com/shreyashphanse"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/shreyashphanse"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://portfolio-frontend-nogx.onrender.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaGlobe />
              <span>Portfolio</span>
            </a>
            <a href="mailto:shreyashphanse22@gmail.com">
              <FaEnvelope />
              <span>Email</span>
            </a>
          </motion.div>
          <motion.a
            href="#applications"
            className="browse-btn"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.5,
            }}
          >
            {" "}
            Browse Applications
          </motion.a>
        </motion.div>{" "}
      </header>

      <section id="applications" className="app-section">
        <div className="section-heading">
          <h2>Applications</h2>

          <p>
            Browse and download all currently available Android applications.
          </p>
        </div>
        {loading ? (
          <LoadingSpinner text="Loading Applications..." />
        ) : apps.length === 0 ? (
          <EmptyState
            title="No Applications Available"
            description="Applications will appear here once they are published."
          />
        ) : (
          <div className={`app-grid ${apps.length < 4 ? "center-grid" : ""}`}>
            {apps.map((app) => (
              <AppCard key={app._id} app={app} />
            ))}
          </div>
        )}
      </section>

      <footer className="footer">
        <h3>ForgeVault</h3>

        <p>Designed & Developed by Shreyash Phanse</p>

        <small>© {new Date().getFullYear()} All Rights Reserved</small>
      </footer>
    </div>
  );
}

export default Home;
