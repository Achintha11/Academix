const Teacher = require("../models/Teacher");

const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({ message: "server Error" });
  }
};

const addTeacher = async (req, res) => {
  const { teacherId, name, email } = req.body;
  const defaultPassword = "password";

  try {
    const teacher = await Teacher.create({
      teacherId,
      name,
      email,
      password: defaultPassword,
    });

    res.status(200).json({ teacher: teacher._id });
  } catch (error) {
    res.status(500).json({ message: "server Error" });
  }
};

const removeTeacher = async (req, res) => {
  const { teacherId } = req.params;

  console.log(teacherId);

  try {
    const teacher = await Teacher.findOneAndDelete({ teacherId });
    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    res.status(200).json({ message: "Teacher successfully deleted" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllTeachers, addTeacher, removeTeacher };
