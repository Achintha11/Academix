const Student = require("../models/Student");
const Teacher = require("../models/Teacher");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const signup_post = async (req, res) => {
  const { email, password, role, userName } = req.body;

  try {
    const user = await User.create({ email, password, role, userName });
    res.status(200).json({ user: user._id });
  } catch (error) {
    console.log(error);
  }
};

const login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.login(email, password);
    if (!user) {
      user = await Student.login(email, password);
    }
    if (!user) {
      user = await Teacher.login(email, password);
    }

    if (user) {
      const token = createToken(user._id);
      res.cookie("jwt", token, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
        maxAge: maxAge * 1000, // 3 days
        path: "/", // Ensure the path is correct
      });
      res.status(200).json({ user: { id: user._id, email: user.email } });
      console.log("user logged");
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
  }
};

const logout_get = (req, res) => {
  console.log("Log out request received");
  cookie = req.cookies;

  try {
    res.clearCookie("jwt", "", {
      maxAge: 0,
      overwrite: true,
    });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: "logout failed" });
    console.log(error.message);
  }
};

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.token_secret, {
    expiresIn: maxAge,
  });
};

const authCheck = (req, res) => {
  const user = res.locals.user;
  if (user) {
    res.status(200).json({ message: "Authorized", user });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = { signup_post, login_post, authCheck, logout_get };
