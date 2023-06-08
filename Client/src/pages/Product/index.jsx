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

function Product() {
	return (
		<Container>
			<Navbar />
			<Wrapper>
				<ImgContainer>
					<Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
				</ImgContainer>
				<InfoContainer>
					<Title>Denim Jumpsuit</Title>
					<Desc>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec venenatis, dolor in finibus malesuada, lectus
						ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla
						fermentum vestibulum ex, eget tristique tortor pretium
						ut. Curabitur elit justo, consequat id condimentum ac,
						volutpat ornare.
					</Desc>
					<Price>$ 20</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>Color</FilterTitle>
							<FilterColor color="black" />
							<FilterColor color="darkblue" />
							<FilterColor color="gray" />
						</Filter>
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize>
								<FilterSizeOption>XS</FilterSizeOption>
								<FilterSizeOption>S</FilterSizeOption>
								<FilterSizeOption>M</FilterSizeOption>
								<FilterSizeOption>L</FilterSizeOption>
								<FilterSizeOption>XL</FilterSizeOption>
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							<MdOutlineRemove size={30} />
							<Amount>1</Amount>
							<MdOutlineAdd size={30} />
						</AmountContainer>
						<Button>ADD TO CART</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<Footer />
		</Container>
	);
}

export default Product;
