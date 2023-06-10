const User = require("../models/User");
const { hashedPassword } = require("../util/hashedpassword");
const { StatusCodes } = require("http-status-codes");

async function getAllUsers(req, res) {
	const query = req.query.new;

	try {
		const users = query
			? await User.find().sort({ _id: -1 }).limit(5)
			: await User.find();

		res.status(StatusCodes.OK).json(users);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
	}
}

async function getUser(req, res) {
	try {
		const user = await User.findById(req.params.id);
		const { password, ...userDetails } = user._doc;

		res.status(StatusCodes.OK).json(userDetails);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
	}
}

async function updateUser(req, res) {
	req.body.password &&
		(req.body.password = hashedPassword(req.body.password));

	try {
		const updatedUser = await User.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);

		res.status(StatusCodes.OK).json(updatedUser);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
	}
}

async function deleteUser(req, res) {
	try {
		await User.findByIdAndDelete(req.params.id);
		res.status(StatusCodes.OK).json("User has been deleted");
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
	}
}

module.exports = { getAllUsers, getUser, updateUser, deleteUser };
