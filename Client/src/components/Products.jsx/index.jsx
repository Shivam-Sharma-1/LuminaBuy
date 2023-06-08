import { popularProducts } from "../../../data";
import Product from "../Product.jsx";
import { Container } from "./Products.styled";

function Products() {
	return (
		<Container>
			{popularProducts.map((item) => (
				<Product item={item} key={item.id} />
			))}
		</Container>
	);
}

export default Products;
