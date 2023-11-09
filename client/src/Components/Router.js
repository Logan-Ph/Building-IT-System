import Header from './Header';
import Footer from './Footer';
import Homepage from '../Pages/HomePage';
import ProductPage from '../Pages/ProductPage';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
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
            path:"/register",
            element:<RegisterPage/>
        },
        {
            path: "/",
            element: <Layout />,
            children:[
                {
                    path:"/",
                    element:<Homepage/>
                },
                {
                    path:"/product",
                    element:<ProductPage/>
                },
            ]
        }
    ])

    return(
        <RouterProvider router={BrowserRoutes} />
    )
}