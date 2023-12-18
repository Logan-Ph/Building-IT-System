import { Table } from 'flowbite-react';
import React from "react";
import MoreDetailOrder from './MoreDetailOrder';

export default function TableComponent({ orders }) {
    return <>
        <div className='overflow-x-auto'>
            <Table hoverable>
                <Table.Head>
                    <Table.HeadCell className='!px-4 !py-2'>
                        <span className='whitespace-nowrap'>Order ID</span></Table.HeadCell>
                    <Table.HeadCell className='!px-4 !py-2'>
                        <span className='whitespace-nowrap'>Customer Name</span></Table.HeadCell>
                    <Table.HeadCell className='!px-4 !py-2'>
                        <span className='whitespace-nowrap'>Order Date</span></Table.HeadCell>
                    <Table.HeadCell className='!px-4 !py-2'>
                        <span className='whitespace-nowrap'>Shipping Adress</span></Table.HeadCell>
                    <Table.HeadCell className='!px-4 !py-2'>
                        <span className='whitespace-nowrap'>Contact number</span></Table.HeadCell>
                    <Table.HeadCell className='!px-4 !py-2'>
                        <span className='whitespace-nowrap'></span>Status</Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {orders.map((order) => {
                        const date = new Date(order.date);
                        const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
                        return (
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className='!px-4 !py-2'>{order._id}</Table.Cell>
                                <Table.Cell className='!px-4 !py-2'>{order.userName}</Table.Cell>
                                <Table.Cell className='!px-4 !py-2'>{formattedDate}</Table.Cell>
                                <Table.Cell className='!px-4 !py-2'>
                                    <div className='whitespace-nowrap'>{order.shippingAddress}</div>
                                </Table.Cell>
                                <Table.Cell className='!px-4 !py-2'>{order.contactNumber}</Table.Cell>
                                <Table.Cell>
                                    <button className="bg-transparent text-[#E61E2A] text-sm px-2 font-bold border border-[#E61E2A] rounded-lg whitespace-nowrap">{order.status}</button>
                                </Table.Cell>
                                <Table.Cell>
                                    <MoreDetailOrder order={order} />
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                    {/* <button className="bg-white text-[#FAC800] text-sm px-2 font-bold border border-[#FAC800] rounded-lg">Completed</button> */}
                </Table.Body>
            </Table>
        </div>
    </>;
}
