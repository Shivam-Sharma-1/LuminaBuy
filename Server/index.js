const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello");
});

mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log("DB connection successful"))
	.catch((err) => console.log(`An error has occured ${err}`));

const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
	console.log(`Server is running at port ${PORT}`);
});
