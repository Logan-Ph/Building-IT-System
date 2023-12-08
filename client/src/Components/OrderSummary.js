import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function OrderSummary() {

   
    const OrderSummaryPage = ({ match }) => {
      const [order, setOrder] = useState(null);
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const fetchOrderDetails = async () => {
          try {
            const backendUrl = 'http://localhost:3001'; 
            const orderId = match.params.orderId; 
    
            const response = await axios.get(`${backendUrl}/order/${orderId}`);
    
            // Handle the response as needed
            if (response.data.success) {
              setOrder(response.data.order);
            } else {
              console.error('Error fetching order details:', response.data.error);
              // Handle error, show a message to the user, etc.
            }
          } catch (error) {
            console.error('Error fetching order details:', error);
            // Handle error, show a message to the user, etc.
          } finally {
            setLoading(false);
          }
        };
    
        fetchOrderDetails();
      }, [match.params.orderId]);
    
      if (loading) {
        return <p>Loading...</p>;
      }
    
      if (!order) {
        return <p>Error loading order details</p>;
      }









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
                >
                    Place Your Order
                </button>
            </div>
        </div>
    </div>)
}