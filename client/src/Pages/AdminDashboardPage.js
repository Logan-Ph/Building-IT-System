import Sidebar from "../Components/Sidebar";
import { SidebarItem } from "../Components/Sidebar";
import BarChart from "../Components/BarChart";
import AdminInsight from "../Components/AdminInsight";
import ToDoList from "../Components/ToDoList";
import { Settings, LayoutDashboard, LineChart, ChevronDown } from "lucide-react";


export default function DashboardPage() {
  return (
    <>
      {/* <div class="sm:xs:flex sm:xs:flex-col items-center w-16 h-full  text-gray-700 bg-gray-200 rounded lg:md:hidden">

  <div class="flex flex-col items-center mt-3 border-t border-gray-300">
    <a class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300" href="#">
      <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    </a>
    <a class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300" href="#">
      <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </a>
    
    <a class="flex items-center justify-center w-12 h-12 mt-2 bg-gray-300 rounded" href="#">
      <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </a>
    <a class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300" href="#">
      <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>
    </a>
  </div>
  <div class="flex flex-col items-center mt-2 border-t border-gray-300">
    <a class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300" href="#">
      <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    </a>
    <a class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300" href="#">
      <svg class="w-6 h-6 stroke-current"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    </a>
    <a class="relative flex items-center justify-center w-12 h-12 mt-2 hover:bg-gray-300" href="#">
      <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
      <span class="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
    </a>
  </div>
  <a class="flex items-center justify-center w-16 h-16 mt-auto bg-gray-200 hover:bg-gray-300" href="#">
    <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </a>
</div>

<div class="lg:md:flex lg:md:flex-col items-center w-[400px] h-screen mt-4  text-gray-700 bg-gray-200 rounded sm:hidden xs:hidden">
  
  <div class="w-full px-2">
    <div class="flex flex-col items-center w-full mt-3 border-t border-gray-300">
      <a class="flex items-center  w-full h-12 px-10 mt-2 rounded hover:bg-gray-300" href="#">
        <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span class="ml-2 text-lg font-medium">Dasboard</span>
      </a>
      
      <a class="flex items-center w-full h-12 px-10 mt-2 rounded hover:bg-gray-300" href="#">
        <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span class="ml-2 text-lg  font-medium">Search</span>
      </a>
      <a class="flex items-center w-full h-12 px-10 mt-2 bg-gray-300 rounded" href="#">
        <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span class="ml-2 text-lg  font-medium">Insights</span>
      </a>
      <a class="flex items-center w-full h-12 px-10 mt-2 rounded hover:bg-gray-300" href="#">
        <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
        </svg>
        <span class="ml-2 text-lg  font-medium">Docs</span>
      </a>
    </div>
    <div class="flex flex-col items-center w-full mt-2 border-t border-gray-300">
      <a class="flex items-center w-full h-12 px-10 mt-2 rounded hover:bg-gray-300" href="#">
        <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span class="ml-2 text-lg  font-medium">Products</span>
      </a>
      <a class="flex items-center w-full h-12 px-10 mt-2 rounded hover:bg-gray-300" href="#">
        <svg class="w-6 h-6 stroke-current"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
        <span class="ml-2 text-lg  font-medium">Settings</span>
      </a>
      
    </div>
  </div>
  <a class="flex items-center justify-center w-full h-16 mt-auto bg-gray-200 hover:bg-gray-300" href="#">
    <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span class="ml-2 text-lg  font-medium">Account</span>
  </a>
  
</div> */}

      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />
      <div className="flex  ">


        <Sidebar>
   




       
            
              
        <SidebarItem icon={<Settings size={20} />} text="Product"
            subitems={[
              { text: "My Products" },
              { text: "Add Product", href: "https://www.google.com/"},
              { text: "Delete Product" },
              // Add more subitems as needed
            ]} />
              
           
         

         
            <SidebarItem icon={<Settings size={20} />} text="Order"
            subitems={[
              { text: "My Orders", href: "https://www.google.com/"},
              { text: "Ship Orders" },
              // Add more subitems as needed
            ]} />
         

        
         <SidebarItem icon={<Settings size={20} />} text="Dashboard"
            subitems={[
              { text: "Subitem 1", href: "https://www.google.com/"},
              { text: "Subitem 2" },
              // Add more subitems as needed
            ]} />
            

         
            <SidebarItem icon={<Settings size={20} />} text="Dashboard"
            subitems={[
              { text: "Subitem 1", href: "https://www.google.com/"},
              { text: "Subitem 2" },
              // Add more subitems as needed
            ]} />
          

          <SidebarItem icon={<Settings size={20} />} text="Dashboard"
            subitems={[
              { text: "Subitem 1", href: "https://www.google.com/"},
              { text: "Subitem 2" },
              // Add more subitems as needed
            ]} />
        </Sidebar>

        <div class=" bg-white h-auto lg:w-5/6 md:w-2/3 w-3/4 mx-auto lg:px-20 md:mr-32 text-slate-300 relative py-20 ">
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




   
<div class="p-8 flex justify-center items-center min-h-screen bg-white">
<div class="w-full md:w-1/2 relative grid grid-cols-1 md:grid-cols-3 border border-gray-300 bg-gray-100 rounded-lg">
    <div
        class="rounded-l-lg p-4 bg-gray-200 flex flex-col justify-center items-center border-0 border-r border-gray-300 ">
        <label class="cursor-pointer hover:opacity-80 inline-flex items-center shadow-md my-2 px-2 py-2 bg-gray-900 text-gray-50 border border-transparent
        rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none 
       focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150" for="restaurantImage">
           
    Select image
            <input id="restaurantImage" class="text-sm cursor-pointer w-36 hidden" type="file"/>
        </label>
       <button class = 'inline-flex items-center shadow-md my-2 px-2 py-2 bg-gray-900 text-gray-50 border border-transparent rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-nonefocus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150'>
    remove image </button>
    </div>
    <div 
        class="relative order-first md:order-last h-28 md:h-auto flex justify-center items-center border border-dashed border-gray-400 col-span-2 m-2 rounded-lg bg-no-repeat bg-center bg-origin-padding bg-cover">
            <span class="text-gray-400 opacity-75">
                <svg class="w-14 h-14"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            </span>
    </div>
</div>
</div>
      
    </>
  );
}
