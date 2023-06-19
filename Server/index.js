const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const usersRouter = require("./routes/user");
const productsRouter = require("./routes/product");
const cartsRouter = require("./routes/cart");
const ordersRouter = require("./routes/order");
const stripeRouter = require("./routes/stripe");
const cors = require("cors");
require("dotenv").config();

const app = express();

mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log("DB connection successful"))
	.catch((err) => console.log(`An error has occured ${err}`));

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter);
app.use("/api/cart", cartsRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/checkout", stripeRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server is running at port ${PORT}`);
});
