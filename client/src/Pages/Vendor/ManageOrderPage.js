import '../../css/mangeorder.css'
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Tabs } from 'flowbite-react';
import UnpaidTableComponent from '../../Components/VMOUnpaidTableComponent';
import AllTableComponent from '../../Components/VMOAllTableComponent';
import { UserContext } from '../../Context/UserContext';
import axios from 'axios';

export default function ManageOrderPage() {
    const { user } = useContext(UserContext)
    const [orderId, setOrderId] = useState("")
    const [order, setOrder] = useState()
    const [error, setError] = useState()

    const postData = async () => {
        try {
            const res = await axios.post('/get-order', { orderId: orderId }, { withCredentials: true })
            setOrder(res.data.order)
        } catch (error) {

        }
    }

    const getData = async () => {
        try {
            
        } catch (error) {

        }
    }

    return <>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-gray-100 mb-10 pb-5">
            <div className="flex items-center py-10">
                <div className="flex flex-row items-center">
                    <input type="text" name="search" placeholder="Search orders here.... "
                        className="rounded-md w-full border border-slate-400 pl-4 pr-20 py-2 text-md hover:border-black" onChange={(e) => setOrderId(e.target.value)} />
                </div>
                <div className='flex items-center ml-2'>
                    <button className="bg-[#E61E2A] hover:bg-[#e61e2bc3] text-white font-bold py-2 px-4 md:px-2 md:py-2 border border-[#E61E2A] rounded-lg">
                        Search
                    </button>
                    <button className="bg-transparent hover:bg-[#E61E2A] text-[#E61E2A] font-semibold hover:text-white py-2 px-4 border border-[#E61E2A] hover:border-transparent rounded-lg ml-2">
                        Reset
                    </button>
                </div>
            </div>

            <div>
                <Component />
            </div>
        </main>
    </>
}

function Component() {
    return (
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
                <div className='border border-gray my-1 py-32'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='w-[100px] h-[80px]'>
                            <img src={require("../../Components/images/noorder.png")}
                                alt="No Order image" className='w-full h-full' />
                        </div>
                        <p className="capitalize text-md text-gray-900 font-light my-2">no orders found</p>
                    </div>
                </div>
            </Tabs.Item>
        </Tabs>
    )
}







