const User = require("../models/User");
const { hashedPassword } = require("../util/hashedpassword");
const { StatusCodes } = require("http-status-codes");

async function editUser(req, res) {
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

module.exports = { editUser };
