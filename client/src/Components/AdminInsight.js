import {Store, CircleUserRound, Users, Package} from 'lucide-react';
export default function AdminInsight() {
    return (
        <>
       
  

        <div id="24h">
                
                <div class="flex flex-wrap ">
                  <div class="mt-4 w-full lg:w-6/12 xl:w-3/12 mb-4 lg:px-5">
                    <div class=" flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 shadow-lg">
                      <div class="flex-auto p-4 ">
                        <div class="flex flex-wrap">
                          <div class=" w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 class="text-gray-400 uppercase font-bold lg:md:text-sm text-xs ">
                              {" "}
                              Total Account
                            </h5>
                            <span class="font-semibold text-xl text-gray-700">
                              334,100
                            </span>
                          </div>
                          <div class=" w-auto pl-4 flex-initial">
                            <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-pink-500">
                            <CircleUserRound />
                            </div>
                          </div>
                        </div>
                        <hr class="mt-4 mb-2 w-full border-gray-300" />
                        <p class="text-sm text-gray-400 ">
                          <span class="text-lime-500 ">
                     
                          </span>
                          <span class="whitespace-nowrap">
                            {" "}
                            Since last month{" "}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class=" mt-4 w-full lg:w-6/12 xl:w-3/12 lg:px-5">
                    <div class=" flex flex-col min-w-0 break-words bg-white rounded mb-4 xl:mb-0 shadow-lg">
                      <div class="flex-auto p-4">
                        <div class="flex flex-wrap">
                          <div class=" w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 class="text-gray-400 uppercase font-bold lg:md:text-sm text-xs">
                              Total Customer
                            </h5>
                            <span class="font-semibold text-xl text-gray-700">
                              2,999
                            </span>
                          </div>
                          <div class=" w-auto pl-4 flex-initial">
                            <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-purple-700">
                            <Users />                          </div>
                          </div>
                        </div>
                        <hr class="mt-4 mb-2 w-full border-gray-300" />
                        <p class="text-sm text-gray-400">
                          <span class="text-pink-700">
                         
                          </span>
                          <span class="whitespace-nowrap">
                            {" "}
                            Since last week{" "}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="mt-4 w-full lg:w-6/12 xl:w-3/12 lg:px-5">
                    <div class=" flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                      <div class="flex-auto p-4">
                        <div class="flex flex-wrap">
                          <div class=" w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 class="text-gray-400 uppercase font-bold lg:md:text-sm text-xs">
                            Total Vendor
                            </h5>
                            <span class="font-semibold text-xl text-gray-700">
                              901
                            </span>
                          </div>
                          <div class=" w-auto pl-4 flex-initial">
                            <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-yellow-400">
                            <Store />
                            </div>
                          </div>
                        </div>
                        <hr class="mt-4 mb-2 w-full border-gray-300" />
                        <p class="text-sm text-gray-400 ">
        
                          <span class="whitespace-nowrap">
                            
                            Since yesterday
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="mt-4 w-full lg:w-6/12 xl:w-3/12 lg:px-5">
                    <div class=" flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                      <div class="flex-auto p-4">
                        <div class="flex flex-wrap">
                          <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 class="text-gray-400 uppercase font-bold lg:md:text-sm text-xs">
                            Total Product
                            </h5>
                            
                            <span class="font-semibold text-xl text-gray-700">
                              51.02%{" "}
                            </span>
                          </div>
                          <div class=" w-auto pl-4 flex-initial">
                            <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-orange-500">
                            <Package />
                            </div>
                          </div>
                        </div>
                        <hr class="mt-4 mb-2 w-full border-gray-300" />
                        <p class="text-sm text-gray-400">
                          <span class="text-emerald-500">
                            
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
              </div></>
    )
}