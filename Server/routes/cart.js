const express = require("express");
const {
	getAllItems,
	createItem,
	getItem,
	updateItem,
	deleteItem
} = require("../controllers/cart");
const {
	authorizeAdminMiddleware,
	authorizationMiddleware,
	authenticationMiddleware
} = require("../middleware/authentication");
const router = express.Router();

router
	.get("/", authorizeAdminMiddleware, getAllItems)
	.post("/", authenticationMiddleware, createItem)
	.get("/:userId", authorizationMiddleware, getItem)
	.put("/:id", authorizationMiddleware, updateItem)
	.delete("/:id", authorizationMiddleware, deleteItem);

module.exports = router;
