import { Circle, Container, Icon, Image, Info } from "./Product.styled";
import { MdSearch, MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";

function Product({ item }) {
	return (
		<Container>
			<Circle />
			<Image src={item.img} />
			<Info>
				<Icon>
					<MdOutlineShoppingCart />
				</Icon>
				<Icon>
					<MdSearch />
				</Icon>
				<Icon>
					<AiOutlineHeart />
				</Icon>
			</Info>
		</Container>
	);
}

export default Product;
