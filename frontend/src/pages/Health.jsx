import { useEffect, useState } from "react";
import api from "../services/api";

function Health() {
  const [backend, setBackend] = useState("Checking...");

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const res = await api.get("/health");
        setBackend(res.data.status || "Healthy");
      } catch {
        setBackend("Offline");
      }
    };

    checkBackend();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
      }}
    >
      <div>
        <h1>ForgeVault Health Check</h1>

        <p>
          <strong>Frontend:</strong> ✅ Healthy
        </p>

        <p>
          <strong>Backend:</strong>{" "}
          {backend === "Offline" ? "❌ Offline" : "✅ Healthy"}
        </p>
      </div>
    </div>
  );
}

export default Health;
