const { Router } = require("express");
const authController = require("../controllers/AuthController");
const { requireAuth } = require("../middleware/AuthMiddleware");
const router = Router();

router.post("/signup", authController.signup_post);
router.post("/login", authController.login_post);
router.get("/check", requireAuth, authController.authCheck);

module.exports = router;
