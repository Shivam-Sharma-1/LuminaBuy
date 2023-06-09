import { styled } from "styled-components";
import mobile from "../../responsive";

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
			rgba(255, 255, 255, 0.5),
			rgba(255, 255, 255, 0.5)
		),
		url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
			center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Wrapper = styled.div`
	width: 40%;
	padding: 20px;
	background-color: white;
	box-shadow: 0px 0px 10px 3px gray;
	${mobile({ width: "75%" })}
`;

export const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

export const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;

export const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
`;

export const Agreement = styled.span`
	font-size: 15px;
	margin: 20px 0px;
`;

export const Button = styled.button`
	width: 100%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	letter-spacing: 1.5px;
	color: white;
	cursor: pointer;
`;
