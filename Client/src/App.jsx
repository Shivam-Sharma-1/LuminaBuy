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
import Success from "./pages/Success";
import CartPage from "./pages/Cart";

function App() {
	const user = true;

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/">
				<Route index element={<Home />} />
				<Route path="products">
					<Route path=":category" element={<ProductList />} />
					<Route path="find/:id" element={<Product />} />
				</Route>
				<Route path="cart" element={<CartPage />} />
				<Route path="success" element={<Success />} />
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
