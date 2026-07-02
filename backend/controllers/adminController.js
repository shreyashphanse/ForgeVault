const crypto = require("crypto");
const sessions = require("../utils/sessionStore");

exports.login = (req, res) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({
      success: false,
      message: "Password is required",
    });
  }

  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({
      success: false,
      message: "Invalid password",
    });
  }

  const token = crypto.randomBytes(32).toString("hex");

  sessions.add(token);

  res.status(200).json({
    success: true,
    token,
  });
};

exports.verifySession = (req, res) => {
  const token = req.headers.authorization;

  if (!token || !sessions.has(token)) {
    return res.status(401).json({
      success: false,
    });
  }

  res.json({
    success: true,
  });
};

exports.logout = (req, res) => {
  const token = req.headers.authorization;

  sessions.delete(token);

  res.json({
    success: true,
  });
};
