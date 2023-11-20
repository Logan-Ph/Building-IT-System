import Header from './Header';
import Footer from './Footer';
import Homepage from '../Pages/HomePage';
import ResetPasswordPage from '../Pages/ResetPasswordPage';
import ChangePasswordPage from '../Pages/ChangePasswordPage';
import VerifyEmailPage from '../Pages/VerifyEmailPage';
import ProductPage from '../Pages/ProductPage';
import LogInHeader from './LogInHeader';
import SignUpHeader from './SignUpHeader';
import LogInPage from '../Pages/LogInPage';
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';
import RegisterPage from '../Pages/RegisterPage';

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
            path: "/reset",
            element: <>
                <LogInHeader />
                <ResetPasswordPage />
                <Footer />
            </>
        },

        {
            path: "/reset/change",
            element: <>
                <LogInHeader />
                <ChangePasswordPage />
                <Footer />
            </>
        },

        {
            path: "/verify",
            element: <>
                <VerifyEmailPage/>
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