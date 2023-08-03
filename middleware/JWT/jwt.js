const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJWT = (req, res, next) => {
  const query = req.headers?.authorization;
  const queryToken = query?.split(" ")[1];
  jwt.verify(queryToken, process.env.DB_KEY, function (err, result) {
    if (err) {
      return res.status(401).send("Unauthorized Access");
    }
    req.decoded = result;
    next();
  });
};


module.exports = verifyJWT;