const mongoose = require("mongoose");

const appSchema = new mongoose.Schema(
  {
    appName: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    category: {
      type: String,
      default: "Utility",
      trim: true,
    },

    shortDescription: {
      type: String,
      required: true,
      maxlength: 180,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    features: [
      {
        type: String,
        trim: true,
      },
    ],

    permissions: [
      {
        type: String,
        trim: true,
      },
    ],

    releaseNotes: {
      type: String,
      default: "",
      trim: true,
    },

    apkSize: {
      type: String,
      default: "",
    },

    downloads: {
      type: Number,
      default: 0,
    },

    lastUpdated: {
      type: Date,
      default: Date.now,
    },

    version: {
      type: String,
      default: "1.0.0",
      trim: true,
    },

    github: {
      type: String,
      default: "",
      trim: true,
    },

    logo: {
      type: String,
      required: true,
    },

    apk: {
      type: String,
      required: true,
    },

    downloads: {
      type: Number,
      default: 0,
    },

    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("App", appSchema);
