const { Router } = require("express");
const {
  addNewAssignment,
  getAssignments,
} = require("../controllers/AssignmentController");
const router = Router();

router.post("/assignments", addNewAssignment);
router.get("/assignments/:courseId", getAssignments);
module.exports = router;
