const Course = require("../models/Course");

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.statues(500).json({ message: "server error" });
  }
};

const addNewCourse = async (req, res) => {
  const { courseId, courseName } = req.body;
  try {
    const course = await Course.create({ courseId, courseName });
    res.status(200).json({ course: course._id });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};

const removeCourse = async (req, res) => {
  const { courseId } = req.params;

  try {
    const course = await Course.findOneAndDelete({ courseId });
    if (!course) {
      return res.status(404).json({ message: "course not found" });
    }

    res.status(200).json({ message: "course successfully deleted" });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};

module.exports = { getAllCourses, addNewCourse, removeCourse };
