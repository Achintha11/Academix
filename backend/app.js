const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const authRoutes = require("./routes/AuthRoute");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // Adjust to your frontend URL during development
    credentials: true, // Enable credentials (cookies, authorization headers)
  })
);
app.use("/auth", authRoutes);

const port = 3000;
mongoose.connect(process.env.db_uri).then(() => {
  console.log("connected to DB");
  app.listen(port, () => {
    console.log(`Server is running on port ${port} `);
  });
});
