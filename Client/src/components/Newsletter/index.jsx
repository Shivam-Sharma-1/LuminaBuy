import {
	Button,
	Container,
	Desc,
	Input,
	InputContainer,
	Title
} from "./Newsletter.styled";
import { MdSend } from "react-icons/md";

function Newsletter() {
	return (
		<Container>
			<Title>Newsletter</Title>
			<Desc>Get timely updates from your favorite products.</Desc>
			<InputContainer>
				<Input placeholder="Your email" />
				<Button>
					<MdSend size={20} />
				</Button>
			</InputContainer>
		</Container>
	);
}

export default Newsletter;
