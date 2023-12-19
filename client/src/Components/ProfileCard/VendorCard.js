import { useState } from "react";
import "../../css/mangeorder.css";
import OrdersInfo from "../OrdersInfo";

export default function VendorCard({ user, orders }) {
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <>
      <div class="p-6 space-y-6 bg-white rounded-lg shadow my-5">
        <div class="flex items-center gap-4 mt-4">
          {/* <img src={(user.img) ? `data:image/jpeg;base64,${user.img}` : require("../../Components/images/defaultUserImage.png")} className="w-16 aspect-square object-cover rounded" alt="" /> */}
          <div>
            <h2 class="text-2xl font-semibold mb-2">{user.businessName}</h2>
            <div class="text-lg text-gray-500">{user.email}</div>
            <div class="text-lg text-gray-500 mb-1">{user.phoneNumber}</div>
            <span class="bg-[#000054] text-white text-sm font-medium me-2 px-2.5 py-1 rounded-full">
              {" "}
              <i class="fa-solid fa-shop"></i> Vendor
            </span>
          </div>
        </div>
        <div class="text-lg mt-3 text-black font-medium">Business Address</div>
        <div class="my-2">
          <div class="text-lg text-gray-500 border-t border-gray-200 py-5 px-3">
            <div class="text-lg text-gray-500">{user.address}</div>
          </div>
        </div>
        <div class="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 pb-4">
          <div class="text-lg mt-3 text-black font-medium">Orders</div>
          <div className="flex items-center py-10">
            <div className="flex flex-row items-center">
              <input type="text" name="search" placeholder="Please enter order info here "
                className="rounded-md w-full border border-slate-400 pl-4 pr-20 py-2 text-md hover:border-black" onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
          </div>
        </div>
        <div>
          <OrdersInfo orders={orders} searchTerm={searchTerm} />
        </div>
      </div>
    </>
  );
}
