import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements
} from "react-router-dom";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Success from "./components/Success";

function App() {
	const user = true;

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/">
				<Route index element={<Home />} />
				<Route path="products">
					<Route path=":category" element={<ProductList />} />
					<Route path=":id" element={<Product />} />
				</Route>
				<Route path="cart" element={<Cart />} />
				<Route path="success" element={<Success />} />
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
