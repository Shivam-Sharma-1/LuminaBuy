import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import {
	AddContainer,
	Amount,
	AmountContainer,
	Button,
	Container,
	Desc,
	Filter,
	FilterColor,
	FilterContainer,
	FilterSize,
	FilterSizeOption,
	FilterTitle,
	Image,
	ImgContainer,
	InfoContainer,
	Price,
	Title,
	Wrapper
} from "./Product.styled";
import { MdOutlineAdd, MdOutlineRemove } from "react-icons/md";
import { useEffect, useState } from "react";
import { publicRequest } from "../../util/requestMethods";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartRedux";

function Product() {
	const params = useParams();
	const dispatch = useDispatch();
	const { id } = params;

	const [product, setProduct] = useState({});
	const [quantity, setQuantity] = useState(1);
	const [color, setColor] = useState("");
	const [size, setSize] = useState("");

	const { title, desc, img, price } = product;

	useEffect(() => {
		async function getProduct() {
			try {
				const res = await publicRequest.get(`/products/find/${id}`);
				setProduct(res.data);
			} catch (error) {
				console.log(error);
			}
		}
		getProduct();
	}, [id]);

	function handleQuantity(type) {
		if (type === "dec") {
			quantity > 1 && setQuantity(quantity - 1);
		} else {
			setQuantity(quantity + 1);
		}
	}

	function handleClick() {
		dispatch(addProduct({ ...product, quantity, color, size }));
	}

	return (
		<Container>
			<Navbar />
			<Wrapper>
				<ImgContainer>
					<Image src={img} />
				</ImgContainer>
				<InfoContainer>
					<Title>{title}</Title>
					<Desc>{desc}</Desc>
					<Price>$ {price}</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>Color</FilterTitle>
							{product.color?.map((col, index) => (
								<FilterColor
									color={col}
									key={index}
									onClick={() => setColor(col)}
								/>
							))}
						</Filter>
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize
								onChange={(e) => setSize(e.target.value)}
							>
								{product.size?.map((siz, index) => (
									<FilterSizeOption key={index}>
										{siz}
									</FilterSizeOption>
								))}
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							<MdOutlineRemove
								size={30}
								onClick={() => handleQuantity("dec")}
							/>
							<Amount>{quantity}</Amount>
							<MdOutlineAdd
								size={30}
								onClick={() => handleQuantity("inc")}
							/>
						</AmountContainer>
						<Button onClick={handleClick}>ADD TO CART</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<Footer />
		</Container>
	);
}

export default Product;
