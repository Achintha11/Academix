const Assignment = require("../models/Assignment");

const getAssignments = async (req, res) => {
  const { courseId } = req.params;
  try {
    const assignments = await Assignment.find({ course: courseId });
    res.status(200).json(assignments);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};
const addNewAssignment = async (req, res) => {
  const {
    assignmentTitle,
    assignmentDescription,
    assignmentDueDate,
    courseId,
  } = req.body;
  console.log(req.body);

  try {
    const newAssignment = await Assignment.create({
      assignmentTitle,
      assignmentDescription,
      assignmentDueDate,
      course: courseId,
    });
    res.status(200).json(newAssignment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};

module.exports = { addNewAssignment, getAssignments };
