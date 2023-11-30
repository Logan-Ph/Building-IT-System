import Sidebar from "../Components/Sidebar";
import BarChart from '../Components/BarChart';
import Insight from "../Components/Insight";
import ToDoList from "../Components/ToDoList";

export default function DashboardPage() {
  return (
    <>
       
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />
      <div className="flex">
        <Sidebar />

        <div class=" bg-white h-auto w-full px-20  text-slate-300 relative py-4 ">
          <div id="content" class="bg-slate-200 col-span-9 rounded-lg p-6 mx-auto px-auto mb-12">
          <h1 class="font-bold  pl-5 pt-4 uppercase text-black text-2xl">To Do List</h1>
          <h1 class="font-medium  pt-1 pl-5 text-gray-500 text-md">Things your business need to deal with</h1>
            <ToDoList />
            </div>
          <div class="">
            <div id="content" class="bg-slate-200 col-span-9 rounded-lg p-6 mx-auto px-auto">
            <h1 class="font-bold  pl-5 pt-4 uppercase text-black text-2xl">Business Insight</h1>
            <Insight />
              <div id="last-incomes">
                <h1 class="font-bold text-xl  text-black uppercase p-5">Last Month Incomes</h1>
                <BarChart />
              </div>
              <div id="last-users">
            
             
              </div>
            </div>
          </div>
        </div>
      </div>



     
      
    </>
  );
}
