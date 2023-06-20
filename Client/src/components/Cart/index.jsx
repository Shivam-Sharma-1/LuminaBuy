import {
	Bottom,
	Button,
	Container,
	Details,
	Hr,
	Image,
	Info,
	PriceDetail,
	Product,
	ProductAmount,
	ProductAmountContainer,
	ProductColor,
	ProductDetail,
	ProductId,
	ProductName,
	ProductPrice,
	ProductSize,
	Summary,
	SummaryItem,
	SummaryItemPrice,
	SummaryItemText,
	SummaryTitle,
	Title,
	Top,
	TopButton,
	TopText,
	TopTexts,
	Wrapper
} from "./Cart.styled";
import { MdOutlineAdd, MdOutlineRemove } from "react-icons/md";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

import { useEffect, useState } from "react";
import { userRequest } from "../../util/requestMethods";

function Cart() {
	const stripeKey = import.meta.env.VITE_APP_STRIPE_PUBLIC_KEY;
	const cart = useSelector((state) => state.cart);
	const [stripeToken, setStripeToken] = useState(null);
	const navigateTo = useNavigate();

	function onToken(token) {
		setStripeToken(token);
	}

	useEffect(() => {
		async function makeRequest() {
			try {
				const res = await userRequest.post("/checkout/payment", {
					tokenId: stripeToken.id,
					amount: cart.total * 100
				});
				navigateTo("/success", {
					stripeData: res.data,
					products: cart
				});
			} catch (error) {
				console.log(error);
			}
		}
		stripeToken && makeRequest();
	}, [stripeToken, cart.total, history]);

	return (
		<Container>
			<Navbar />
			<Wrapper>
				<Title>YOUR BAG</Title>
				<Top>
					<TopButton>CONTINUE SHOPPING</TopButton>
					<TopTexts>
						<TopText>Shopping Bag(2)</TopText>
						<TopText>Your Wishlist (0)</TopText>
					</TopTexts>
					<TopButton type="filled">CHECKOUT NOW</TopButton>
				</Top>
				<Bottom>
					<Info>
						{cart.products.map((prod) => (
							<Product>
								<ProductDetail>
									<Image src={prod.img} />
									<Details>
										<ProductName>
											<b>Product: </b>
											{prod.title}
										</ProductName>
										<ProductColor color={prod.scolor} />
										<ProductSize>
											<b>Size: </b> {prod.size}
										</ProductSize>
									</Details>
								</ProductDetail>
								<PriceDetail>
									<ProductAmountContainer>
										<MdOutlineRemove size={30} />{" "}
										<ProductAmount>
											{prod.quantity}
										</ProductAmount>
										<MdOutlineAdd size={30} />
									</ProductAmountContainer>
									<ProductPrice>
										$ {prod.price * prod.quantity}
									</ProductPrice>
								</PriceDetail>
							</Product>
						))}
						<Hr />
					</Info>
					<Summary>
						<SummaryTitle>ORDER SUMMARY</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>
								Estimated Shipping
							</SummaryItemText>
							<SummaryItemPrice>$ 5.90</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Shipping Discount</SummaryItemText>
							<SummaryItemPrice>$ -5.90</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem type="total">
							<SummaryItemText>Total</SummaryItemText>
							<SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
						</SummaryItem>
						<StripeCheckout
							name={"LuminaBuy"}
							image={
								"https://cdn.shopify.com/s/files/1/0589/5657/8969/products/lumina-marble-candle-stand-by-kaksh-studio-ikiru-in-2_525x700.jpg?v=1676442355"
							}
							billingAddress
							shippingAddress
							description={`Your total is $${cart.total}`}
							amount={cart.total * 100}
							token={onToken}
							stripeKey={stripeKey}
						>
							<Button>CHECKOUT NOW</Button>
						</StripeCheckout>
					</Summary>
				</Bottom>
			</Wrapper>
			<Footer />
		</Container>
	);
}

export default Cart;
