const express = require("express");
const StatusCodes = require("http-status-codes");
const stripe = require("stripe");
const router = express.Router();

router.post("/payment", (req, res) => {
	stripe.charges.create(
		{
			source: req.body.tokenId,
			amount: req.body.amount,
			currency: "usd"
		},
		(stripeError, stripeRes) => {
			if (stripeError)
				res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(stripeError);
			else res.status(StatusCodes.OK).json(stripeRes);
		}
	);
});

module.exports = router;
