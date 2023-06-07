import Announcements from "../../components/Announcements";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Products from "../../components/Products.jsx";
import {
	Container,
	Filter,
	FilterContainer,
	FilterText,
	Option,
	Select,
	Title
} from "./ProductList.styled";

function ProductList() {
	return (
		<Container>
			<Navbar />
			<Announcements />
			<Title>Dresses</Title>
			<FilterContainer>
				<Filter>
					<FilterText>Filter Products:</FilterText>
					<Select>
						<Option disabled selected>
							Color
						</Option>
						<Option>White</Option>
						<Option>Black</Option>
						<Option>Red</Option>
						<Option>Blue</Option>
						<Option>Yellow</Option>
						<Option>Green</Option>
					</Select>
					<Select>
						<Option disabled selected>
							Size
						</Option>
						<Option>XS</Option>
						<Option>S</Option>
						<Option>M</Option>
						<Option>L</Option>
						<Option>XL</Option>
					</Select>
				</Filter>
				<Filter>
					<FilterText>Sort Products:</FilterText>
					<Select>
						<Option selected>Newest</Option>
						<Option>Price (asc)</Option>
						<Option>Price (desc)</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<Products />
			<Footer />
		</Container>
	);
}

export default ProductList;
