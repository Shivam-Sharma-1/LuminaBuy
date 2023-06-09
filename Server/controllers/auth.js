const StatusCodes = require("http-status-codes");

const User = require("../models/User");

async function register(req, res) {
	try {
		const user = await User.create({ ...req.body });
		res.status(StatusCodes.CREATED).json(user);
	} catch (err) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
	}
}

module.exports = { register };
