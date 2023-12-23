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
  const { user } = useContext(UserContext)
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

  useEffect(() => {
    fetchData()
  }, [fetchData])


  if (isLoading) {
    return <div>....is loading</div>
  }

  return (
    <>
      <section class="bg-gray-200 w-5/6 md:w-full">
        {user === null && <Navigate to={"/"} replace />}
        {error && <Navigate to={"/"} replace />}
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
