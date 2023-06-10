const express = require("express");
const { authorizationMiddleware } = require("../middleware/authentication");
const { editUser } = require("../controllers/user");
const router = express.Router();

router.put("/:id", authorizationMiddleware, editUser);

module.exports = router;
