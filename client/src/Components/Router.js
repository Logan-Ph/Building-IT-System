import Header from './Header';
import Footer from './Footer';
import Homepage from '../Pages/HomePage';
import ProductPage from '../Pages/ProductPage';
import LogInHeader from './LogInHeader';
import SignUpHeader from './SignUpHeader';
import LogInPage from '../Pages/LogInPage';
import TestingPage from '../Pages/TestingPage';
import TestingPage2 from '../Pages/TestingPage2';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RegisterPage from '../Pages/RegisterPage';
import DashboardPage from '../Pages/DashboardPage';


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
                {
                    path:"/test",
                    element: <TestingPage />
                },
                {
                    path:"/test2",
                    element: <TestingPage2 />
                },
                {
                    path:"/dashboard",
                    element: <DashboardPage/>
                }
                
            ]
        }
    ])

    return (
        <RouterProvider router={BrowserRoutes} />
    )
}