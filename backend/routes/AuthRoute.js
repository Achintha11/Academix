const { Router } = require("express");
const authController = require("../controllers/AuthController");
const { requireAuth, checkUser } = require("../middleware/AuthMiddleware");
const router = Router();

router.post("/signup", authController.signup_post);
router.post("/login", authController.login_post);
router.get("/check", requireAuth, checkUser, authController.authCheck);
router.get("/logout", authController.logout_get);

module.exports = router;
