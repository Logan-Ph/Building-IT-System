import Sidebar from "../Components/Sidebar";
import BarChart from '../Components/BarChart';

export default function DashboardPage() {
  return (
    <>
       
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />
      <div className="flex ">
        <Sidebar />

        <div class=" bg-white w-full px-20  text-slate-300 relative py-4">
          <div class="">
            <div id="content" class="bg-slate-200 col-span-9 rounded-lg p-6 mx-auto px-auto"
            >
              <div id="24h">
                <h1 class="font-bold  p-4 uppercase text-black text-2xl">Business Insight</h1>
                <div class="flex flex-wrap ">
                  <div class="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5 mb-4">
                    <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 shadow-lg">
                      <div class="flex-auto p-4">
                        <div class="flex flex-wrap">
                          <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 class="text-gray-400 uppercase font-bold text-xs">
                              {" "}
                              Total Sales
                            </h5>
                            <span class="font-semibold text-xl text-gray-700">
                              334,100
                            </span>
                          </div>
                          <div class="relative w-auto pl-4 flex-initial">
                            <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-red-500">
                              <i class="fas fa-chart-bar"></i>
                            </div>
                          </div>
                        </div>
                        <p class="text-sm text-gray-400 mt-4">
                          <span class="text-emerald-500 mr-2">
                            <i class="fas fa-arrow-up"></i> 2,99%{" "}
                          </span>
                          <span class="whitespace-nowrap">
                            {" "}
                            Since last month{" "}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class=" mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
                    <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-4 xl:mb-0 shadow-lg">
                      <div class="flex-auto p-4">
                        <div class="flex flex-wrap">
                          <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 class="text-gray-400 uppercase font-bold text-xs">
                              Total Income
                            </h5>
                            <span class="font-semibold text-xl text-gray-700">
                              2,999
                            </span>
                          </div>
                          <div class="relative w-auto pl-4 flex-initial">
                            <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-pink-500">
                              <i class="fas fa-chart-pie"></i>
                            </div>
                          </div>
                        </div>
                        <p class="text-sm text-gray-400 mt-4">
                          <span class="text-red-500 mr-2">
                            <i class="fas fa-arrow-down"></i> 4,01%
                          </span>
                          <span class="whitespace-nowrap">
                            {" "}
                            Since last week{" "}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
                    <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                      <div class="flex-auto p-4">
                        <div class="flex flex-wrap">
                          <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 class="text-gray-400 uppercase font-bold text-xs">
                              Sales
                            </h5>
                            <span class="font-semibold text-xl text-gray-700">
                              901
                            </span>
                          </div>
                          <div class="relative w-auto pl-4 flex-initial">
                            <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-red-500">
                              <i class="fas fa-users"></i>
                            </div>
                          </div>
                        </div>
                        <p class="text-sm text-gray-400 mt-4">
                          <span class="text-red-500 mr-2">
                            <i class="fas fa-arrow-down"></i> 1,25%{" "}
                          </span>
                          <span class="whitespace-nowrap">
                            {" "}
                            Since yesterday{" "}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
                    <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                      <div class="flex-auto p-4">
                        <div class="flex flex-wrap">
                          <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 class="text-gray-400 uppercase font-bold text-xs">
                              Performance
                            </h5>
                            <span class="font-semibold text-xl text-gray-700">
                              51.02%{" "}
                            </span>
                          </div>
                          <div class="relative w-auto pl-4 flex-initial">
                            <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-emerald-500">
                              <i class="fas fa-percent"></i>
                            </div>
                          </div>
                        </div>
                        <p class="text-sm text-gray-400 mt-4">
                          <span class="text-emerald-500 mr-2">
                            <i class="fas fa-arrow-up"></i> 12%{" "}
                          </span>
                          <span class="whitespace-nowrap">
                            {" "}
                            Since last mounth{" "}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="last-incomes">
                <h1 class="font-bold text-xl  text-black uppercase p-4">Last Month Incomes</h1>
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
