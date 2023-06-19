const express = require("express");
const {
	getAllProducts,
	createProduct,
	getProduct,
	updateProduct,
	deleteProduct
} = require("../controllers/product");
const { authorizeAdminMiddleware } = require("../middleware/authentication");
const router = express.Router();

router
	.get("/", getAllProducts)
	.post("/", authorizeAdminMiddleware, createProduct)
	.get("/find/:id", getProduct)
	.put("/:id", authorizeAdminMiddleware, updateProduct)
	.delete("/:id", authorizeAdminMiddleware, deleteProduct);

module.exports = router;
