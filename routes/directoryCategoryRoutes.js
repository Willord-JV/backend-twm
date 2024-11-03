const express = require("express");
const router = express.Router();
const directoryCategoryController = require("../controllers/directoryCategoryController");

router.get("/", directoryCategoryController.getCategories);

module.exports = router;
