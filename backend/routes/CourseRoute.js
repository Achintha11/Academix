const { Router } = require("express");
const {
  addNewCourse,
  getAllCourses,
  removeCourse,
} = require("../controllers/CourseController");

const router = Router();

router.get("/courses", getAllCourses);
router.post("/courses", addNewCourse);
router.delete("/courses/:courseId", removeCourse);

module.exports = router;
