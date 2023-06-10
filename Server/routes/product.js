const express = require("express");
const { getAllProducts, createProduct } = require("../controllers/product");
const { authorizeAdminMiddleware } = require("../middleware/authentication");
const router = express.Router();

router
	.get("/", getAllProducts)
	.post("/", authorizeAdminMiddleware, createProduct);

module.exports = router;
