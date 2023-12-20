import { Tabs } from "flowbite-react";
import { useEffect, useState } from "react";
import TableComponent from "./TableComponent";
import Pagination from "./Pagination";
import '../css/mangeorder.css'


export default function OrdersInfo({ orders, searchTerm }) {
    const [categorizedOrder, setCategorizedOrder] = useState({ "All": orders.length > 0 ? orders : null })
    useEffect(() => {
        const initialStatuses = {
            "Unpaid": null,
            "To Ship": null,
            "Shipping": null,
            "Completed": null,
            "Cancelled": null,
            "Failed Delivery": null
        };

        const orderStatus = orders.reduce((acc, order) => {
            if (!acc[order.status]) {
                acc[order.status] = [];
            }
            acc[order.status].push(order);
            return acc;
        }, initialStatuses);

        setCategorizedOrder(prevState => ({ ...prevState, ...orderStatus }));
    }, [orders]);

    console.log(categorizedOrder)

    return (
        <Tabs aria-label="Tabs with icon" className="!flex-nowrap !relative xs:!overflow-x-auto md:!overflow-x-auto sm:!overflow-x-auto">
        {Object.entries(categorizedOrder).map(([title, orders]) => (
            <Tabs.Item 
                title={ title } 
                className="text-gray-900 !whitespace-nowrap">
                {orders 
                && (<div> 
                    <OrderContent orders={orders} searchTerm={searchTerm} />
                    </div>
                )}</Tabs.Item>
        ))}
        </Tabs>
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

function OrderContent({ orders, searchTerm }) {
    const [dataslice, setDataSlice] = useState(orders)

    useEffect(() => {
        (searchTerm) ? setDataSlice(filterOrders(orders, searchTerm)) : setDataSlice(orders.slice(0, 10))
    }, [searchTerm, orders])

    return (
        <>
            {orders ? <TableComponent orders={dataslice} /> : <div className="overflow-x-auto">
                <div className='border border-gray my-1 py-32'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='w-[100px] h-[80px]'>
                            <img src={require("./images/noorder.png")}
                                alt="No Order" className='w-full h-full' />
                        </div>
                        <p className="capitalize text-md text-gray-900 font-light my-2">no orders found</p>
                    </div>
                </div>
            </div>}
            {!searchTerm && Math.floor(orders.length / 10) > 1 && <Pagination pages={Math.ceil(orders.length / 10)} setDataSlice={setDataSlice} data={orders} />}
        </>
    )
}