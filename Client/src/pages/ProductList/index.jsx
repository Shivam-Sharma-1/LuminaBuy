import { useParams } from "react-router-dom";
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
import { useState } from "react";

function ProductList(e) {
	const params = useParams();
	const { category } = params;

	const [filters, setFilters] = useState({});
	const [sort, setSort] = useState({});

	function handleFilters(e) {
		setFilters({
			...filters,
			[e.target.name]: e.target.value
		});
	}

	return (
		<Container>
			<Navbar />
			<Announcements />
			<Title>Dresses</Title>
			<FilterContainer>
				<Filter>
					<FilterText>Filter Products:</FilterText>
					<Select name="color" onChange={handleFilters}>
						<Option disabled>Color</Option>
						<Option>white</Option>
						<Option>black</Option>
						<Option>red</Option>
						<Option>blue</Option>
						<Option>yellow</Option>
						<Option>green</Option>
					</Select>
					<Select name="size" onChange={handleFilters}>
						<Option disabled>Size</Option>
						<Option>XS</Option>
						<Option>S</Option>
						<Option>M</Option>
						<Option>L</Option>
						<Option>XL</Option>
					</Select>
				</Filter>
				<Filter>
					<FilterText>Sort Products:</FilterText>
					<Select onChange={(e) => setSort(e.target.value)}>
						<Option value="newest">Newest</Option>
						<Option value="asc">Price (asc)</Option>
						<Option value="desc">Price (desc)</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<Products category={category} sort={sort} filters={filters} />
			<Footer />
		</Container>
	);
}

export default ProductList;
