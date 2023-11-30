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



      <div class="w-2/3">
    <div class="relative right-0">
      <ul
        class="relative flex flex-wrap p-1 list-none rounded-xl bg-blue-gray-50/60"
        data-tabs="tabs"
        role="list"
      >
        <li class="z-30 flex-auto text-center">
          <a
            class="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
            data-tab-target=""
            active=""
            role="tab"
            aria-selected="true"
            aria-controls="app"
          >
            <span class="ml-1">App</span>
          </a>
        </li>
        <li class="z-30 flex-auto text-center">
          <a
            class="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
            data-tab-target=""
            role="tab"
            aria-selected="false"
            aria-controls="message"
          >
            <span class="ml-1">Messages</span>
          </a>
        </li>
        <li class="z-30 flex-auto text-center">
          <a
            class="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
            data-tab-target=""
            role="tab"
            aria-selected="false"
            aria-controls="settings"
          >
            <span class="ml-1">Settings</span>
          </a>
        </li>
      </ul>
      <div data-tab-content="" class="p-5">
        <div class="block opacity-100" id="app" role="tabpanel">
          <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
            Because it's about motivating the doers. Because I'm here to follow
            my dreams and inspire other people to follow their dreams, too.
          </p>
        </div>
        <div class="hidden opacity-0" id="message" role="tabpanel">
          <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
            The reading of all good books is like a conversation with the finest
            minds of past centuries.
          </p>
        </div>
        <div class="hidden opacity-0" id="settings" role="tabpanel">
          <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
            Comparing yourself to others is the thief of joy.
          </p>
        </div>
      </div>
    </div>
  </div>
      
    </>
  );
}
