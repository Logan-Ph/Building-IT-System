import "../../css/mangeorder.css";
import { Tabs } from "flowbite-react";
import UnpaidTableComponent from "../../Components/VMOUnpaidTableComponent";
import AllTableComponent from "../../Components/VMOAllTableComponent";

export default function VendorCard() {
  return (
    <>
      <div class="p-6 space-y-6 bg-white rounded-lg shadow my-5">
        <div class="flex items-center gap-4 mt-4">
          <img
            src="https://www.newsnationnow.com/wp-content/uploads/sites/108/2022/07/Cat.jpg?w=2560&amp;h=1440&amp;crop=1"
            class="w-28 h-28 object-cover rounded-full"
            alt=""
          />
          <div>
            <h2 class="text-2xl font-semibold mb-2">Business Name</h2>
            <div class="text-lg text-gray-500">_email@gmail.com</div>
            <div class="text-lg text-gray-500 mb-1">0912345678</div>
            <span class="bg-[#000054] text-white text-sm font-medium me-2 px-2.5 py-1 rounded-full">
              {" "}
              <i class="fa-solid fa-shop"></i> Vendor
            </span>
          </div>
        </div>
        <div class="text-lg mt-3 text-black font-medium">Business Address</div>
        <div class="my-2">
          <div class="text-lg text-gray-500 border-t border-gray-200 py-5 px-3">
            <div class="text-lg text-gray-500">Street Adress</div>
            <div class="text-lg text-gray-500">Ward, Districst, City</div>
          </div>
        </div>
        <div class="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 pb-4">
          <div class="text-lg mt-3 text-black font-medium">Orders</div>
          <label for="table-search" class="sr-only">
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for orders"
            />
          </div>
        </div>
        <Tabs aria-label="Tabs with icons" style="underline">
          <Tabs.Item active title="All">
            <AllTableComponent />
          </Tabs.Item>
          <Tabs.Item title="Unpaid">
            <UnpaidTableComponent />
          </Tabs.Item>
          <Tabs.Item title="To Ship">
            <UnpaidTableComponent />
          </Tabs.Item>
          <Tabs.Item title="Shipping">
            <UnpaidTableComponent />
          </Tabs.Item>
          <Tabs.Item title="Completed">
            <UnpaidTableComponent />
          </Tabs.Item>
          <Tabs.Item title="Failed Delivery">
            <div className="border border-gray my-1 py-32">
              <div className="flex flex-col justify-center items-center">
                <div className="w-[100px] h-[80px]">
                  <img
                    src={require("../../Components/images/noorder.png")}
                    alt="No Order image"
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
        <div class="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 pb-4">
          <div class="text-lg mt-3 text-black font-medium">Products</div>
          <label for="table-search" class="sr-only">
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for products"
            />
          </div>
        </div>
      </div>
    </>
  );
}
