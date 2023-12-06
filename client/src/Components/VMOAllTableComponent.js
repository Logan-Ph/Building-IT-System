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
<<<<<<< HEAD
=======

function MoreDetailOrdID({ order }) {
    const [openModal, setOpenModal] = useState(false);
    const [orderQuantity, setOrderQuantity] = useState(0);
    const [orderPrice, setOrderPrice] = useState(0);
    const date = new Date(order.date);
    const formattedDate = date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

    useEffect(() => {
        let totalQuantity = 0;
        let totalPrice = 0;

        order.products.forEach(product => {
            totalQuantity += product.quantity;
            totalPrice += product.price * product.quantity;
        });

        setOrderQuantity(totalQuantity);
        setOrderPrice(totalPrice);
    }, [order]);


    return (<>
        <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500" onClick={() => setOpenModal(true)}>
            More
        </a>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>
                <div>
                    <p className='text-sm font-medium text-[#E61E2A]'>Order ID: <span className='font-light text-gray-500 text-sm ml-1'>{order._id}</span></p>
                    <p className='text-sm font-medium text-[#E61E2A]'>Order placed: <span className='font-light text-gray-500 text-sm ml-1'>{formattedDate}</span> </p>
                    <p className='text-sm font-medium text-[#E61E2A]'>Shipping Address: <span className='font-light text-gray-500 text-sm ml-1'>{order.address}</span> </p>
                    <p className='text-sm font-medium text-[#E61E2A]'>Contact: <span className='font-light text-gray-500 text-sm ml-1'>{order.phoneNumer}</span> </p>
                </div>
            </Modal.Header>
            <Modal.Body className='overflow-y-auto'>
                <div className='space-y-6'>
                    {order.products.map((product) => (
                        <div className='flex'>
                            <div className='w-[50px] h-[70px] overflow-hidden'>
                                <img src={product.image_link} alt="product_img" className='object-fill w-full h-full' />
                            </div>

                            <div className="flex flex-col justify-between flex-1">
                                <p className="text-md leading-relaxed text-gray-900 line-clamp-1 ml-8">
                                    {product.product_name}
                                </p>
  
                                <div className="flex flex-col justify-between items-end">
                                    <div>
                                        x{product.quantity}
                                    </div>
                                    <div>
                                        <p className='text-[#E61E2A] font-bold mt-2'>${product.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Modal.Body>

            <Modal.Footer>
                <div className='flex items-center justify-between w-full'>
                    <div>
                        <p className='font-light text-md text-gray-900'>Total Items: <span className='ml-2 font-light text-gray-500'>{orderQuantity} items</span></p>
                    </div>
                    <div>
                        <p className='font-light text-md text-gray-900'>Order Total: <span className='ml-2 font-light text-gray-500'>${orderPrice}</span></p>
                    </div>
                </div>
            </Modal.Footer>

            <Modal.Footer>
                <div className='flex items-center justify-between w-full'>
                    <div>
                        <p className='font-light text-md text-gray-900'>Order Payment Method: <span className='ml-2 font-light text-gray-500'>Cash On Delivery - COD</span></p>
                    </div>
                    <div className='flex items-center'>
                        <p className='font-light text-md text-gray-900'>Status</p>
                        <button className="ml-2 bg-transparent text-[#E61E2A] text-sm px-2 font-bold border border-[#E61E2A] rounded-lg">Unpaid</button>
                    </div>
                </div>
            </Modal.Footer>
            <Modal.Footer>
                <button type="button" class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Confirm</button>
                <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Cancel</button>

            </Modal.Footer>
        </Modal>
    </>)
}

function CompletedMoreDetailOrdID() {
    const [openModal, setOpenModal] = useState(false);
    return <>
        <a href="#" className="font-medium text-[#E61E2A] hover:underline" onClick={() => setOpenModal(true)}>
            More
        </a>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>
                <div>
                    <p className='text-sm font-medium text-[#E61E2A]'>Order ID: <span className='font-light text-gray-500 text-sm ml-1'>#1234-klmn</span></p>
                    <p className='text-sm font-medium text-[#E61E2A]'>Order placed: <span className='font-light text-gray-500 text-sm ml-1'>4 December 2023</span> </p>
                    <p className='text-sm font-medium text-[#E61E2A]'>Shipping Address: <span className='font-light text-gray-500 text-sm ml-1'>104 Pho Quang, ward 2, Tan Binh District</span> </p>
                    <p className='text-sm font-medium text-[#E61E2A]'>Contact: <span className='font-light text-gray-500 text-sm ml-1'>0977 702 769</span> </p>
                </div>
            </Modal.Header>


            <Modal.Body className='overflow-y-auto'>
                <div className='space-y-6'>
                    <div className='flex'>
                        <div className='w-[80px] h-[80px]'>
                            <img src={require("../Components/images/lipstick.jpg")} alt="product_img" className='object-fit w-full h-full' />
                        </div>
                        <div>
                            <div className='ml-10'>
                                <p className="text-md leading-relaxed text-gray-900 line-clamp-1">
                                    Son kem lì, lên màu chuẩn Hàn Quốc Romand Zero Velvet Tint
                                </p>
                            </div>
                            <div className='my-2 ml-10 flex justify-between'>
                                <p className="text-sm leading-relaxed text-gray-500">
                                    #23 nâu mocha
                                </p>
                                <div className='flex flex-col'>
                                    <p className="text-sm leading-relaxed text-gray-500 ml-20 xs:ml-16">x1</p>
                                    <p className='ml-20 xs:ml-16 text-[#E61E2A] font-bold mt-2'>$5.50</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className='w-[80px] h-[80px]'>
                            <img src={require("../Components/images/phanma.jpg")} alt="product_img" className='object-fit w-full h-full' />
                        </div>
                        <div>
                            <div className='ml-10'>
                                <p className="text-md leading-relaxed text-gray-900 line-clamp-1">
                                    Phấn má hồng ngọt ngào dạng nén Romand Better Than Cheek
                                </p>
                            </div>
                            <div className='my-2 ml-10 flex justify-between'>
                                <p className="text-sm leading-relaxed text-gray-500">
                                    #CO3 Fig Chip
                                </p>
                                <div className='flex flex-col'>
                                    <p className="text-sm leading-relaxed text-gray-500 ml-20 xs:ml-16">x1</p>
                                    <p className='ml-20 xs:ml-16 text-[#E61E2A] font-bold mt-2'>$4.50</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <div className='flex items-center justify-between w-full'>
                    <div>
                        <p className='font-light text-md text-gray-900'>Total Items Qty: <span className='ml-1 font-light text-gray-500'>2 items</span></p>
                    </div>
                    <div>
                        <p className='font-light text-md text-gray-900'>Order Total: <span className='ml-1 font-light text-gray-500'>$10</span></p>
                    </div>
                </div>
            </Modal.Footer>

            <Modal.Footer>
                <div className='flex items-center justify-between w-full'>
                    <div>
                        <p className='font-light text-md text-gray-900'>Order Payment Method: <span className='ml-2 font-light text-gray-500'>Cash On Delivery - COD</span></p>
                    </div>
                    <div className='flex items-center'>
                        <p className='font-light text-md text-gray-900'>Status</p>
                        <button className="bg-white text-[#FAC800] text-sm px-2 font-bold border border-[#FAC800] rounded-lg ml-2">Completed</button>
                    </div>
                </div>
            </Modal.Footer>
            <Modal.Footer>
                <div>
                    <p className='font-light text-sm text-gray-900'>Order placed:<span className='font-light text-gray-500 text-sm ml-1'>4 December 2023</span></p>
                    <p className='font-light text-sm text-gray-900'>Payment time:<span className='font-light text-gray-500 text-sm ml-1'>6 December 2023</span><span className='font-light text-gray-500 text-sm ml-1'>07:08</span></p>
                    <p className='font-light text-sm text-gray-900'>Order completed:<span className='font-light text-gray-500 text-sm ml-1'>6 December 2023</span><span className='font-light text-gray-500 text-sm ml-1'>07:10</span></p>
                </div>
            </Modal.Footer>
        </Modal>
    </>
}
>>>>>>> eb5cb4b69bd3b232c9e8a0c8cb82492b4a760452
