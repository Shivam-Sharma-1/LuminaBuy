const StatusCodes = require("http-status-codes");
const CryptoJS = require("crypto-js");

const User = require("../models/User");

async function register(req, res) {
	try {
		const user = await User.create({
			...req.body,
			password: CryptoJS.AES.encrypt(
				req.body.password,
				process.env.PASSWORD_SECRET
			)
		});
		res.status(StatusCodes.CREATED).json(user);
	} catch (err) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
	}
}

module.exports = { register };
