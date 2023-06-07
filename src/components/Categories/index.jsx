import { categories } from "../../../data";
import CategoryItem from "../CategoryItem";
import { Container } from "./Categories.styled";

function Categories() {
	return (
		<Container>
			{categories.map((item) => (
				<CategoryItem item={item} key={item.id} />
			))}
		</Container>
	);
}

export default Categories;
