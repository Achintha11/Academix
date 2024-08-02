const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  courseId: {
    type: String,
    require: true,
  },
  courseName: {
    type: String,
    require: true,
  },
});

const Course = mongoose.model("course", courseSchema);

module.exports = Course;
