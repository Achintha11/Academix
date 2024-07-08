const EnrollmentRequest = require("../models/EnrollmentRequest");

const createEnrollmentRequest = async (req, res) => {
  const { student, course } = req.body;

  try {
    const enrollmentRequest = await EnrollmentRequest.create({
      student,
      course,
    });
    res.status(200).json({ enrollmentRequest: enrollmentRequest._id });
  } catch (error) {
    res.status(500).json({ message: "server Error" });
    console.log(error);
  }
};

const getAllEnrollmentRequests = async (req, res) => {
  try {
    const enrollmentRequests = await EnrollmentRequest.find()
      .populate("student", "name email studentId")
      .populate("course", "courseName courseId");

    res.status(200).json(enrollmentRequests);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
    console.log(error);
  }
};

const updateEnrollmentRequest = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const updatedEnrollmentRequest = await EnrollmentRequest.findByIdAndUpdate(
      id,
      { status: status },
      { new: true }
    );

    if (!updatedEnrollmentRequest) {
      return res.status(404).json({ message: "Enrollment request not found" });
    }

    res.status(200).json(updatedEnrollmentRequest);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  createEnrollmentRequest,
  getAllEnrollmentRequests,
  updateEnrollmentRequest,
};
