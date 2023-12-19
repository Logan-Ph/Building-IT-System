import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Homepage from "../Pages/User/HomePage";
import ResetPasswordPage from "../Pages/User/ResetPasswordPage";
import VerifyEmailPage from "../Pages/User/VerifyEmailPage";
import LogInHeader from "./LogInHeader";
import SignUpHeader from "./SignUpHeader";
import LogInPage from "../Pages/User/LogInPage";
import SearchResultPage from "../Pages/User/SearchResultPage";
import ForgotPassword from "../Pages/User/ForgotPasswordPage";
import RegisterPage from "../Pages/User/RegisterPage";
import CheckoutPage from "../Pages/User/CheckoutPage";
import UserProfile from "../Pages/User/UserProfile";
import ManageOrderPage from "../Pages/Vendor/VendorManageOrderPage";
import algoliasearch from "algoliasearch/lite";
import DashboardPage from "../Pages/Vendor/DashboardPage";
import AdminDashboardPage from "../Pages/Admin/AdminDashboardPage";
import VendorHomePage from "../Pages/User/VendorHomePage";
import VendorProductPage from "../Pages/User/VendorProductPage";
import ProductPage from "../Pages/User/ProductPage";
import ManageUserPage from "../Pages/Admin/ManageUserPage";
import ReportInfoPage from "../Pages/Admin/ReportInfoPage";
import { InstantSearch } from "react-instantsearch";
import { CartProvider } from "../Context/CartContext";
import { UserProvider } from "../Context/UserContext";
import Chatbot from "./Chatbot";
import VendorMyProduct from '../Pages/Vendor/VendorMyProduct';
import VendorPostingProduct from '../Pages/Vendor/VendorPostingProduct';
import VendorEditingProduct from '../Pages/Vendor/VendorEditingProduct';
import VendorEditProfile from '../Pages/Vendor/VendorEditProfile';
import VendorEditStore from '../Pages/Vendor/VendorEditStore';
import VendorSidebar from '../Components/VendorSidebar';
import VendorHeader from '../Components/VendorHeader';
import AdminHeader from '../Components/AdminHeader'
import AdminManageVendorProduct from '../Pages/Admin/AdminManageVendorProduct';
import CartPage from "../Pages/User/CartPage";
import ShipperDashboardPage from '../Pages/Shipper/ShipperDashboardPage';
import ChatPage from "../Pages/User/ChatPage";
import AddImageHomePageCarousel from "./AddImageHomePageCarousel";
import UserOrder from '../Pages/User/UserOrder';
import AdminSideBar from "./AdminSideBar";
import VendorChatPage from "../Pages/Vendor/VendorChatPage";



const searchClient = algoliasearch(
  "IZX7MYSNRD",
  "d8ac69cc1ecc43ac91c32ca6d0fb4305"
);

export default function Router() {
  const UserLayout = ({ header }) => {
    return (
      <>
        <InstantSearch searchClient={searchClient} indexName="rBuy" insights={true}>
          {header}
          <Outlet />
          <Chatbot />
          <Footer />
        </InstantSearch>
      </>
    );
  };

  const LoginLayout = () => {
    return (
      <>
        <LogInHeader />
        <Outlet />
        <Footer />
      </>
    );
  };

  const VendorLayout = () => {
    return (
      <>
        <InstantSearch searchClient={searchClient} indexName="rBuy" insights={true}>
          <VendorHeader />
          <div className="flex  ">
            <VendorSidebar />
            <Outlet />
          </div>
        </InstantSearch>

      </>
    );
  };

  const AdminLayout = () => {
    return (
      <>
        <InstantSearch searchClient={searchClient} indexName="rBuy" insights={true}>
          <AdminHeader />
          <div className="flex  ">
            <AdminSideBar />
            <Outlet />
          </div>
        </InstantSearch>
      </>
    );
  };

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
          path: "/cart",
          element: <CartPage />,
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
          path: "/user-order",
          element: <UserOrder />,
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
          path: "/search/:query/:category/:price",
          element: <SearchResultPage />,
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
          element: <VendorPostingProduct />,
        },
        {
          path: "/manage-order",
          element: <ManageOrderPage />,
        },
        {
          path: "/manage-product",
          element: <VendorMyProduct />,
        },
        {
          path: "/edit-product/:id",
          element: <VendorEditingProduct />,
        },
        {
          path: "/shipper-dashboard",
          element: <ShipperDashboardPage />,
        },
        {
          path: "/edit-store",
          element: <VendorEditStore />,
        },
        {
          path: "/edit-vendor-profile",
          element: <VendorEditProfile />,
        },
      ],
    },
    {
      path: "/",
      element: <LoginLayout />,
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
    {
      path: "/",
      element: <AdminLayout />,
      children: [
        {
          path: "/admin/manage-user",
          element: <ManageUserPage />,
        },
        {
          path: "/admin/:id/report",
          element: <ReportInfoPage />,
        },
        {
          path: "/admin/manage-product",
          element: <AdminManageVendorProduct />,
        },
        {
          path: "/admin/dashboard",
          element: <AdminDashboardPage />,
        },
        {
          path: "/admin/add-homepage-carousel",
          element: <AddImageHomePageCarousel />,
        },
      ],
    },
    {
      path: "/",
      children: [
        {
          path: "/chat",
          element: (
            <InstantSearch searchClient={searchClient} indexName="rBuy">
              <div className="h-screen overflow-hidden">
                <Header />
                <ChatPage />
              </div>
            </InstantSearch>
          ),
        },
        {
          path: "/vendor-chat",
          element: (
              <div className="h-screen overflow-hidden">
                <VendorHeader/>
                <VendorChatPage />
              </div>
          ),
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
  );
}
