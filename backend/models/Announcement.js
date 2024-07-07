const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema(
  {
    announcementTitle: {
      type: String,
      require: true,
    },

    announcementMessage: {
      type: String,
      require: true,
    },

    targetAudience: {
      type: String,
      required: true,
    },
    announcementDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true, // This adds createdAt and updatedAt fields
  }
);

const Announcement = mongoose.model("announcement", announcementSchema);
module.exports = Announcement;
