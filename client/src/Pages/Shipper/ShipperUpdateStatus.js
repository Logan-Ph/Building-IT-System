import '../../css/mangeorder.css'
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Tabs } from 'flowbite-react';
import AcceptedTableComponent from '../../Components/ShipperAcceptedTableComponent';
import AllTableComponent from '../../Components/ShipperAllTableComponent';
import { UserContext } from '../../Context/UserContext';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';

export default function ShipperUpdateStatus() {
    const { user } = useContext(UserContext)
    const [error, setError] = useState();
    const [status, setStatus] = useState("")
    const [orderId, setOrderId] = useState("")
    const [foundOrder, setFoundOrder] = useState()
    const [orders, setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getOrders = useCallback(async () => {
        try {
            const res = await axios.get("http://localhost:4000/manage-order", { withCredentials: true })
            setOrders(res.data.orders)
            setIsLoading(false)
        }
        catch (error) {
            setError(error)
            setIsLoading(false)
        }
    }, [setOrders])

    useEffect(() => {
        getOrders();
    }, [getOrders])

    const postData = async () => {
        let statusValue;
        try {
            switch (status) {
                case 1:
                    statusValue = "Accepted";
                    break;
                case 2:
                    statusValue = "Completed";
                    break;
                default:
            }
            const res = await axios.post('http://localhost:4000/search-order', { orderId: orderId, orderStatus: statusValue }, { withCredentials: true })
            setFoundOrder(res.data.order)
        } catch (error) {
            setFoundOrder(null)
            notify(error.response.data.error)
        }
    }

    const notify = (error) => {
        toast.error(error, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            pauseOnHover: false,
            theme: "light",
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        postData()
    }

    if (user === undefined || isLoading) {
        return <div>Loading....</div>
    }

    return (
        <>
            {user && user.role === "User" && <Navigate to={'/'} replace />}
            {user && user.role === "Admin" && <Navigate to={'/admin/manage-user'} replace />}
            {(!user || error) && <Navigate to={'/login'} replace />}
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
            <div className="max-w-8xl px-4 sm:px-6 lg:px-8 bg-gray-100 mb-10 pb-5 w-full mx-auto">
                <div className="flex items-center py-10">
                    <div className="flex flex-row items-center">
                        <input type="text" name="search" placeholder="Please enter order id here " value={orderId}
                            className="rounded-md w-full border border-slate-400 pl-4 pr-20 py-2 text-md hover:border-black" onChange={(e) => setOrderId(e.target.value)} />
                    </div>
                    <div className='flex items-center ml-2'>
                        <button className="bg-[#E61E2A] hover:bg-[#e61e2bc3] text-white font-bold py-2 px-4 md:px-2 md:py-2 border border-[#E61E2A] rounded-lg" onClick={handleSubmit} >
                            Search
                        </button>
                        <button className="bg-transparent hover:bg-[#E61E2A] text-[#E61E2A] font-semibold hover:text-white py-2 px-4 border border-[#E61E2A] hover:border-transparent rounded-lg ml-2" onClick={() => { setFoundOrder(); setOrderId("") }}>
                            Reset
                        </button>
                    </div>
                </div>
                <div>
                    <Component foundOrder={foundOrder} orders={orders} setStatus={setStatus} />
                </div>
            </div>
        </>
    )
}

function Component({ foundOrder, orders, setStatus }) {
    const [categorizedOrder, setCategorizedOrder] = useState({ "All": orders })
    useEffect(() => {
        const orderStatus = orders.reduce((acc, order) => {
            if (!acc[order.status]) {
                acc[order.status] = [];
            }
            acc[order.status].push(order);
            return acc;
        }, {});
        setCategorizedOrder(prevState => ({ ...prevState, ...orderStatus }));
    }, [orders]);

    return (
        <Tabs aria-label="Tabs with icons" onActiveTabChange={(tab) => setStatus(tab)}>
            <Tabs.Item active title="All" >
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
                {orders.length !== 0 && <AllTableComponent foundOrder={foundOrder} orders={orders} />}
            </Tabs.Item>
            <Tabs.Item title="Accepted" >
                {!categorizedOrder["Accepted"] && <div className="overflow-x-auto">
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
                {categorizedOrder["Accepted"] && <AcceptedTableComponent orders={categorizedOrder["Accepted"]} foundOrder={foundOrder} />}
            </Tabs.Item>
            <Tabs.Item title="Completed" onClick={() => setStatus("Completed")}>
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
                {categorizedOrder["Completed"] && <AcceptedTableComponent orders={categorizedOrder["Completed"]} foundOrder={foundOrder} />}
            </Tabs.Item>
        </Tabs>
    )
}
