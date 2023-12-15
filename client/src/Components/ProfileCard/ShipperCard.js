import { Tabs } from "flowbite-react";

export default function ShipperCard({ user, categorizedOrder }) {
  return (
    <>
      <div class="p-6 space-y-6 bg-white rounded-lg shadow my-5">
        <div class="flex items-center gap-4 mt-4">
          <img src={(user.userImage) ? `data:image/jpeg;base64,${user.userImage}` : require("../../Components/images/defaultUserImage.png")} className="w-16 aspect-square object-cover rounded" alt="" />
          <div>
            <h2 class="text-2xl font-semibold mb-2">{user.name}</h2>
            <div class="text-lg text-gray-500">{user.email}</div>
            <div class="text-lg text-gray-500">{user.phoneNumber}</div>
            <div class="text-lg text-gray-500 mb-1">Distribution Hub: {user.distributionHub}</div>
            <span class="bg-[#000054] text-white text-sm font-medium me-2 px-2.5 py-1 rounded-full">
              {" "}
              <i class="fa-solid fa-truck"></i> Shipper
            </span>
          </div>
        </div>
        <div class="text-lg mt-3 text-black font-medium">Address</div>
        <div class="my-2">
          <div class="text-lg text-gray-500 border-t border-gray-200 py-5 px-3">
            <div class="text-lg text-gray-500">{user.address}</div>
          </div>
        </div>
        <div class="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 pb-4">
          <div class="text-lg mt-3 text-black font-medium">Orders</div>
        </div>
        <Tabs aria-label="Tabs with icons" style="underline">
          <Tabs.Item active title="All">
            {/* <AllTableComponent /> */}
          </Tabs.Item>
          <Tabs.Item title="Unpaid">
            {/* <UnpaidTableComponent /> */}
          </Tabs.Item>
          <Tabs.Item title="To Ship">
            {/* <UnpaidTableComponent /> */}
          </Tabs.Item>
          <Tabs.Item title="Shipping">
            {/* <UnpaidTableComponent /> */}
          </Tabs.Item>
          <Tabs.Item title="Completed">
            {/* <UnpaidTableComponent /> */}
          </Tabs.Item>
          <Tabs.Item title="Failed Delivery">
            <div className="border border-gray my-1 py-32">
              <div className="flex flex-col justify-center items-center">
                <div className="w-[100px] h-[80px]">
                  <img
                    src={require("../../Components/images/noorder.png")}
                    alt="No Order"
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
