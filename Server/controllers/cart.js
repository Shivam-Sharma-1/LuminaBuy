const { StatusCodes } = require("http-status-codes");
const Cart = require("../models/Cart");

async function getAllItems(req, res) {
	try {
		items = await Cart.find();

		res.status(StatusCodes.OK).json(items);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
	}
}

async function getItem(req, res) {
	try {
		const item = await item.findOne({ userId: req.params.userId });
		res.status(StatusCodes.OK).json(item);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
	}
}

async function createItem(req, res) {
	try {
		const item = await Cart.create(req.body);
		res.status(StatusCodes.CREATED).json(item);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
	}
}

async function updateItem(req, res) {
	try {
		const updatedItem = await Cart.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		res.status(StatusCodes.CREATED).json(updatedItem);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
	}
}

async function deleteItem(req, res) {
	try {
		await Cart.findByIdAndDelete(req.params.id);
		res.status(StatusCodes.OK).json("Item has been deleted");
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
	}
}

module.exports = {
	getAllItems,
	getItem,
	createItem,
	updateItem,
	deleteItem
};
