import { publicRequest } from "../util/requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

async function login(dispatch, user) {
	dispatch(loginStart());
	try {
		const res = await publicRequest.post("/auth/login", user);
		dispatch(loginSuccess(res.data));
	} catch (error) {
		dispatch(loginFailure());
	}
}

export default login;
