import Header from './Header';
import Footer from './Footer';
import Homepage from '../Pages/HomePage';
import ProductPage from '../Pages/ProductPage';
import LogInHeader from './LogInHeader';
import SignUpHeader from './SignUpHeader';
import LogInPage from '../Pages/LogInPage';
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';
import RegisterPage from '../Pages/RegisterPage';
import CheckoutPage from "../Pages/CheckoutPage";


export default function Router() {
    const Layout = () => {
        return (
            <>
                <Header />
                <Outlet />
                <Footer />
            </>
        )
    }

    const BrowserRoutes = createBrowserRouter([
        {
            path: "/register",
            element: <>
                <SignUpHeader />
                <RegisterPage />
                <Footer />
            </>
        },
        {
            path: "/login",
            element: <>
                <LogInHeader />
                <LogInPage />
                <Footer />
            </>
        },
        {
            path: "/checkout",
            element: <>
                <Header />
                <CheckoutPage />
                <Footer />
            </>
        },
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Homepage />
                },
                {
                    path: "/product/:id",
                    element: <ProductPage />
                },
            ]
        }
    ])

    return (
        <RouterProvider router={BrowserRoutes} />
    )
}