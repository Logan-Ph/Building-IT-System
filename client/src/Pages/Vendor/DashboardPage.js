import BarChart from "../../Components/BarChart";
import Insight from "../../Components/Insight";
import ToDoList from "../../Components/ToDoList";
import { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { UserImageContext } from "../../Context/UserImageContext";



export default function DashboardPage() {
  const { user, setUser } = useContext(UserContext)
  const { setUserImage } = useContext(UserImageContext)
  const [ordersByStatus, setOrdersByStatus] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState();

  const fetchUser = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:4000/login/success", { withCredentials: true })
      setUser(res.data.user);
      setUserImage(res.data.userImage);
      setIsLoading(false)
    }
    catch (er) {
      setIsLoading(false)
      setError(er)
    }
  }, [setUser, setUserImage])

  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:4000/dashboard", { withCredentials: true })
      setOrdersByStatus(res.data.ordersByStatus);
    }
    catch (er) {
      console.log(er);
    }
  }, [])

  useEffect(() => {
    fetchUser();
    fetchData();
  }, [fetchUser, fetchData])

  if (isLoading) {
    return <div>....is loading</div>
  }

  return (
    <>
      {user && user.role === "User" && <Navigate to={'/'} replace />}
      {user && user.role === "Admin" && <Navigate to={'/admin/manage-user'} replace />}
      {error && <Navigate to={'/login'} />}
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />
      <div class=" bg-white h-auto max-w-8xl md:w-2/3 w-3/4 mx-auto md:mr-32  relative py-20 ">
        <div
          id="content"
          class="bg-slate-200 col-span-9 rounded-lg p-6 mx-auto px-auto mb-12 "
        >
          <h1 class="font-bold  pl-5 pt-4 uppercase text-black lg:md:text-2xl text-lg">
            To Do List
          </h1>
          <h1 class="font-medium  lg:md:pt-1 pl-5 text-gray-500 text-xs lg:md:text-base mb-3">
            Things your business need to deal with
          </h1>
          <ToDoList ordersByStatus={ordersByStatus} />
        </div>
        <div class="">
          <div
            id="content"
            class="bg-slate-200 col-span-9 rounded-lg p-6 mx-auto px-auto"
          >
            <h1 class="font-bold  pl-5 pt-4 uppercase text-black lg:md:text-2xl text-lg">
              Business Insight
            </h1>
            <h1 class="font-medium  lg:md:pt-1 pl-5 text-gray-500 text-xs lg:md:text-base mb-3">
              Critical business priorities encompass operational efficiency, market dynamics, and customer engagement
            </h1>

            <Insight />
            <div className="mt-4">
              <h1 class="font-bold  pl-5 py-4 uppercase text-black lg:md:text-2xl text-lg">
                Last Month Incomes
              </h1>
              <BarChart />
            </div>
            <div id="last-users"></div>
          </div>
        </div>
      </div>
    </>
  );
}
