const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodeToken = jwt.verity(token, "secret_this_should_be_very_long");
    req.userData = { email: decodeToken.email, userId: decodeToken.userId };
    next();
  } catch (error) {
    res.status(401).json({ message: "Auth failed" });
  }
};
