import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Register from "../pages/register";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout />, children: [
            {
                path: '/', element: <Home />
            },
            {
                path: '/product/:id', element: <ProductDetails />
            },
            {
                path: '/cart', element: <Cart />
            },
            {
                path: '/register', element: <Register />
            },
            {
                path: '/login', element: <Login />
            }
        ]
    }
]);

export default router;