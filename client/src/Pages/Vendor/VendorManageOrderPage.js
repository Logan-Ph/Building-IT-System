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
            <div className="max-w-8xl px-4 sm:px-6 lg:px-8 bg-gray-100 mb-10 pb-5 w-full mx-auto">
                <div className="flex items-center py-10">
                    <div className="flex flex-row items-center">
                        <input type="text" name="search" placeholder="Please enter order info here "
                            className="rounded-md w-full border border-slate-400 pl-4 pr-20 py-2 text-md hover:border-black" onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>
                </div>
                <div>
                    <OrdersInfo orders={orders} searchTerm={searchTerm} />
                </div>
            </div>
        </>
    )
}

