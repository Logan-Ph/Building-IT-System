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
import SearchResultPage from '../Pages/SearchResultPage';
import ForgotPassword from '../Pages/ForgotPasswordPage';
import RegisterPage from '../Pages/RegisterPage';
import CheckoutPage from "../Pages/CheckoutPage";
import UserProfile from '../Pages/UserProfile';
import ManageOrderPage from '../Pages/VendorManageOrderPage';
import algoliasearch from 'algoliasearch/lite';
import DashboardPage from '../Pages/DashboardPage';
import VendorHomePage from '../Pages/VendorHomePage';
import VendorProductPage from "../Pages/VendorProductPage";
import SearchInVendor from "../Pages/SearchInVendor";
import AdminManageProductPage from "../Pages/AdminManageProductPage";


import {
  InstantSearch,
} from 'react-instantsearch';
import { CartProvider } from '../Context/CartContext';
import { UserProvider } from '../Context/UserContext';
import Chatbot from "./Chatbot";
import VendorMyProduct from '../Pages/VendorMyProduct';
import VendorPostingProduct from '../Pages/VendorPostingProduct';

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
      element: (
        <>
          <SignUpHeader />
          <RegisterPage />
          <Footer />
        </>
      ),
    },
    {
      path: "user/:token/verify-email",
      element: (
        <>
          <VerifyEmailPage />
        </>
      ),
    },
    {
      path: "/",
      element: <Layout header={<Header />} />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/checkout",
          element: <CheckoutPage />,
        },
        {
          path: "/product/:id",
          element: <ProductPage />,
        },
        {
          path: "/profile",
          element: <UserProfile />,
        },
        {
          path: "/dashboard",
          element: <DashboardPage />,
        },
        {
          path: "/vendor/:id/product",
          element: <VendorProductPage />,
        },
        {
          path: "/vendor/:id",
          element: <VendorHomePage />,
        },
        {
          path: "/vendorSearch",
          element: <SearchInVendor />,
        },
        {
          path: "/search/:query",
          element: <SearchResultPage />,
        },
        {
          path: "/vendor/myProduct",
          element: <VendorMyProduct />
        },
        {
          path: "/vendor/postProduct",
          element: <VendorPostingProduct />
        },
        {
          path: "/vendor/manage-order",
          element: <ManageOrderPage />
        },
        {
          path: "/admin/manageProduct",
          element: <AdminManageProductPage />
        },
      ],
    },
    {
      path: "/",
      element: <Layout header={<LogInHeader />} />,
      children: [
        {
          path: "/login",
          element: <LogInPage />,
        },
        {
          path: "/forgot-password",
          element: <ForgotPassword />,
        },
        {
          path: "/user/:token/forgot-password",
          element: <ResetPasswordPage />,
        },
      ],
    },
  ]);

  return (
    <CartProvider>
      <UserProvider>
        <RouterProvider router={BrowserRoutes} />
      </UserProvider>
    </CartProvider>
  )
}