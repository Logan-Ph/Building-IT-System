import Header from './Header';
import Footer from './Footer';
import Homepage from '../Pages/HomePage';
import ResetPasswordPage from '../Pages/ResetPasswordPage';
import VerifyEmailPage from '../Pages/VerifyEmailPage';
import ProductPage from '../Pages/ProductPage';
import LogInHeader from './LogInHeader';
import SignUpHeader from './SignUpHeader';
import LogInPage from '../Pages/LogInPage';
import ForgotPassword from '../Pages/ForgotPasswordPage';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RegisterPage from '../Pages/RegisterPage';
import CheckoutPage from "../Pages/CheckoutPage";


export default function Router() {
    const Layout = ({ header }) => {
        return (
            <>
                {header}
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
            path: "user/:token/verify-email",
            element: <>
                <VerifyEmailPage />
            </>
        },
        {
            path: "/",
            element: <Layout header={<Header />} />,
            children: [
                {
                    path: "/",
                    element: <Homepage />
                },
                {
                    path: "/product/:id",
                    element: <ProductPage />
                },
                {
                    path: "/checkout",
                    element: <CheckoutPage />
                },
            ]
        },
        {
            path: "/",
            element: <Layout header={<LogInHeader />} />,
            children: [
                {
                    path: "/login",
                    element: <LogInPage />
                },
                {
                    path: "/forgot-password",
                    element: <ForgotPassword />
                },
                {
                    path: "/user/:token/forgot-password",
                    element: <ResetPasswordPage />
                },
            ]
        },
    ])

    return (
        <RouterProvider router={BrowserRoutes} />
    )
}