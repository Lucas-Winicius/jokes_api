const jwt = require("jsonwebtoken");

function jwtUncript(req, res, next) {
  try {
    const cookie = req.cookies[process.env.COOKIE_NAME];
    const decoded = jwt.verify(cookie, process.env.JWT_SECRET);
    req.user = decoded;
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ status: 401, message: "Please log in before proceeding." });
    }
    return res.status(418).json({ message: error.message });
  }

  return next();
}

module.exports = jwtUncript;
