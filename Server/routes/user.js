const express = require("express");
const {
	authorizationMiddleware,
	authorizeAdminMiddleware
} = require("../middleware/authentication");
const { editUser, deleteUser } = require("../controllers/user");
const router = express.Router();

router
	.put("/:id", authorizationMiddleware, editUser)
	.delete("/:id", authorizeAdminMiddleware, deleteUser);

module.exports = router;
