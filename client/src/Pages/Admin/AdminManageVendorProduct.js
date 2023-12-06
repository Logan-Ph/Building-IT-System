import { Table } from 'flowbite-react';
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { FiAlertTriangle } from "react-icons/fi";


export default function AdminManageVendorProduct(){
    return <>
    <main className="max-w-9xl px-4 sm:px-6 lg:px-8 bg-gray-100 mb-10 pb-5 w-full">

        <div className="flex items-center py-10">
            <div className="flex flex-row items-center">
                <input type="text" name="search" placeholder="Search products here.... "
                    className="rounded-md w-full border border-slate-400 pl-4 pr-20 py-2 text-md hover:border-black"/>
            </div>
            <div className='flex items-center ml-2'>
                <button className="bg-[#E61E2A] hover:bg-[#e61e2bc3] text-white font-bold py-2 px-4 md:px-2 md:py-2 border border-[#E61E2A] rounded-lg">
                    Search
                </button>
                <button className="bg-transparent hover:bg-[#E61E2A] text-[#E61E2A] font-semibold hover:text-white py-2 px-4 border border-[#E61E2A] hover:border-transparent rounded-lg ml-2">
                    Reset
                </button>
            </div>
        </div>

        <div>
            <TableComponent />
        </div>
    </main>  
    </>
}

function TableComponent() {
    return (
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell className='!px-4 !py-2'>Product ID</Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2'></Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2'>Product name</Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2'>Category</Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2'>Vendor</Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2'>Price</Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2'>Sale</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Delete</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="border-b border-gray-200">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 border-b border-gray-200">
             <Table.Cell className='!px-4 !py-2'>
                <span>656f070a83e57918414548b9</span>
             </Table.Cell>
             <Table.Cell className='!px-4 !py-2'>
                <div className='w-[60px] h-[60px]'>
                <img src={require("../../Components/images/phanma.jpg")} alt="product_img" className='object-fit w-full h-full' />
                </div>
             </Table.Cell>
              <Table.Cell className="!px-4 !py-2 overflow-x-auto">
                <span className='line-clamp-1 font-medium text-gray-900 '>Son kem lì, lên màu chuẩn Hàn Quốc Romand Zero Velvet Tint </span>
              </Table.Cell>
              <Table.Cell className='!px-4 !py-2'>
                <span className='line-clamp-1'>Beauty & Care</span></Table.Cell>
              <Table.Cell className='!px-4 !py-2'>Romand</Table.Cell>
              <Table.Cell className='!px-4 !py-2'>$3.50</Table.Cell>
              <Table.Cell className='!px-4 !py-2'>15%</Table.Cell>
              <Table.Cell className='!px-4 !py-2'>
                    <DeleteButtonPopup/>
              </Table.Cell>
            </Table.Row>

            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 border-b border-gray-200">
             <Table.Cell className='!px-4 !py-2'>
                <span>656f070a83e57918414548a7</span>
             </Table.Cell>
             <Table.Cell className='!px-4 !py-2'>
                <div className='w-[60px] h-[60px]'>
                <img src={require("../../Components/images/lipstick.jpg")} alt="product_img" className='object-fit w-full h-full' />
                </div>
             </Table.Cell>
              <Table.Cell className="!px-4 !py-2">
                <span className='line-clamp-1 font-medium text-gray-900 p-0 m-0'>Phấn má hồng ngọt ngào dạng nén Romand Better Than Cheek</span>
              </Table.Cell>
              <Table.Cell className='!px-4 !py-2'>
                <span className='line-clamp-1'>Beauty & Care</span>
              </Table.Cell>
              <Table.Cell className='!px-4 !py-2'>Romand</Table.Cell>
              <Table.Cell className='!px-4 !py-2'>$4.50</Table.Cell>
              <Table.Cell className='!px-4 !py-2'>10%</Table.Cell>
              <Table.Cell className='!px-4 !py-2'>
                <DeleteButtonPopup/>
              </Table.Cell>
            </Table.Row>

            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 border-b border-gray-200">
             <Table.Cell className='!px-4 !py-2'>
                <span>656f070a83e57918414548a7</span>
             </Table.Cell>
             <Table.Cell className='!px-4 !py-2'>
                <div className='w-[60px] h-[60px]'>
                <img src={require("../../Components/images/lipstick.jpg")} alt="product_img" className='object-fit w-full h-full' />
                </div>
             </Table.Cell>
              <Table.Cell className="!px-4 !py-2">
                <span className='line-clamp-1 font-medium text-gray-900 p-0 m-0'>Phấn má hồng ngọt ngào dạng nén Romand Better Than Cheek</span>
              </Table.Cell>
              <Table.Cell className='!px-4 !py-2'>
                <span className='line-clamp-1'>Beauty & Care</span>
              </Table.Cell>
              <Table.Cell className='!px-4 !py-2'>Romand</Table.Cell>
              <Table.Cell className='!px-4 !py-2'>$4.50</Table.Cell>
              <Table.Cell className='!px-4 !py-2'>10%</Table.Cell>
              <Table.Cell className='!px-4 !py-2'>
                    <DeleteButtonPopup/>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
}


function DeleteButtonPopup(){
    const [openModal, setOpenModal] = useState(false);

    return <>
         <a href="#" className="font-medium text-[#E61E2A] hover:underline" onClick={() => setOpenModal(true)}>
        Delete
        </a>
        <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
            <Modal.Header />
            <Modal.Body>
            <div className="text-center">
                <FiAlertTriangle className="mx-auto mb-2 h-10 w-10 text-[#FAC800]" />
                <h3 className="mb-5 text-lg font-normal text-gray-900">
                Are you sure you want to delete this product?
                </h3>
                <div className="flex justify-center gap-4">
                <Button color="failure" onClick={() => setOpenModal(false)}>
                    Yes, I'm sure
                </Button>
                <Button color="gray" onClick={() => setOpenModal(false)}>
                   Cancel
                </Button>
                </div>
            </div>
            </Modal.Body>
        </Modal>
    </>
    
}

