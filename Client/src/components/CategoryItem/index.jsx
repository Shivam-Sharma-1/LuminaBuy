import { Link } from "react-router-dom";
import { Button, Container, Image, Info, Title } from "./CategoryItem.styled";

function CategoryItem({ item }) {
	return (
		<Container>
			<Link to={`/products/${item.category}`}>
				<Image src={item.img} />
				<Info>
					<Title>{item.title}</Title>
					<Button>SHOP NOW</Button>
				</Info>
			</Link>
		</Container>
	);
}

export default CategoryItem;
