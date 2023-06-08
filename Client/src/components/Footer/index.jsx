import {
	Center,
	ContactItem,
	Container,
	Desc,
	Left,
	List,
	ListItem,
	Logo,
	Payment,
	Right,
	SocialContainer,
	SocialIcon,
	Title
} from "./Footer.styled";
import {
	BsFacebook,
	BsTwitter,
	BsPinterest,
	BsTelephoneFill
} from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { IoLocation } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { LogoSpan } from "../Navbar/Navbar.styled";

function Footer() {
	return (
		<Container>
			<Left>
				<Logo>
					Lumina<LogoSpan>Buy</LogoSpan>
				</Logo>
				<Desc>
					There are many variations of passages of Lorem Ipsum
					available, but the majority have suffered alteration in some
					form, by injected humour, or randomised words which don’t
					look even slightly believable.
				</Desc>
				<SocialContainer>
					<SocialIcon color="3B5999">
						<BsFacebook size={20} />
					</SocialIcon>
					<SocialIcon color="E4405F">
						<AiFillInstagram size={20} />
					</SocialIcon>
					<SocialIcon color="55ACEE">
						<BsTwitter size={20} />
					</SocialIcon>
					<SocialIcon color="E60023">
						<BsPinterest size={20} />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Man Fashion</ListItem>
					<ListItem>Woman Fashion</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<IoLocation style={{ marginRight: "10px" }} size={20} /> 622
					Indiranagar , Bengaluru, India 560012
				</ContactItem>
				<ContactItem>
					<BsTelephoneFill
						style={{ marginRight: "10px" }}
						size={20}
					/>
					+91 84515 88942
				</ContactItem>
				<ContactItem>
					<HiOutlineMail style={{ marginRight: "10px" }} size={23} />
					contact@luminabuy.dev
				</ContactItem>
				<Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
			</Right>
		</Container>
	);
}

export default Footer;
