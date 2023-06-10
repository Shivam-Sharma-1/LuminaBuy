const { StatusCodes } = require("http-status-codes");
const Product = require("../models/Product");

async function getAllProducts(req, res) {
	const { isNew, category } = req.query;

	try {
		let products;
		if (isNew) {
			products = await Product.find().sort({ createdAt: -1 }).limit(1);
		} else if (category) {
			products = await Product.find({
				categories: {
					$in: [category]
				}
			});
		} else {
			products = await Product.find();
		}

		res.status(StatusCodes.OK).json(products);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
	}
}

async function createProduct(req, res) {
	try {
		const product = await Product.create(req.body);
		res.status(StatusCodes.CREATED).json(product);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
	}
}

module.exports = { getAllProducts, createProduct };
