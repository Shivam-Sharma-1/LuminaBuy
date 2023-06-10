const express = require("express");
const {
	getAllOrders,
	getUserOrders,
	createOrder,
	updateOrder,
	deleteOrder,
	getMonthlyIncome
} = require("../controllers/order");
const {
	authorizeAdminMiddleware,
	authorizationMiddleware,
	authenticationMiddleware
} = require("../middleware/authentication");
const router = express.Router();

router
	.get("/", authorizeAdminMiddleware, getAllOrders)
	.post("/", authenticationMiddleware, createOrder)
	.get("/:userId", authorizationMiddleware, getUserOrders)
	.get("/income", authorizeAdminMiddleware, getMonthlyIncome)
	.put("/:id", authorizeAdminMiddleware, updateOrder)
	.delete("/:id", authorizeAdminMiddleware, deleteOrder);

module.exports = router;
