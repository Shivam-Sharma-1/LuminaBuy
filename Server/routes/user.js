const express = require("express");
const {
	authorizationMiddleware,
	authorizeAdminMiddleware
} = require("../middleware/authentication");
const {
	updateUser,
	deleteUser,
	getAllUsers,
	getUser,
	getUserStats
} = require("../controllers/user");
const router = express.Router();

router
	.get("/", authorizeAdminMiddleware, getAllUsers)
	.get("/stats", authorizeAdminMiddleware, getUserStats)
	.get("/:id", authorizeAdminMiddleware, getUser)
	.put("/:id", authorizationMiddleware, updateUser)
	.delete("/:id", authorizeAdminMiddleware, deleteUser);

module.exports = router;
