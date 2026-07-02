const express = require("express");
const router = express.Router();

const {
  login,
  verifySession,
  logout,
} = require("../controllers/adminController");

router.post("/login", login);

router.get("/verify", verifySession);

router.post("/logout", logout);

module.exports = router;
