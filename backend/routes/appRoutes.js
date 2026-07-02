const express = require("express");
const router = express.Router();

const {
  getAllApps,
  getAppBySlug,
  getAppById,
  createApp,
  updateApp,
  deleteApp,
  incrementDownloads,
} = require("../controllers/appController");

const upload = require("../middleware/uploadMiddleware");
const authenticateAdmin = require("../middleware/authMiddleware");

router.get("/", getAllApps);

// IMPORTANT: More specific routes first
router.get("/id/:id", getAppById);

router.patch("/download/:id", incrementDownloads);

router.get("/:slug", getAppBySlug);

router.post(
  "/",
  authenticateAdmin,
  upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "apk", maxCount: 1 },
  ]),
  createApp,
);

router.put(
  "/:id",
  authenticateAdmin,
  upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "apk", maxCount: 1 },
  ]),
  updateApp,
);

router.delete("/:id", authenticateAdmin, deleteApp);

module.exports = router;
