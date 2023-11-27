import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Homepage from '../Pages/HomePage';
import ResetPasswordPage from '../Pages/ResetPasswordPage';
import VerifyEmailPage from '../Pages/VerifyEmailPage';
import ProductPage from '../Pages/ProductPage';
import LogInHeader from './LogInHeader';
import SignUpHeader from './SignUpHeader';
import LogInPage from '../Pages/LogInPage';
import TestingPage from '../Pages/TestingPage';
import SearchResultPage from '../Pages/SearchResultPage';
import TestingPage2 from '../Pages/TestingPage2';
import ForgotPassword from '../Pages/ForgotPasswordPage';
import RegisterPage from '../Pages/RegisterPage';
import CheckoutPage from "../Pages/CheckoutPage";
import UserProfile from '../Pages/UserProfile';
import algoliasearch from 'algoliasearch/lite';
import {
    InstantSearch,
} from 'react-instantsearch';
import { CartProvider } from '../Context/CartContext';
import { UserProvider } from '../Context/UserContext';
import Chatbot from "./Chatbot";

const searchClient = algoliasearch('IZX7MYSNRD', 'd8ac69cc1ecc43ac91c32ca6d0fb4305');



export default function Router() {
    const Layout = ({ header }) => {
        return (
            <>
                <InstantSearch searchClient={searchClient} indexName="rBuy">
                    {header}
                    <Outlet />
                    <Chatbot />
                    <Footer />
                </InstantSearch>
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
                {
                    path: "/test",
                    element: <TestingPage />
                },
                {
                    path: "/test2",
                    element: <TestingPage2 />
                },
                {
                    path: "/profile",
                    element: <UserProfile />
                },
                {
                    path: "/search",
                    element: <SearchResultPage />
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
        <CartProvider>
            <UserProvider>
                <RouterProvider router={BrowserRoutes} />
            </UserProvider>
        </CartProvider>
    )
}