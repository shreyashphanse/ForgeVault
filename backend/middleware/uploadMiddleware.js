const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "logo") {
      cb(null, "storage/logos");
    } else if (file.fieldname === "apk") {
      cb(null, "storage/apks");
    }
  },

  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);

    cb(null, uniqueName);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.fieldname === "logo") {
    const allowedLogoTypes = [".png", ".jpg", ".jpeg", ".webp", ".svg"];

    const ext = path.extname(file.originalname).toLowerCase();

    if (allowedLogoTypes.includes(ext)) {
      return cb(null, true);
    }

    return cb(
      new Error("Only PNG, JPG, JPEG, WEBP and SVG logos are allowed."),
    );
  }

  if (file.fieldname === "apk") {
    const ext = path.extname(file.originalname).toLowerCase();

    if (ext === ".apk") {
      return cb(null, true);
    }

    return cb(new Error("Only APK files are allowed."));
  }

  cb(new Error("Invalid file type."));
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 300 * 1024 * 1024, // 300 MB
  },
});

module.exports = upload;
