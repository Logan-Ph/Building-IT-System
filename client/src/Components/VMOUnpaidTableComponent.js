import { Table } from 'flowbite-react';
import { Modal } from 'flowbite-react';
import { useState } from 'react';
import React from "react";

export default function UnpaidTableComponent() {
    return <>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Order ID</Table.HeadCell>
            <Table.HeadCell>Quantity</Table.HeadCell>
            <Table.HeadCell>Order Date</Table.HeadCell>
            <Table.HeadCell>Shipping Adress</Table.HeadCell>
            <Table.HeadCell>Contact number</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>#1234-efgh</Table.Cell>
              <Table.Cell>4</Table.Cell>
              <Table.Cell>22/12/2022</Table.Cell>
              <Table.Cell>104 Pho Quang p2 qTB</Table.Cell>
              <Table.Cell>0977702769</Table.Cell>
              <Table.Cell>
                    <button className="bg-transparent text-[#E61E2A] text-sm px-2 font-bold border border-[#E61E2A] rounded-lg">Unpaid</button>
              </Table.Cell>
              <Table.Cell>
                
                <MoreDetailOrdID/>
                
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>#1234-abcd</Table.Cell>
              <Table.Cell>5</Table.Cell>
              <Table.Cell>22/12/2022</Table.Cell>
              <Table.Cell>104 Pho Quang p2 qTB</Table.Cell>
              <Table.Cell>0977702769</Table.Cell>
              <Table.Cell>
                    <button className="bg-transparent text-[#E61E2A] text-sm px-2 font-bold border border-[#E61E2A] rounded-lg">Unpaid</button>
              </Table.Cell>
              <Table.Cell>

                <MoreDetailOrdID />

              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>#1234-klmn</Table.Cell>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>22/12/2022</Table.Cell>
              <Table.Cell>104 Pho Quang p2 qTB</Table.Cell>
              <Table.Cell>0977702769</Table.Cell>
              <Table.Cell>
              <button className="bg-transparent text-[#E61E2A] text-sm px-2 font-bold border border-[#E61E2A] rounded-lg">Unpaid</button>
              </Table.Cell>
              <Table.Cell>

                <MoreDetailOrdID/>

              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>#1234-klmn</Table.Cell>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>04/12/2023</Table.Cell>
              <Table.Cell>104 Pho Quang p2 qTB</Table.Cell>
              <Table.Cell>0977702769</Table.Cell>
              <Table.Cell>
                    {/* <button className="bg-transparent text-[#618264] text-sm px-5 font-bold border border-[#618264] rounded-lg">Paid</button> */}
                    <button className="bg-transparent text-[#E61E2A] text-sm px-2 font-bold border border-[#E61E2A] rounded-lg">Unpaid</button>
              </Table.Cell>
              <Table.Cell>

                <MoreDetailOrdID/>

              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

      </div>
    </>;
  }

  function MoreDetailOrdID()
  {
    const [openModal, setOpenModal] = useState(false);
    return <>
    <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500" onClick={() => setOpenModal(true)}>
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
                        <img src={require("../Components/images/lipstick.jpg")} alt="product_img" className='object-fit w-full h-full'/>
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
                        <img src={require("../Components/images/phanma.jpg")} alt="product_img" className='object-fit w-full h-full'/>
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
                    <p className='font-light text-md text-gray-900'>Total Items Qty: <span className='ml-2 font-light text-gray-500'>2 items</span></p>
                </div>
                <div>
                    <p className='font-light text-md text-gray-900'>Order Total: <span className='ml-2 font-light text-gray-500'>$10</span></p>
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
      </Modal>
    </>
  }