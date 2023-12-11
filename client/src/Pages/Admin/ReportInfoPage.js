import "../../css/mangeorder.css";
import ReportInfo from "../../Components/ReportInfo";
import CustomerCard from "../../Components/ProfileCard/CustomerCard";
import VendorCard from "../../Components/ProfileCard/VendorCard";
import ShipperCard from "../../Components/ProfileCard/ShipperCard";
import { Navigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export default function ReportInfoPage() {
  const params = useParams()
  const [user, setUser] = useState()
  const [userImage, setUserImage] = useState()
  const [orders, setOrders] = useState([])
  const [error, setError] = useState()
  const [categorizedOrder, setCategorizedOrder] = useState({ "All": orders })
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get(`http://localhost:4000/admin/${params.id}/report`, { withCredentials: true });
      setUser(res.data.user);
      setUserImage(res.data.userImage);
      setOrders(res.data.orders)
      setIsLoading(false)
    } catch (error) {
      setError(error);
      setIsLoading(false)
    }
  }, [params])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  useEffect(() => {
    const orderStatus = orders.reduce((acc, order) => {
      if (!acc[order.status]) {
        acc[order.status] = [];
      }
      acc[order.status].push(order);
      return acc;
    }, {});
    setCategorizedOrder(prevState => ({ ...prevState, ...orderStatus }));
  }, [orders]);

  if (isLoading) {
    return <div>....is loading</div>
  }

  return (
    <>
      <section class="bg-gray-200">
        {error && <Navigate to={"/admin/manage-user"} replace />}
        <div class="container mx-auto p-5">
          <h1 class="m-5 text-3xl font-light text-center">
            Account Information
          </h1>
          {/* <!-- Customer --> */}
          {user && user.role === "User" && <CustomerCard user={user} userImage={userImage} categorizedOrder={categorizedOrder} orders={orders} />}
          {/* <!-- Vendor --> */}
          {user && user.role === "Vendor" && <VendorCard user={user} userImage={userImage} categorizedOrder={categorizedOrder} orders={orders} />}
          {/* <!-- Shipper --> */}
          {user && user.role === "Shipper" && <ShipperCard user={user} userImage={userImage} categorizedOrder={categorizedOrder} />}
          {/* Report Section */}
          <ReportInfo />
        </div>
      </section>
    </>
  );
}
