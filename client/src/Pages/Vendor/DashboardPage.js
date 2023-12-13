import BarChart from "../../Components/BarChart";
import AdminBarChart from "../../Components/AdminBarChart";

import Insight from "../../Components/Insight";
import ToDoList from "../../Components/ToDoList";
import { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

export default function DashboardPage() {
  const { user } = useContext(UserContext)
  const [ordersByStatus, setOrdersByStatus] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:4000/dashboard", { withCredentials: true })
      setOrdersByStatus(res.data.ordersByStatus);
      setIsLoading(false)
    }
    catch (er) {
      setError(er);
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData();
  }, [fetchData])

  if (user === undefined || isLoading) {
    return <div>....is loading</div>
  }

  return (
    <>
      {user && user.role === "User" && <Navigate to={'/'} replace />}
      {user && user.role === "Admin" && <Navigate to={'/admin/manage-user'} replace />}
      {error && <Navigate to={'/login'} />}
      {!user && <Navigate to={'/login'} replace />}
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />
      <div class="max-w-full mb-10 pb-5 lg:md:w-full w-5/6 overflow:hidden">
        <div
          id="content"
          class="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-gray-100 mb-10 px-4"
        >
          <h1 class="font-bold  lg:pl-5 pt-4 uppercase text-black lg:md:text-2xl text-xl">
            To Do List
          </h1>
          <h1 class="font-medium  lg:md:pt-1 lg:pl-5 text-gray-500 text-xs lg:md:text-base lg:mb-3">
            Things your business need to deal with
          </h1>
          <ToDoList ordersByStatus={ordersByStatus} />
        </div>
        <div class="">
          <div
            id="content"
            class="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-gray-100 px-4 "
          >
            <h1 class="font-bold  lg:pl-5 pt-4 uppercase text-black lg:md:text-2xl text-lg">
              Business Insight
            </h1>
            <h1 class="font-medium  lg:md:pt-1 lg:pl-5 text-gray-500 text-xs lg:md:text-base mb-3">
              Critical business priorities encompass operational efficiency, market dynamics, and customer engagement
            </h1>

            <Insight />
            <div className="mt-4">
              <h1 class="font-bold  lg:pl-5 py-4 uppercase text-black lg:md:text-2xl text-lg">
                Last Month Incomes
              </h1>

            </div>
            <div className="relative">
              <AdminBarChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
