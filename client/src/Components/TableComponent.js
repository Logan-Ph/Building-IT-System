import { Table } from 'flowbite-react';
import React, { useEffect, useRef } from "react";
import MoreDetailOrder from './MoreDetailOrder';
import { LightModeTable } from './LightModeTable';

export default function TableComponent({ orders, headerContent, handleConfirmOrder }) {
    const ref = useRef();

    useEffect(() => {
        const elements = ref.current.querySelectorAll('[class*="dark:bg-gray"], [class*="dark:hover:bg-gray"]');
        elements.forEach(element => {
            const classes = element.className.split(' ');
            const newClasses = classes.filter(c => !c.startsWith('dark:bg-gray') && !c.startsWith('dark:hover:bg-gray'));
            element.className = newClasses.join(' ');
        });
    }, []);

    return (
        <>
            <div ref={ref} className='w-full overflow-x-auto'>
                <LightModeTable hoverable>
                    <Table.Head>
                        {headerContent && headerContent.map((header) => (
                            <Table.HeadCell className='!px-4 !py-2 dark:bg-white'>
                                <span className='whitespace-nowrap'>{header}</span>
                            </Table.HeadCell>
                        ))}
                        <Table.HeadCell className='dark:bg-white'>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {orders && orders.map((order) => {
                            const date = new Date(order.date);
                            const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
                            let buttonColorClass = '';
                            let buttonTextColor = '';
                            let buttonBorderColor = '';
                            switch (order.status) {
                                case 'Unpaid':
                                    buttonColorClass = 'bg-white';
                                    buttonTextColor = 'text-[#E61E2A]';
                                    buttonBorderColor = "border-[#E61E2A]";
                                    break;

                                case 'To Ship':
                                    buttonColorClass = 'bg-white';
                                    buttonTextColor = 'text-[#5C8374]';
                                    buttonBorderColor = "border-[#5C8374]";
                                    break;

                                case 'Shipping':
                                    buttonColorClass = 'bg-white';
                                    buttonTextColor = 'text-[#092635]';
                                    buttonBorderColor = "border-[#092635]";
                                    break;

                                case 'Completed':
                                    buttonColorClass = 'bg-white';
                                    buttonTextColor = 'text-[#FAC800]';
                                    buttonBorderColor = "border-[#FAC800]";
                                    break;

                                case 'Cancelled':
                                    buttonColorClass = 'bg-white';
                                    buttonTextColor = 'text-black';
                                    buttonBorderColor = "border-black";
                                    break;

                                case 'Failed Delivery':
                                    buttonColorClass = 'bg-white';
                                    buttonTextColor = 'text-[#FF6C22]';
                                    buttonBorderColor = "border-[#FF6C22]";
                                    break;

                                default:
                                    buttonColorClass = 'bg-white';
                                    buttonTextColor = 'text-gray-100';
                                    buttonBorderColor = "border-gray-100";
                            }
                            return (
                                <Table.Row className="bg-white dark:border-gray-700  ">
                                    <Table.Cell className='!px-4 !py-2'>{order._id}</Table.Cell>
                                    <Table.Cell className='!px-4 !py-2'>{order.userName}</Table.Cell>
                                    <Table.Cell className='!px-4 !py-2'>{formattedDate}</Table.Cell>
                                    <Table.Cell className='!px-4 !py-2'>
                                        <div className='whitespace-nowrap'>{order.shippingAddress}</div>
                                    </Table.Cell>
                                    <Table.Cell className='!px-4 !py-2'>{order.contactNumber}</Table.Cell>
                                    <Table.Cell className='!px-4 !py-2'>
                                        <button className={`rounded-lg text-sm px-2 font-bold border whitespace-nowrap ${buttonBorderColor} ${buttonColorClass} ${buttonTextColor}`}>
                                            {order.status}
                                        </button>
                                    </Table.Cell>
                                    <Table.Cell className='!px-4 !py-2'>
                                        <MoreDetailOrder order={order} handleConfirmOrder={handleConfirmOrder} />
                                    </Table.Cell>
                                </Table.Row>
                            )
                        })}
                    </Table.Body>
                </LightModeTable>
            </div>
        </>
    );
}
