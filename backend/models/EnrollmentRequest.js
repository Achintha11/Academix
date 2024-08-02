const mongoose = require("mongoose");

const enrollmentRequestSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Student",
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "course",
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  requestedAt: {
    type: Date,
    default: Date.now,
  },
});

const EnrollmentRequest = mongoose.model(
  "EnrollmentRequest",
  enrollmentRequestSchema
);

module.exports = EnrollmentRequest;
