import { styled } from "styled-components";
import mobile from "../../responsive";

export const Container = styled.div`
	height: 60px;
	${mobile({ height: "50px" })}
`;

export const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${mobile({ padding: "10px 0px" })}
`;

export const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

export const Language = styled.span`
	font-size: 16px;
	cursor: pointer;
	${mobile({ display: "none" })}
`;

export const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
`;

export const Input = styled.input`
	border: none;
	outline: none;
	${mobile({ width: "50px" })}
`;

export const Center = styled.div`
	flex: 1;
	text-align: center;
`;

export const Logo = styled.h1`
	font-weight: bold;
	color: initial;
	${mobile({ fontSize: "24px" })}
`;

export const LogoSpan = styled.span`
	color: #3dadf3;
`;

export const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	${mobile({ flex: 2, justifyContent: "center" })}
`;

export const MenuItem = styled.div`
	font-size: 16px;
	cursor: pointer;
	margin-left: 25px;
	${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
