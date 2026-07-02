const App = require("../models/App");
const fs = require("fs");
const path = require("path");

// Get All Apps
exports.getAllApps = async (req, res) => {
  try {
    const apps = await App.find({ isPublished: true }).sort({ createdAt: -1 });

    res.status(200).json(apps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Single App
exports.getAppBySlug = async (req, res) => {
  try {
    const app = await App.findOne({ slug: req.params.slug });

    if (!app) {
      return res.status(404).json({ message: "App not found" });
    }

    res.status(200).json(app);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAppById = async (req, res) => {
  try {
    const app = await App.findById(req.params.id);

    if (!app) {
      return res.status(404).json({
        message: "Application not found",
      });
    }

    res.status(200).json(app);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Upload App
exports.createApp = async (req, res) => {
  try {
    const {
      appName,
      slug,
      category,
      shortDescription,
      description,
      features,
      permissions,
      releaseNotes,
      version,
      github,
    } = req.body;

    const newApp = new App({
      appName,
      slug,
      category,
      shortDescription,
      description,
      features: JSON.parse(features),
      permissions: JSON.parse(permissions),
      releaseNotes,
      version,
      github,

      logo: req.files.logo[0].filename,
      apk: req.files.apk[0].filename,

      apkSize: `${(req.files.apk[0].size / (1024 * 1024)).toFixed(2)} MB`,
    });

    await newApp.save();

    res.status(201).json({
      success: true,
      message: "Application Uploaded Successfully",
      app: newApp,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update App
exports.updateApp = async (req, res) => {
  try {
    const app = await App.findById(req.params.id);

    if (!app) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    if (req.files?.logo) {
      const oldLogo = path.join(__dirname, "..", "storage", "logos", app.logo);

      if (fs.existsSync(oldLogo)) {
        fs.unlinkSync(oldLogo);
      }

      app.logo = req.files.logo[0].filename;
    }

    if (req.files?.apk) {
      const oldApk = path.join(__dirname, "..", "storage", "apks", app.apk);

      if (fs.existsSync(oldApk)) {
        fs.unlinkSync(oldApk);
      }

      app.apk = req.files.apk[0].filename;

      app.apkSize = `${(req.files.apk[0].size / (1024 * 1024)).toFixed(2)} MB`;
    }

    Object.assign(app, req.body);
    app.lastUpdated = new Date();

    if (req.body.features) {
      app.features = JSON.parse(req.body.features);
    }

    if (req.body.permissions) {
      app.permissions = JSON.parse(req.body.permissions);
    }

    await app.save();

    res.status(200).json({
      success: true,
      message: "Application updated successfully",
      app,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete App
exports.deleteApp = async (req, res) => {
  try {
    const app = await App.findById(req.params.id);

    if (!app) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    const logoPath = path.join(__dirname, "..", "storage", "logos", app.logo);
    const apkPath = path.join(__dirname, "..", "storage", "apks", app.apk);

    if (fs.existsSync(logoPath)) {
      fs.unlinkSync(logoPath);
    }

    if (fs.existsSync(apkPath)) {
      fs.unlinkSync(apkPath);
    }

    await App.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Application deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Increment Download Count
exports.incrementDownloads = async (req, res) => {
  try {
    const app = await App.findById(req.params.id);

    if (!app) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    app.downloads += 1;

    await app.save();

    res.status(200).json({
      success: true,
      downloads: app.downloads,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
