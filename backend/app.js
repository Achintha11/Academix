const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const authRoutes = require("./routes/AuthRoute");
const studentRoute = require("./routes/StudentRoute");
const teacherRoute = require("./routes/TeacherRoute");
const courseRoute = require("./routes/CourseRoute");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://192.168.1.5:5173", // Adjust to your frontend URL during development
    credentials: true, // Enable credentials (cookies, authorization headers)
  })
);
app.use("/auth", authRoutes);
app.use("/api/v1", studentRoute);
app.use("/api/v1", teacherRoute);
app.use("/api/v1", courseRoute);

const port = 3000;
mongoose.connect(process.env.db_uri).then(() => {
  console.log("connected to DB");
  app.listen(port, "0.0.0.0", () => {
    console.log(`Server is running on port ${port}`);
  });
});
