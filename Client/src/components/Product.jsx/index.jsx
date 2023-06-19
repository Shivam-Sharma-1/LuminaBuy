import { Circle, Container, Icon, Image, Info } from "./Product.styled";
import { MdSearch, MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

function Product({ item }) {
	return (
		<Container>
			<Circle />
			<Image src={item.img} />
			<Info>
				<Icon>
					<MdOutlineShoppingCart />
				</Icon>
				<Link
					to={`/products/find/${item._id}`}
					style={{ textDecoration: "none", color: "initial" }}
				>
					<Icon>
						<MdSearch />
					</Icon>
				</Link>
				<Icon>
					<AiOutlineHeart />
				</Icon>
			</Info>
		</Container>
	);
}

export default Product;
