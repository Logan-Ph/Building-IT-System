import { Table } from 'flowbite-react';
import React from "react";
import MoreDetailOrder from './MoreDetailOrder';

export default function AllTableComponent({ foundOrder, orders }) {
    return <>
        <div className="overflow-x-auto">
            <Table hoverable>
                <Table.Head>
                    <Table.HeadCell>Order ID</Table.HeadCell>
                    <Table.HeadCell>Customer Name</Table.HeadCell>
                    <Table.HeadCell>Order Date</Table.HeadCell>
                    <Table.HeadCell>Shipping Adress</Table.HeadCell>
                    <Table.HeadCell>Contact number</Table.HeadCell>
                    <Table.HeadCell>Status</Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {foundOrder && foundOrder.map(order => {
                        const date = new Date(order.date);
                        const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
                        return (
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>{order._id}</Table.Cell>
                                <Table.Cell>{order.userName}</Table.Cell>
                                <Table.Cell>{formattedDate}</Table.Cell>
                                <Table.Cell>{order.address}</Table.Cell>
                                <Table.Cell>{order.phoneNumer}</Table.Cell>
                                <Table.Cell>
                                    <button className="bg-transparent text-[#E61E2A] text-sm px-2 font-bold border border-[#E61E2A] rounded-lg">{order.status}</button>
                                </Table.Cell>
                                <Table.Cell>

                                    <MoreDetailOrder order={order} />

                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                    {!foundOrder && orders.map((order) => {
                        const date = new Date(order.date);
                        const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
                        return (
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>{order._id}</Table.Cell>
                                <Table.Cell>{order.userName}</Table.Cell>
                                <Table.Cell>{formattedDate}</Table.Cell>
                                <Table.Cell>{order.address}</Table.Cell>
                                <Table.Cell>{order.phoneNumer}</Table.Cell>
                                <Table.Cell>
                                    <button className="bg-transparent text-[#E61E2A] text-sm px-2 font-bold border border-[#E61E2A] rounded-lg">{order.status}</button>
                                </Table.Cell>
                                <Table.Cell>
                                    <MoreDetailOrder order={order} />
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                    {/* <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800"></Table.Row>
                    <Table.Cell>#1234-abcd</Table.Cell>
                    <Table.Cell>5</Table.Cell>
                    <Table.Cell>22/12/2022</Table.Cell>
                    <Table.Cell>104 Pho Quang p2 qTB</Table.Cell>
                    <Table.Cell>0977702769</Table.Cell>
                    <Table.Cell>
                        <button className="bg-white text-[#FAC800] text-sm px-2 font-bold border border-[#FAC800] rounded-lg">Completed</button>
                    </Table.Cell>
                    <Table.Cell>

                        <CompletedMoreDetailOrdID />

                    </Table.Cell> */}
                </Table.Body>
            </Table>
        </div>
    </>;
}
