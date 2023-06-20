import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import CartPage from "./pages/Cart";
import SuccessPage from "./pages/Success";
import { useSelector } from "react-redux";

function App() {
	const user = useSelector((state) => state.user.currentUser);

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/">
				<Route index element={<Home />} />
				<Route path="products">
					<Route path=":category" element={<ProductList />} />
					<Route path="find/:id" element={<Product />} />
				</Route>
				<Route path="cart" element={<CartPage />} />
				<Route path="success" element={<SuccessPage />} />
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
