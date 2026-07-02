const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const adminRoutes = require("./routes/adminRoutes");
const appRoutes = require("./routes/appRoutes");

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    status: "OK",
    service: "ForgeVault Backend",
    timestamp: new Date().toISOString(),
  });
});

app.use("/logos", express.static("storage/logos"));
app.use("/apks", express.static("storage/apks"));
app.use("/api/admin", adminRoutes);
app.use("/api/apps", appRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("ForgeVault Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
