import BarChart from "../../Components/BarChart";
import Insight from "../../Components/Insight";
import ToDoList from "../../Components/ToDoList";
import { Settings, LayoutDashboard, LineChart, ChevronDown } from "lucide-react";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import LogInPage from "../User/LogInPage";



export default function DashboardPage() {
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true)

  const fetchUser = async () => {
    try {
      const res = await axios.get("http://localhost:4000/login/success", { withCredentials: true })
      setUser(res.data.user);
      setIsLoading(false)
    }
    catch (er) {
      setError(er)
    }
  }

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:4000/dashboard", { withCredentials: true })
      console.log(res.data);
    }
    catch (er) {
      console.log(er);
    }
  }

  useEffect(() => {
    fetchUser();
    fetchData();
  }, [])

  if (error) {
    return <Navigate to={'/login'} />
  }

  if (isLoading) {
    return <LogInPage />
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />
        <div class=" bg-white h-auto max-w-8xl md:w-2/3 w-3/4 mx-auto md:mr-32 text-slate-300 relative py-20 ">
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
          <ToDoList />
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
