const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");

const authenticationMiddleware = async (req, res, next) => {
	const authHeader = req.headers.authorization;
	if (!authHeader || !authHeader.startsWith("Bearer")) {
		res.status(StatusCodes.UNAUTHORIZED).json("Authentication Invalid");
	} else {
		const token = authHeader.split(" ")[1];
		try {
			const user = jwt.verify(token, process.env.JWT_SECRET);
			req.user = user;
			next();
		} catch (error) {
			res.status(StatusCodes.UNAUTHORIZED).json("Token Invalid");
		}
	}
};

const authorizationMiddleware = (req, res, next) => {
	authenticationMiddleware(req, res, () => {
		if (req.user.id === req.params.id || req.user.isAdmin) next();
		else res.status(StatusCodes.FORBIDDEN).json("Unauthorized");
	});
};

module.exports = { authenticationMiddleware, authorizationMiddleware };
