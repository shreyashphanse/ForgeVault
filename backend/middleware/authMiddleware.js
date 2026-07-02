const sessions = require("../utils/sessionStore");

const authenticateAdmin = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token || !sessions.has(token)) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }

  next();
};

module.exports = authenticateAdmin;
