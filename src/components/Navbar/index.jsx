import React from "react";
import { MdSearch, MdOutlineShoppingCart } from "react-icons/md";
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

function Navbar() {
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
					<Logo>
						Lumina<LogoSpan>Buy</LogoSpan>
					</Logo>
				</Center>
				<Right>
					<MenuItem>Register</MenuItem>
					<MenuItem>Sign In</MenuItem>
					<MenuItem>
						<MdOutlineShoppingCart size={20} />
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
}
export default Navbar;
