const { Router } = require("express");
const {
  getAllEnrollmentRequests,
  createEnrollmentRequest,
  updateEnrollmentRequest,
} = require("../controllers/EnrollmentRequestController");
const router = Router();
router.get("/enrollmentRequests", getAllEnrollmentRequests);
router.post("/enrollmentRequests", createEnrollmentRequest);
router.put("/enrollmentRequests/:id", updateEnrollmentRequest);

module.exports = router;
