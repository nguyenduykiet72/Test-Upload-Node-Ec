const express = require("express");
const feedController = require("../controllers/feed");
const router = express.Router();

router.get("/api/posts", feedController.getPosts);
router.post("/create", feedController.postCreate);

module.exports = router;
