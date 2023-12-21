import { Table } from 'flowbite-react';
import React from "react";
import MoreDetailOrder from './MoreDetailOrder';

export default function AcceptedTableComponent({ foundOrder, orders }) {
  return <>
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Order ID</Table.HeadCell>
          <Table.HeadCell>Customer Name </Table.HeadCell>
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
                <Table.Cell>{order.shippingAddress}</Table.Cell>
                <Table.Cell>{order.contactNumber}</Table.Cell>
                <Table.Cell>
                <button className="bg-transparent text-green-500 text-sm px-2 font-bold border border-green-500 rounded-lg">Accepted</button>
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
                <Table.Cell>{order.shippingAddress}</Table.Cell>
                <Table.Cell>{order.contactNumber}</Table.Cell>
                <Table.Cell>
                  <button className="bg-transparent text-green-500 text-sm px-2 font-bold border border-green-500 rounded-lg">Accepted</button>
                </Table.Cell>
                <Table.Cell>
                  <MoreDetailOrder order={order} />
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>

    </div >
  </>;
}