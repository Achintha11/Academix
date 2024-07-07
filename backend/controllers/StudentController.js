const Student = require("../models/Student");
const { getStudentWelcomeEmail } = require("../services/emailTemplates");
const { sendEmail } = require("../services/nodeMailer");

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};

const addStudent = async (req, res) => {
  const { name, studentId, email } = req.body;
  const defaultPassword = "password";
  const role = "student";
  try {
    const student = await Student.create({
      name,
      studentId,
      email,
      password: defaultPassword,
      role,
    });
    const { subject, text } = getStudentWelcomeEmail(
      name,
      studentId,
      email,
      defaultPassword
    );
    sendEmail(email, subject, text);

    res.status(200).json({ student: student._id });
  } catch (error) {
    console.log(error);
  }
};

const deleteStudent = async (req, res) => {
  const { studentId } = req.params;

  try {
    const deletedStudent = await Student.findOneAndDelete({ studentId });
    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ message: "Student successfully deleted" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllStudents, addStudent, deleteStudent };
