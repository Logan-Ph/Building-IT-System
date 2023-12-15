import "../../css/mangeorder.css";
import { Tabs } from "flowbite-react";
import UnpaidTableComponent from "../../Components/VMOUnpaidTableComponent";
import AllTableComponent from "../../Components/VMOAllTableComponent";

export default function CustomerCard({ user, userImage, categorizedOrder, orders }) {
  return (
    <>
      <div class="p-6 space-y-6 bg-white rounded-lg shadow my-5">
        <div class="flex items-center gap-4 mt-4">
          <img src={(userImage) ? `data:image/jpeg;base64,${userImage}` : require("../../Components/images/defaultUserImage.png")} className="w-16 aspect-square object-cover rounded" alt="" />
          <div>
            <h2 class="text-2xl font-semibold mb-2">{user.name}</h2>
            <div class="text-lg text-gray-500">{user.email}</div>
            <div class="text-lg text-gray-500 mb-1">{user.phoneNumber}</div>
            <span class="bg-[#000054] text-white text-sm font-medium me-2 px-2.5 py-1 rounded-full">
              {" "}
              <i class="fa-regular fa-user"></i> Customer
            </span>
          </div>
        </div>
        <div class="text-lg mt-3 text-black font-medium">Adresses</div>
        <div class="my-3">
          <div class="text-base text-gray-500 border-t border-gray-200 py-5 px-3">
            <div class="text-gray-500 mb-2">
              <span class="border-r border-gray-300 pr-3 text-black">
                {user.name}
              </span>
              <span class="pl-2">{user.phoneNumber}</span>
            </div>
            <div class="text-gray-500">Street Adress</div>
            <div class="text-gray-500">{user.address}</div>
            <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-yellow-300">
              Default
            </span>
          </div>
          {/* <!-- Second address --> */}
        </div>
        <div class="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 pb-4">
          <div class="text-lg mt-3 text-black font-medium">
            Purchases History
          </div>
        </div>
        <Tabs aria-label="Tabs with icons" style="underline">
          <Tabs.Item active title="All">
            {/* <AllTableComponent /> */}
            {orders.length === 0 && <div className="overflow-x-auto">
              <div className='border border-gray my-1 py-32'>
                <div className='flex flex-col justify-center items-center'>
                  <div className='w-[100px] h-[80px]'>
                    <img src={require("../../Components/images/noorder.png")}
                      alt="No Order" className='w-full h-full' />
                  </div>
                  <p className="capitalize text-md text-gray-900 font-light my-2">no orders found</p>
                </div>
              </div>
            </div>}
            {orders.length !== 0 && <AllTableComponent orders={orders} />}
          </Tabs.Item>
          <Tabs.Item title="Unpaid">
            {!categorizedOrder["Unpaid"] && <div className="overflow-x-auto">
              <div className='border border-gray my-1 py-32'>
                <div className='flex flex-col justify-center items-center'>
                  <div className='w-[100px] h-[80px]'>
                    <img src={require("../../Components/images/noorder.png")}
                      alt="No Order" className='w-full h-full' />
                  </div>
                  <p className="capitalize text-md text-gray-900 font-light my-2">no orders found</p>
                </div>
              </div>
            </div>}
            {categorizedOrder["Unpaid"] && <UnpaidTableComponent orders={categorizedOrder["Unpaid"]} />}
          </Tabs.Item>
          <Tabs.Item title="To Ship">
            {!categorizedOrder["To Ship"] && <div className="overflow-x-auto">
              <div className='border border-gray my-1 py-32'>
                <div className='flex flex-col justify-center items-center'>
                  <div className='w-[100px] h-[80px]'>
                    <img src={require("../../Components/images/noorder.png")}
                      alt="No Order" className='w-full h-full' />
                  </div>
                  <p className="capitalize text-md text-gray-900 font-light my-2">no orders found</p>
                </div>
              </div>
            </div>}
            {categorizedOrder["To Ship"] && <UnpaidTableComponent orders={categorizedOrder["To Ship"]} />}
          </Tabs.Item>
          <Tabs.Item title="Shipping">
            {!categorizedOrder["Shipping"] && <div className="overflow-x-auto">
              <div className='border border-gray my-1 py-32'>
                <div className='flex flex-col justify-center items-center'>
                  <div className='w-[100px] h-[80px]'>
                    <img src={require("../../Components/images/noorder.png")}
                      alt="No Order" className='w-full h-full' />
                  </div>
                  <p className="capitalize text-md text-gray-900 font-light my-2">no orders found</p>
                </div>
              </div>
            </div>}
            {categorizedOrder["Shipping"] && <UnpaidTableComponent orders={categorizedOrder["Shipping"]} />}
          </Tabs.Item>
          <Tabs.Item title="Completed">
            {!categorizedOrder["Completed"] && <div className="overflow-x-auto">
              <div className='border border-gray my-1 py-32'>
                <div className='flex flex-col justify-center items-center'>
                  <div className='w-[100px] h-[80px]'>
                    <img src={require("../../Components/images/noorder.png")}
                      alt="No Order" className='w-full h-full' />
                  </div>
                  <p className="capitalize text-md text-gray-900 font-light my-2">no orders found</p>
                </div>
              </div>
            </div>}
            {categorizedOrder["Completed"] && <UnpaidTableComponent orders={categorizedOrder["Completed"]} />}
          </Tabs.Item>
          <Tabs.Item title="Failed Delivery">
            <div className="border border-gray my-1 py-32">
              <div className="flex flex-col justify-center items-center">
                <div className="w-[100px] h-[80px]">
                  <img
                    src={require("../../Components/images/noorder.png")}
                    alt="No Orders"
                    className="w-full h-full"
                  />
                </div>
                <p className="capitalize text-md text-gray-900 font-light my-2">
                  no orders found
                </p>
              </div>
            </div>
          </Tabs.Item>
        </Tabs>
      </div>
    </>
  );
}
