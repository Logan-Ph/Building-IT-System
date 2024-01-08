import { useState } from "react";
import "../../css/mangeorder.css";
import OrdersInfo from "../OrdersInfo";

export default function VendorCard({ user, orders }) {
  const [searchTerm, setSearchTerm] = useState("")
  const initialStatuses = {
    "Unpaid": null,
    "To Ship": null,
    "Shipping": null,
    "Completed": null,
    "Cancelled": null,
    "Failed Delivery": null
  };
  return (
    <>
      <div class="p-6 space-y-6 bg-white rounded-lg shadow my-5">
        <h1 class="m-2 text-2xl font-bold text-center xs:text-md">
          Account Information
        </h1>
        <div class="flex items-center gap-4 mt-4 flex-wrap">
          <img src={(user.img) ? `data:image/jpeg;base64,${user.img}` : require("../../Components/images/defaultUserImage.png")} className="w-16 aspect-square object-cover rounded" alt="" />
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
        <div class="text-lg mt-3 text-black font-medium">Address: <span class="text-lg font-normal">{user.address}</span></div>
       
        <div class="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 pb-4">
          <div class="text-lg mt-3 text-black font-medium">Orders</div>
          <div className="flex items-center ">
            <div className="flex flex-row items-center">
              <input type="text" name="search" placeholder="Please enter order info here "
                className="rounded-md w-full border border-slate-400 pl-4 pr-20 py-2 text-md hover:border-black" onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
          </div>
        </div>
        <div>
          <OrdersInfo orders={orders} searchTerm={searchTerm} initialStatuses={initialStatuses} filterOrders={filterOrders} />
        </div>
      </div>
    </>
  );
}

function filterOrders(orders, searchTerm) {
  const regex = new RegExp(searchTerm, 'i');
  return orders.map(order => {
    const date = new Date(order.date);
    const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
    return { ...order, date: formattedDate };
  }).filter(order => regex.test(order._id) || regex.test(order.status) || regex.test(order.userName) || regex.test(order.userId) || regex.test(order.date) || regex.test(order.contactNumber) || regex.test(order.shippingAddress));
}

