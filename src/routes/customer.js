const express = require("express");
const customerController = require("../controllers/customer");
const router = express.Router();

router.get("/api/users", customerController.getUsers);

module.exports = router;
