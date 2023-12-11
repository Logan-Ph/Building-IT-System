import '../../css/mangeorder.css'
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Tabs } from 'flowbite-react';
import UnpaidTableComponent from '../../Components/VMOUnpaidTableComponent';
import AllTableComponent from '../../Components/VMOAllTableComponent';
import { UserContext } from '../../Context/UserContext';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { UserImageContext } from '../../Context/UserImageContext';
import { Navigate } from 'react-router-dom';

export default function ManageOrderPage() {
    const { user, setUser } = useContext(UserContext)
    const { setUserImage } = useContext(UserImageContext)
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
        }
        catch (error) {
        }
    }, [setOrders])

    const fetchUser = useCallback(async () => {
        try {
            const res = await axios.get("http://localhost:4000/login/success", { withCredentials: true })
            setUser(res.data.user);
            setUserImage(res.data.userImage);
            setIsLoading(false)
        }
        catch (er) {
            setError(er)
        }
    }, [setUser, setUserImage])

    useEffect(() => {
        getOrders();
        fetchUser();
    }, [getOrders, fetchUser])

    const postData = async () => {
        let statusValue;
        try {
            switch (status) {
                case 1:
                    statusValue = "Unpaid";
                    break;
                case 2:
                    statusValue = "To Ship";
                    break;
                case 3:
                    statusValue = "Shipping";
                    break;
                case 4:
                    statusValue = "Completed";
                    break;
                case 5:
                    statusValue = "Failed Delivery";
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

    if (isLoading) {
        return <div>Loading....</div>
    }

    return (
        <>
            {error && <Navigate to={'/login'} replace />}
            {user && user.role === "User" && <Navigate to={'/'} replace />}

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
            <Tabs.Item title="Unpaid" >
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
                {categorizedOrder["Unpaid"] && <UnpaidTableComponent orders={categorizedOrder["Unpaid"]} foundOrder={foundOrder} />}
            </Tabs.Item>
            <Tabs.Item title="To Ship" onClick={() => setStatus("To Ship")}>
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
                {categorizedOrder["To Ship"] && <UnpaidTableComponent orders={categorizedOrder["To Ship"]} foundOrder={foundOrder} />}
            </Tabs.Item>
            <Tabs.Item title="Shipping" onClick={() => setStatus("Shipping")}>
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
                {categorizedOrder["Completed"] && <UnpaidTableComponent orders={categorizedOrder["Completed"]} foundOrder={foundOrder} />}
            </Tabs.Item>
            <Tabs.Item title="Failed Delivery" onClick={() => setStatus("Failed Delivery")}>
                {!categorizedOrder["Failed Delivery"] && <div className="overflow-x-auto">
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
                {categorizedOrder["Failed Delivery"] && <UnpaidTableComponent orders={categorizedOrder["Failed Delivery"]} foundOrder={foundOrder} />}
            </Tabs.Item>
        </Tabs>
    )
}