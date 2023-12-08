import Sidebar from "../../Components/Sidebar";
import { SidebarItem } from "../../Components/Sidebar";
import BarChart from "../../Components/BarChart";
import AdminInsight from "../../Components/AdminInsight";
import ToDoList from "../../Components/ToDoList";
import { Settings, LayoutDashboard, LineChart, ChevronDown } from "lucide-react";
import AddImageHomePage from "../../Components/AddImageHomePage";


export default function DashboardPage() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />
      <div className="flex  ">
          <div class=" bg-white h-auto max-w-8xl md:w-2/3 w-3/4 mx-auto md:mr-32  relative py-20 ">
            <div
              class="bg-slate-200 col-span-9 rounded-lg p-6 mx-auto px-auto mb-6">
              < AddImageHomePage />
            </div>
            <div class="">
              <div
                id="content"
                class="bg-slate-200 col-span-9 rounded-lg p-6 mx-auto px-auto">
                <h1 class="font-bold  pl-5 pt-4 uppercase text-black lg:md:text-2xl text-lg">
                  Business Insight
                </h1>
                <h1 class="font-medium  lg:md:pt-1 pl-5 text-gray-500 text-xs lg:md:text-base mb-3">
                  Critical business priorities encompass operational efficiency, market dynamics, and customer engagement
                </h1>
                <AdminInsight />
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
        </div>
    </>
  )
}
