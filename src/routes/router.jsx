import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Register from "../pages/register";
import Login from "../pages/Login";
import About from "../pages/About";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import Orders from "../pages/Orders";
import AddProduct from "../pages/AddProduct";
import AllProducts from "../pages/AllProducts";
import Invoice from "../pages/Invoice";

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
            },
            {
                path: '/about', element: <About />
            },
        ]
    },
    {
        path: '/dash-dashboard', element: <PrivateRoute><DashboardLayout /></PrivateRoute>, children: [
            {
                path: '/dash-dashboard', element: <PrivateRoute><Orders /></PrivateRoute>
            },
            {
                path: '/dash-dashboard/add-product', element: <PrivateRoute><AddProduct /></PrivateRoute>
            },
            {
                path: '/dash-dashboard/all-product', element: <PrivateRoute><AllProducts /></PrivateRoute>
            },

        ]
    },
    {
        path: '/invoice', element: <Invoice />,
    },
]);

export default router;