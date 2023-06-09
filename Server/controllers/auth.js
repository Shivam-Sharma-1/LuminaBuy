const StatusCodes = require("http-status-codes");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { hashedPassword, decryptPassword } = require("../util/hashedpassword");

async function register(req, res) {
	try {
		const user = await User.create({
			...req.body,
			password: hashedPassword(req.body.password)
		});
		res.status(StatusCodes.CREATED).json(user);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
	}
}

async function login(req, res) {
	try {
		const user = await User.findOne({
			email: req.body.email
		});

		!user && res.status(StatusCodes.UNAUTHORIZED).json("Wrong credentials");
		req.body.password != decryptPassword(user.password) &&
			res.status(StatusCodes.UNAUTHORIZED).json("Wrong password");

		const accessToken = jwt.sign(
			{
				id: user._id,
				isAdmin: user.isAdmin
			},
			process.env.JWT_SECRET,
			{ expiresIn: "30d" }
		);

		const { password, ...userDetails } = user._doc;

		res.status(StatusCodes.OK).json({ ...userDetails, accessToken });
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
	}
}

module.exports = { register, login };
