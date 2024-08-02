const { Router } = require("express");
const {
  getAllAnnouncements,
  createAnnouncement,
  deleteAnnouncement,
} = require("../controllers/AnnouncementController");

const router = Router();
router.get("/announcements", getAllAnnouncements);
router.post("/announcements", createAnnouncement);
router.delete("/announcements/:id", deleteAnnouncement);

module.exports = router;
