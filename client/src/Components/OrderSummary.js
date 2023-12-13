import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { CartContext } from "../Context/CartContext";

export default function OrderSummary({ checkoutInfo, price, products }) {
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const { cart, setCart } = useContext(CartContext);
  const [shippingFee, setShippingFee] = useState(5); // Default to standard delivery
  const date = new Date(new Date().setDate(new Date().getDate() + 7));
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = days[date.getDay()];


  const notify = useCallback(() => {
    if (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        pauseOnHover: false,
        theme: "light",
      });
    }

    if (msg) {
      toast.success(msg, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        pauseOnHover: false,
        theme: "light",
      });
    }
  }, [error, msg]);

  useEffect(() => {
    if (error || msg) {
      notify();
    }
  }, [error, msg, notify]);

  const postData = async () => {
    try {
      if (!products) {
        setError("There are no products to checkout");
      }

      if (cart.products.length === 0) {
        setError("Your cart is empty");
        return;
      }
      if (!(checkoutInfo["phoneNumber"] && checkoutInfo["city"] && checkoutInfo["district"] && checkoutInfo["ward"] && checkoutInfo["streetAddress"])) {
        setError("The field is empty");
        setMsg();
        return;
      }
      const res = await axios.post("http://localhost:4000/checkout", { checkoutInfo: checkoutInfo, products: products }, { withCredentials: true });
      setMsg(res.data.message);
      setCart(res.data.cart);
      localStorage.setItem('products', JSON.stringify([]));
      setError("");
    } catch (er) {
      setError(er);
      setMsg("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error) {
      notify();
    }
    postData();
  };

  return (
    <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 mb-2">
      <ToastContainer
        position="top-center"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <div class="container mb-3">
        <div class="text-3xl font-semibold my-3">Order Summary</div>
        <div class="flex items-center justify-between">
          <span class="text-lg text-gray-900">Items:</span>
          <span class="text-lg text-gray-900">{(products) ? products.length : 0}</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-lg text-gray-900">Subtotal:</span>
          <span class="text-lg text-gray-900">${price}</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-lg text-gray-900">Shipping fee:</span>
          <span class="text-lg text-gray-900">${shippingFee}</span>
        </div>
        <div class="border p-3 rounded-lg my-3">
          <div class="flex items-center mb-4">
            <input
              id="standardDelivery"
              type="radio"
              value=""
              name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              onClick={() => setShippingFee(5)}
              checked={shippingFee === 5}
            />
            <div class="ms-2 text-sm">
              <label for="standardDelivery" class="font-medium text-gray-900">
                Standard
              </label>
              <p
                id="helper-radio-text"
                class="text-xs font-normal text-gray-500"
              >
                {dayOfWeek}, {date.getDate()}/{date.getMonth() + 1}
              </p>
            </div>
          </div>

          <div class="flex items-center">
            <input
              id="fastDelivery"
              type="radio"
              value=""
              name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              onClick={() => setShippingFee(20)}
              checked={shippingFee === 20}
            />
            <div class="ms-2 text-sm">
              <label for="fastDelivery" class="font-medium text-gray-900">
                Fastest Delivery
              </label>
              <p
                id="helper-radio-text"
                class="text-xs font-normal text-gray-500"
              >
                Today or Tomorrow
              </p>
            </div>
          </div>
        </div>

        <hr class="h-px my-5 border-0 bg-gray-400" />
        <div class="flex items-center justify-between">
          <span class="text-xl font-semibold text-[#E61E2A]">Order total:</span>
          <span class="text-xl font-semibold text-[#E61E2A]">
            ${price + shippingFee}
          </span>
        </div>

        <div class="my-5">
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-[#222160] px-3 py-1.5 text-lg font-medium leading-6 text-white shadow-sm hover:bg-[#000053] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#000053]"
            onClick={handleSubmit}
          >
            Place Your Order
          </button>
        </div>
      </div>
    </div>
  );
}
