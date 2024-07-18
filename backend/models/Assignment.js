const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
  assignmentTitle: {
    type: String,
    required: true,
  },
  assignmentDescription: {
    type: String,
    required: true,
  },
  assignmentDueDate: {
    type: Date,
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "course", // Reference to the Course model
    required: true,
  },
});

const Assignment = mongoose.model("assignment", assignmentSchema);

module.exports = Assignment;
