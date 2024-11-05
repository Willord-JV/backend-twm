const express = require("express");
const router = express.Router();
const socialMediaController = require("../controllers/socialMediaController");

// Define route
router.get("/", socialMediaController.getSocialMedias);

module.exports = router;
