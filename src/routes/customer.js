const express = require("express");
const customerController = require("../controllers/customer");
const router = express.Router();

router.get("/users", customerController.getUsers);

module.exports = router;
