import { Tabs } from "flowbite-react";
import { useEffect, useState } from "react";
import TableComponent from "./TableComponent";
import Pagination from "./Pagination";
import '../css/mangeorder.css'

export default function OrdersInfo({ orders, searchTerm, initialStatuses, filterOrders, headerContent, handleConfirmOrder }) {
    const [categorizedOrder, setCategorizedOrder] = useState({ "All": orders })

    useEffect(() => {
        const orderStatus = orders.reduce((acc, order) => {
            if (!acc[order.status]) {
                acc[order.status] = [];
            }
            acc[order.status].push(order);
            return acc;
        }, initialStatuses);

        orderStatus["All"] = orders;

        setCategorizedOrder(prevState => ({ ...prevState, ...orderStatus }));
    }, [orders, initialStatuses]);

    const customTheme = {
        "base": "flex flex-col gap-2",
        "tablist": {
          "base": "flex text-center",
          "styles": {
            "default": "flex-wrap border-b border-gray-200 dark:border-gray-200",
            "underline": "flex-wrap -mb-px border-b border-gray-200 dark:border-gray-200",
            "pills": "flex-wrap font-medium text-sm text-gray-500 dark:text-gray-500 space-x-2",
            "fullWidth": "w-full text-sm font-medium divide-x divide-gray-200 shadow grid grid-flow-col dark:divide-gray-200  rounded-none"
          },
          "tabitem": {
            "base": "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-400 focus:ring-4 focus:ring-cyan-300 focus:outline-none",
            "styles": {
              "default": {
                "base": "rounded-t-lg",
                "active": {
                  "on": "bg-gray-100 text-cyan-600 dark:bg-gray-100 dark:text-cyan-600",
                  "off": "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-500 dark:hover:bg-gray-50  dark:hover:text-gray-600"
                }
              },
              "underline": {
                "base": "rounded-t-lg",
                "active": {
                  "on": "text-cyan-600 rounded-t-lg border-b-2 border-cyan-600 active dark:text-cyan-600 dark:border-cyan-600",
                  "off": "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-600"
                }
              },
              "pills": {
                "base": "",
                "active": {
                  "on": "rounded-lg bg-cyan-600 text-white",
                  "off": "rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900"
                }
              },
              "fullWidth": {
                "base": "ml-0 first:ml-0 w-full rounded-none flex",
                "active": {
                  "on": "p-4 text-gray-900 bg-gray-100 active dark:bg-gray-100 dark:text-gray-900 rounded-none",
                  "off": "bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-gray-700 dark:bg-white dark:hover:bg-gray-50 rounded-none"
                }
              }
            },
            "icon": "mr-2 h-5 w-5"
          }
        },
        "tabitemcontainer": {
          "base": "",
          "styles": {
            "default": "",
            "underline": "",
            "pills": "",
            "fullWidth": ""
          }
        },
        "tabpanel": "py-3",
        
      
      
      
      
      
        "root": {
          "base": "w-full text-left text-sm text-gray-500 dark:text-gray-500",
          "shadow": "absolute bg-white dark:bg-white w-full h-full top-0 left-0 rounded-lg drop-shadow-md -z-10",
          "wrapper": "relative"
        },
        "body": {
          "base": "group/body",
          "cell": {
            "base": "group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg px-6 py-4"
          }
        },
        "head": {
          "base": "group/head text-xs uppercase text-gray-700 dark:text-gray-700",
          "cell": {
            "base": "group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg bg-gray-50 dark:bg-gray-50 px-6 py-3"
          }
        },
        "row": {
          "base": "group/row",
          "hovered": "hover:bg-gray-50 dark:hover:bg-gray-50",
          "striped": "odd:bg-white even:bg-gray-50 odd:dark:bg-white even:dark:bg-gray-50"
        }
      };

    return (
        <Tabs  theme={customTheme} aria-label="Tabs with icons">
            {Object.entries(categorizedOrder).map(([title, orders]) => (
                <Tabs.Item  theme={customTheme} title={title} >
                    {orders ? <OrderContent orders={orders} searchTerm={searchTerm} filterOrders={filterOrders} headerContent={headerContent} handleConfirmOrder={handleConfirmOrder} /> : <div className="overflow-x-auto">
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
                </Tabs.Item>
            ))}
        </Tabs>
    )
}

function OrderContent({ orders, searchTerm, filterOrders, headerContent, handleConfirmOrder }) {
    const [dataslice, setDataSlice] = useState(orders)

    useEffect(() => {
        (searchTerm) ? setDataSlice(filterOrders(orders, searchTerm)) : setDataSlice(orders.slice(0, 10))
    }, [searchTerm, orders, filterOrders])

    return (
        <>
            {dataslice.length !== 0 ? <TableComponent orders={dataslice} headerContent={headerContent} handleConfirmOrder={handleConfirmOrder} /> : <div className="overflow-x-auto">
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
