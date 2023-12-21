import { useCallback, useEffect, useState } from "react";
import UserSidebar from "../../Components/UserSidebar";
import Pagination from "../../Components/Pagination";
import { Navigate } from 'react-router';
import axios from "axios";

export default function UserOrder() {
    const [error, setError] = useState();
    const [orders, setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState("Unpaid");
    const initialStatuses = {
        "Unpaid": null,
        "To Ship": null,
        "Shipping": null,
        "Completed": null,
        "Cancelled": null,
        "Failed Delivery": null
    };

    const getOrders = useCallback(async () => {
        try {
            const res = await axios.get("http://localhost:4000/user-order", { withCredentials: true })
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

    if (isLoading) {
        return (<div>...Loading</div>)
    }

    return (
        <>
            {error && <Navigate to="/" />}
            <UserSidebar />
            <div className="pl-0 md:pl-64 transition-all" id="main">

                <div className='pl-8 mt-6 p-5'>
                    <h1 class="font-bold text-black text-3xl">
                        My Orders
                    </h1>
                </div>

                <div className="max-w-8xl px-4 sm:px-6 lg:px-8 m-2 pb-2 w-full mx-auto">
                    <div className="flex items-center py-10">
                        <div className="flex flex-row items-center">
                            <input type="text" name="search" placeholder="Search by name, id, ...  "
                                className="rounded-md w-full border border-slate-400 pl-4 pr-20 py-2 text-md hover:border-black"
                                onChange={(e) => setSearchTerm(e.target.value)} />
                        </div>
                    </div>
                </div>


                <div class="text-md font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                    <ul class="flex flex-wrap -mb-px">
                        <li class="me-2">
                            <span className={`${activeTab === "Unpaid" ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`} onClick={() => setActiveTab("Unpaid")}>Waiting for proccessing</span>
                        </li>
                        <li class="me-2">
                            <span className={`${activeTab === "To Ship" ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`} onClick={() => setActiveTab("To Ship")}>To ship</span>
                        </li>
                        <li class="me-2">
                            <span className={`${activeTab === "Shipping" ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`} onClick={() => setActiveTab("Shipping")}>Delivering</span>
                        </li>
                        <li class="me-2">
                            <span className={`${activeTab === "Completed" ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`} onClick={() => setActiveTab("Completed")}>Completed</span>
                        </li>
                        <li class="me-2">
                            <span className={`${activeTab === "Cancelled" ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`} onClick={() => setActiveTab("Cancelled")}>Cancelled</span>
                        </li>
                        <li class="me-2">
                            <span className={`${activeTab === "Failed Delivery" ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`} onClick={() => setActiveTab("Failed Delivery")}>Failed Delivery</span>
                        </li>
                    </ul>
                </div>
                <OrdersInfo orders={orders} searchTerm={searchTerm} initialStatuses={initialStatuses} activeTab={activeTab} />
            </div>
        </>
    )
}

function OrdersInfo({ orders, searchTerm, initialStatuses, activeTab }) {
    const [categorizedOrder, setCategorizedOrder] = useState({ "All": orders.length > 0 ? orders : null })
    useEffect(() => {
        const orderStatus = orders.reduce((acc, order) => {
            if (!acc[order.status]) {
                acc[order.status] = [];
            }
            acc[order.status].push(order);
            return acc;
        }, initialStatuses);

        setCategorizedOrder(prevState => ({ ...prevState, ...orderStatus }));
    }, [orders, initialStatuses]);

    return (
        <div class="flex flex-col justify-center dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
            {Object.entries(categorizedOrder).map(([title, orders]) => (
                activeTab === title && (orders ? <OrderContent orders={orders} searchTerm={searchTerm} /> : <div className="overflow-x-auto">
                    <div className='border border-gray my-1 py-32'>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='w-[100px] h-[80px]'>
                                <img src={require("../../Components/images/noorder.png")}
                                    alt="No Order" className='w-full h-full' />
                            </div>
                            <p className="capitalize text-md text-gray-900 font-light my-2">no orders found</p>
                        </div>
                    </div>
                </div>)
            ))}
        </div>
    )
}

function filterOrders(orders, searchTerm) {
    const regex = new RegExp(searchTerm, 'i');
    return orders.map(order => {
        const date = new Date(order.date);
        const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
        return { ...order, date: formattedDate };
    }).filter(order => regex.test(order._id) || regex.test(order.status) || regex.test(order.shippingAddress));
}

function OrderContent({ orders, searchTerm }) {
    const [dataslice, setDataSlice] = useState(orders)

    useEffect(() => {
        (searchTerm) ? setDataSlice(filterOrders(orders, searchTerm)) : setDataSlice(orders.slice(0, 10))
    }, [searchTerm, orders])

    return (
        <>
            {dataslice && dataslice.map((data) => {
                let orderPrice = 0;
                return (
                    <>
                        <div class="my-4 md:mt-6 flex flex-col">
                            <div class="p-6 bg-white divide-y">
                                <div className='flex items-center mb-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package-check"><path d="m16 16 2 2 4-4" /><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" /><path d="m7.5 4.27 9 5.15" /><polyline points="3.29 7 12 12 20.71 7" /><line x1="12" x2="12" y1="22" y2="12" /></svg>
                                    <h1 class="pl-2 text-lg font-bold">{data.status}</h1>
                                </div>
                                {data.products.map((product) => {
                                    orderPrice += product.price * product.quantity;
                                    return (
                                        <div class="flex items-center space-x-4 mb-4">
                                            <img src={product.image_link} alt="Product" class="w-32 h-32"></img>
                                            <div>
                                                <h2 class="font-bold">{product.product_name}</h2>
                                                <p>x{product.quantity}</p>
                                                <p>${product.price}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                                <div class="flex flex-col justify-between items-end h-full">
                                    <p class="text-lg font-bold">Total: ${orderPrice}</p>
                                    {/* <div>
                                    <button class="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded mr-2">Buy Again</button>
                                    <button class="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded">More Details</button>
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
            {!searchTerm && Math.floor(orders.length / 10) > 1 && <Pagination pages={Math.ceil(orders.length / 10)} setDataSlice={setDataSlice} data={orders} />}
        </>
    )
}