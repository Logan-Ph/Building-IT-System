import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function OrderSummary() {
    const [msg, setMsg] = useState('')
    const [error, setError] = useState('')

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

    const postData = async () => {
        try {
            const data = {}
            const res = await axios.post("http://localhost:4000/checkout", data, { withCredentials: true });
            setMsg(res.data.msg);
            setError("")
        } catch (er) {
            setError(er)
            setMsg();
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postData();
    }


    useEffect(() => {
        if (error || msg) {
            notify();
        }
    }, [error, msg, notify]);
    return (<div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 mb-2">
        <div class="container mb-3">
            <div class="text-3xl font-semibold my-3">Order Summary</div>
            <div class="flex items-center justify-between">
                <span class="text-lg text-gray-900">Items:</span>
                <span class="text-lg text-gray-900">5</span>
            </div>
            <div class="flex items-center justify-between">
                <span class="text-lg text-gray-900">Subtotal:</span>
                <span class="text-lg text-gray-900">$199</span>
            </div>
            <div class="flex items-center justify-between">
                <span class="text-lg text-gray-900">Shipping fee:</span>
                <span class="text-lg text-gray-900">$4</span>
            </div>

            <div class="border p-3 rounded-lg my-3">
                <div class="flex mb-4">
                    <input
                        checked
                        id="standardDelivery"
                        type="radio"
                        value=""
                        name="default-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <div class="ms-2 text-sm">
                        <label
                            for="standardDelivery"
                            class="font-medium text-gray-900"
                        >
                            Standard
                        </label>
                        <p
                            id="helper-radio-text"
                            class="text-xs font-normal text-gray-500"
                        >
                            Monday, Nov.27
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
                    />
                    <div class="ms-2 text-sm">
                        <label
                            for="fastDelivery"
                            class="font-medium text-gray-900"
                        >
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
                <span class="text-xl font-semibold text-[#E61E2A]">
                    Order total:
                </span>
                <span class="text-xl font-semibold text-[#E61E2A]">
                    $190
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
    </div>)
}