const { StatusCodes } = require("http-status-codes");
const Order = require("../models/Order");

async function getAllOrders(req, res) {
	try {
		const orders = await Order.find();

		res.status(StatusCodes.OK).json(orders);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
	}
}

async function getUserOrders(req, res) {
	try {
		const userOrders = await Order.findOne({ userId: req.params.userId });
		res.status(StatusCodes.OK).json(userOrders);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
	}
}

async function createOrder(req, res) {
	try {
		const order = await Order.create(req.body);
		res.status(StatusCodes.CREATED).json(order);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
	}
}

async function updateOrder(req, res) {
	try {
		const updatedOrder = await Order.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		res.status(StatusCodes.CREATED).json(updatedOrder);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
	}
}

async function deleteOrder(req, res) {
	try {
		await Order.findByIdAndDelete(req.params.id);
		res.status(StatusCodes.OK).json("Order has been deleted");
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
	}
}

async function getMonthlyIncome(req, res) {
	const date = new Date();
	const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
	const previousMonth = new Date(
		new Date().setMonth(lastMonth.getMonth() - 1)
	);

	try {
		const income = await Order.aggregate([
			{ $match: { createdAt: { $gte: previousMonth } } },
			{
				$project: {
					month: { $month: "$createdAt" },
					sales: "$amount"
				}
			},
			{
				$group: {
					_id: "$month",
					total: { $sum: "$sales" }
				}
			}
		]);

		res.status(StatusCodes.OK).json(income);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
	}
}

module.exports = {
	getAllOrders,
	getUserOrders,
	createOrder,
	updateOrder,
	deleteOrder,
	getMonthlyIncome
};
