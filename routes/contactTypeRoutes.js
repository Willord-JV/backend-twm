const express = require("express");
const router = express.Router();
const contactTypeController = require("../controllers/contactTypeController");

// Define route
router.get("/", contactTypeController.getContactTypes);

module.exports = router;
