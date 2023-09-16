import Product from "../Product.jsx";
import { Container } from "./Products.styled";
import { useEffect, useState } from "react";
import axios from "axios";

function Products({ category, sort, filters }) {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	useEffect(() => {
		async function getProducts() {
			try {
				const res = await axios.get(
					category
						? `https://lumina-buy.vercel.app/api/products?category=${category}`
						: `https://lumina-buy.vercel.app/api/products`
				);
				setProducts(res.data);
			} catch (error) {
				console.log(error);
			}
		}
		getProducts();
	}, [category]);

	useEffect(() => {
		category &&
			setFilteredProducts(
				products.filter((item) =>
					Object.entries(filters).every(([key, value]) =>
						item[key].includes(value)
					)
				)
			);
	}, [products, category, filters]);

	useEffect(() => {
		if (sort === "newest") {
			setFilteredProducts((prev) =>
				[...prev].sort((a, b) => a.createdAt - b.createdAt)
			);
		} else if (sort === "asc") {
			setFilteredProducts((prev) =>
				[...prev].sort((a, b) => a.price - b.price)
			);
		} else {
			setFilteredProducts((prev) =>
				[...prev].sort((a, b) => b.price - a.price)
			);
		}
	}, [sort]);

	return (
		<Container>
			{category
				? filteredProducts.map((item) => (
						<Product item={item} key={item.id} />
				  ))
				: products.map((item) => <Product item={item} key={item.id} />)}
		</Container>
	);
}

export default Products;
