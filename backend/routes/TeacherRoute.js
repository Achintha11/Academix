const { Router } = require("express");
const router = Router();
const teacherController = require("../controllers/TeacherController");

router.get("/teachers", teacherController.getAllTeachers);
router.post("/teachers", teacherController.addTeacher);
router.delete("/teachers/:teacherId", teacherController.removeTeacher);

module.exports = router;
