const User = require("../models/User");
const jwt = require("jsonwebtoken");

const signup_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    res.status(200).json({ user: user._id });
  } catch (error) {
    console.log(error);
  }
};

const login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: maxAge * 1000,
      sameSite: "strict",
    });
    res.status(200).json({ user: user._id });
    console.log("user logged");
  } catch (error) {
    console.log(error);
  }
};

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.token_secret, {
    expiresIn: maxAge,
  });
};

const authCheck = (req, res) => {
  res.status(200).json({ message: "Authorized" });
};

module.exports = { signup_post, login_post, authCheck };
