import '../../css/mangeorder.css'
import React, { useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from '../../Context/UserContext';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { Navigate } from 'react-router-dom';
import OrdersInfo from '../../Components/OrdersInfo';

export default function ManageOrderPage() {
    const { user } = useContext(UserContext)
    const [error, setError] = useState();
    const [orders, setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('');
    const initialStatuses = {
        "Unpaid": null,
        "To Ship": null,
        "Shipping": null,
        "Completed": null,
        "Cancelled": null,
        "Failed Delivery": null
    };
    const headerContent = ["Order ID", "Customer Name", "Order Date", "Shipping Address", "Contact Number", "Status"]

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
            <div className="max-w-full px-4 sm:px-6 lg:px-8 bg-gray-100 mb-10 pb-5 w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] overflow-hidden">
                <div className="flex items-center py-10">
                    <div className="flex flex-row items-center">
                        <input type="text" name="search" placeholder="Please enter order info"
                            className="rounded-md w-full border border-slate-400 pl-4 pr-10 py-2 text-md hover:border-black" onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>
                </div>
                <div className='relative'>
                    <OrdersInfo orders={orders} searchTerm={searchTerm} filterOrders={filterOrders} initialStatuses={initialStatuses} headerContent={headerContent} className="w-full" />
                </div>
            </div>
        </>
    )
}

function filterOrders(orders, searchTerm) {
    const regex = new RegExp(searchTerm, 'i');
    return orders.map(order => {
        const date = new Date(order.date);
        const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
        return { ...order, date: formattedDate };
    }).filter(order => regex.test(order._id) || regex.test(order.status) || regex.test(order.userName) || regex.test(order.userId) || regex.test(order.date) || regex.test(order.contactNumber) || regex.test(order.shippingAddress));
}

