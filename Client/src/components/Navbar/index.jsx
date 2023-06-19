import React from "react";
import { MdSearch, MdOutlineShoppingCart } from "react-icons/md";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import {
	Center,
	Container,
	Input,
	Language,
	Left,
	Logo,
	LogoSpan,
	MenuItem,
	Right,
	SearchContainer,
	Wrapper
} from "./Navbar.styled";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge } from "@mui/material";

function Navbar() {
	const quantity = useSelector((state) => state.cart.quantity);

	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input placeholder="Search" />
						<MdSearch style={{ color: "gray", fontSize: 16 }} />
					</SearchContainer>
				</Left>
				<Center>
					<Link to="/" style={{ textDecoration: "none" }}>
						<Logo>
							Lumina<LogoSpan>Buy</LogoSpan>
						</Logo>
					</Link>
				</Center>
				<Right>
					<MenuItem>Register</MenuItem>
					<MenuItem>Sign In</MenuItem>
					<Link to={"/cart"} style={{ color: "inherit" }}>
						<MenuItem>
							<Badge badgeContent={quantity} color="primary">
								<ShoppingCartOutlinedIcon />
							</Badge>
						</MenuItem>
					</Link>
				</Right>
			</Wrapper>
		</Container>
	);
}
export default Navbar;
