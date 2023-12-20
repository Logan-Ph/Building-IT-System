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
            <div className="max-w-full px-4 sm:px-6 lg:px-8 bg-gray-100 mb-10 pb-5 w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ">
                <div className="flex items-center py-10">
                    <div className="flex flex-row items-center">
                        <input type="text" name="search" placeholder="Please enter order info here "
                            className="rounded-md w-full border border-slate-400 pl-4 pr-20 py-2 text-md hover:border-black" onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>
                </div>
                <div className='relative'>
                    <OrdersInfo orders={orders} searchTerm={searchTerm} className="w-full"/>
                </div>

            </div>
        </>
    )
}

