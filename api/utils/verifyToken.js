const jwt = require("jsonwebtoken");
// a middleware to authenticate users
const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).send("Unauthorized user");
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).send("Forbidden");
    }
    req.user = user;
    next();
  });
};
module.exports = verifyToken;
