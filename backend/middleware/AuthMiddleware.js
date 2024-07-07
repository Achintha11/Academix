const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Student = require("../models/Student");
const Teacher = require("../models/Teacher");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // Check if JWT exists and is verified
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.status(401).json({ message: "Unauthorized" });
      } else {
        req.user = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.token_secret, async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.locals.user = null;
      } else {
        console.log(decodedToken);
        let user = await User.findById(decodedToken.id);
        if (!user) {
          user = await Student.findById(decodedToken.id);
        }
        if (!user) {
          user = await Teacher.findById(decodedToken.id);
        }
        if (user) {
          res.locals.user = user;
        }
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

module.exports = { requireAuth, checkUser };
