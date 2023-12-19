import "../../css/mangeorder.css";
import ReportInfo from "../../Components/ReportInfo";
import CustomerCard from "../../Components/ProfileCard/CustomerCard";
import VendorCard from "../../Components/ProfileCard/VendorCard";
import ShipperCard from "../../Components/ProfileCard/ShipperCard";
import { Navigate, useParams } from "react-router-dom";
import { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../Context/UserContext";

export default function ReportInfoPage() {
  const params = useParams()
  const { user, setUser } = useContext(UserContext)
  const [userInfo, setUserInfo] = useState()
  const [orders, setOrders] = useState([])
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get(`http://localhost:4000/admin/${params.id}/report`, { withCredentials: true });
      setUserInfo(res.data.user);
      setOrders(res.data.orders)
      setIsLoading(false)
    } catch (error) {
      setError(error);
      setIsLoading(false)
    }
  }, [params])

  const fetchUser = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:4000/login/success", { withCredentials: true });
      setUser(res.data.user);
      setIsLoading(false)
    } catch (er) {
      setError(er)
      setIsLoading(false)
    }
  }, [setUser])

  useEffect(() => {
    fetchData()
    fetchUser()
  }, [fetchData, fetchUser])


  if (isLoading) {
    return <div>....is loading</div>
  }

  return (
    <>
      <section class="bg-gray-200 w-5/6 md:w-full">
        {user && user.role === "User" && <Navigate to={"/"} replace />}
        {user && user.role === "Vendor" && <Navigate to={"/dashboard"} replace />}
        {error && <Navigate to={"/admin/manage-user"} replace />}
        <div class="md:container mx-auto p-5">
          <h1 class="m-5 text-3xl font-light text-center">
            Account Information
          </h1>
          {/* <!-- Customer --> */}
          {userInfo && userInfo.role === "User" && <CustomerCard user={userInfo} orders={orders} />}
          {/* <!-- Vendor --> */}
          {userInfo && userInfo.role === "Vendor" && <VendorCard user={userInfo} orders={orders} />}
          {/* <!-- Shipper --> */}
          {/* {userInfo && userInfo.role === "Shipper" && <ShipperCard user={userInfo}  />} */}
          {/* Report Section */}
          <ReportInfo />
        </div>
      </section>
    </>
  );
}
