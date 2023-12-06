import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Homepage from '../Pages/User/HomePage';
import ResetPasswordPage from '../Pages/User/ResetPasswordPage';
import VerifyEmailPage from '../Pages/User/VerifyEmailPage';
import LogInHeader from './LogInHeader';
import SignUpHeader from './SignUpHeader';
import LogInPage from '../Pages/User/LogInPage';
import SearchResultPage from '../Pages/User/SearchResultPage';
import ForgotPassword from '../Pages/User/ForgotPasswordPage';
import RegisterPage from '../Pages/User/RegisterPage';
import CheckoutPage from "../Pages/User/CheckoutPage";
import UserProfile from '../Pages/User/UserProfile';
import ManageOrderPage from '../Pages/Vendor/VendorManageOrderPage';
import algoliasearch from 'algoliasearch/lite';

import DashboardPage from '../Pages/Vendor/DashboardPage';
import AdminDashboardPage from '../Pages/Admin/AdminDashboardPage';

import VendorHomePage from '../Pages/User/VendorHomePage';
import VendorProductPage from "../Pages/User/VendorProductPage";
import ProductPage from '../Pages/User/ProductPage';


import {
  InstantSearch,
} from 'react-instantsearch';
import { CartProvider } from '../Context/CartContext';
import { UserProvider } from '../Context/UserContext';
import Chatbot from "./Chatbot";
import VendorMyProduct from '../Pages/Vendor/VendorMyProduct';
import VendorPostingProduct from '../Pages/Vendor/VendorPostingProduct';
import VendorSidebar from '../Components/VendorSidebar';

import AdminManageVendorProduct from '../Pages/Admin/AdminManageVendorProduct';

const searchClient = algoliasearch('IZX7MYSNRD', 'd8ac69cc1ecc43ac91c32ca6d0fb4305');

export default function Router() {
  const UserLayout = ({ header }) => {
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

  const VendorLayout = () => {
    return (
      <>
        <InstantSearch searchClient={searchClient} indexName="rBuy">
          <div className="flex  ">
            <VendorSidebar />
            <Outlet />
          </div>
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
      element: <UserLayout header={<Header />} />,
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
          path: "/vendor/:id/product",
          element: <VendorProductPage />,
        },
        {
          path: "/vendor/:id/home",
          element: <VendorHomePage />,
        },
        {
          path: "/search/:query",
          element: <SearchResultPage />,
        },
        {
          path: "/AdminDashboard",
          element: <AdminDashboardPage />,
        },
      ],
    },
    {
      path: "/",
      element: <VendorLayout />,
      children: [
        {
          path: "/dashboard",
          element: <DashboardPage />,
        },
        {
          path: "/add-product",
          element: <VendorPostingProduct />
        },
        {
          path: "/manage-order",
          element: <ManageOrderPage />
        },
        {
          path: "/manage-product",
          element: <VendorMyProduct />
        },
      ],
    },
    {
      path: "/",
      element: <VendorLayout />,
      children: [
        {
          path: "/admin/manage-order",
          element: <AdminManageVendorProduct />,
        },
      ],
    },
    {
      path: "/",
      element: <UserLayout header={<LogInHeader />} />,
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