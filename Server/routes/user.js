const express = require("express");
const {
	authorizationMiddleware,
	authorizeAdminMiddleware
} = require("../middleware/authentication");
const { updateUser, deleteUser, getAllUsers } = require("../controllers/user");
const router = express.Router();

router
	.get("/", authorizeAdminMiddleware, getAllUsers)
	.put("/:id", authorizationMiddleware, updateUser)
	.delete("/:id", authorizeAdminMiddleware, deleteUser);

module.exports = router;
