const { Router } = require("express");
const router = Router();
const studentController = require("../controllers/StudentController");

router.get("/students", studentController.getAllStudents);
router.post("/students", studentController.addStudent);
router.delete("/students/:studentId", studentController.deleteStudent);
router.get("/students/:studentId/courses", studentController.getStudentCourses);

module.exports = router;
