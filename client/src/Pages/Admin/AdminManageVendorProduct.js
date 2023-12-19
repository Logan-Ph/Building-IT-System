import { Table } from 'flowbite-react';
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { FiAlertTriangle } from "react-icons/fi";
import { Tabs } from "flowbite-react";
import { FaCircle } from "react-icons/fa";
import { MdReportProblem } from "react-icons/md";
import { Link } from 'react-router-dom';



export default function AdminManageVendorProduct() {
  return <>
    <main className="max-w-full px-4 sm:px-6 lg:px-8 bg-gray-100 mb-10 pb-5 w-full">
      <div className='mx-auto'>
        <Tabs aria-label="Full width tabs" style="fullWidth">
          {/* Admin manage customer account */}
          <Tabs.Item active title="No Report Product" icon={FaCircle}>
              <NoReportedTableComponent/>
          </Tabs.Item>
          <Tabs.Item active title="Reported Product" icon={MdReportProblem}>
              <ReportedTableComponent/>
          </Tabs.Item>
        </Tabs>
      </div>
    </main>
  </>
}

function NoReportedTableComponent() {
  return (
    <>
      <div class="flex items-center justify-end space-y-4 md:space-y-0 py-4">
        <label for="table-search" class="sr-only">
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 xs:w-52 sm:w-52  bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search products here...."
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell className='!px-4 !py-2 !whitespace-nowrap'>Product ID</Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2'></Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2 !whitespace-nowrap'>Product name</Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2 !whitespace-nowrap'>Category</Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2 !whitespace-nowrap'>Status</Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2 !whitespace-nowrap'>Vendor</Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2 !whitespace-nowrap'>Price</Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2 !whitespace-nowrap'>Sale</Table.HeadCell>
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
                <span className='line-clamp-1'>Beauty & Care</span>
              </Table.Cell>

              <Table.Cell className='!px-4 !py-2'>
                <div class="flex items-center">
                  <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                  <span className='whitespace-nowrap'>No Report</span>
                </div>
              </Table.Cell>

              <Table.Cell className='!px-4 !py-2'>Romand</Table.Cell>
              <Table.Cell className='!px-4 !py-2'>$3.50</Table.Cell>
              <Table.Cell className='!px-4 !py-2'>15%</Table.Cell>
              <Table.Cell className='!px-4 !py-2'>
                <DeleteButtonPopup />
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
              <Table.Cell className='!px-4 !py-2'>
                <div class="flex items-center">
                  <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2 whitespace-nowrap"></div>
                  <span className='whitespace-nowrap'>No Report</span>
                </div>
              </Table.Cell>
              <Table.Cell className='!px-4 !py-2'>Romand</Table.Cell>
              <Table.Cell className='!px-4 !py-2'>$4.50</Table.Cell>
              <Table.Cell className='!px-4 !py-2'>10%</Table.Cell>
              <Table.Cell className='!px-4 !py-2'>
                <DeleteButtonPopup />
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
              <Table.Cell className='!px-4 !py-2'>
                <div class="flex items-center">
                  <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2 whitespace-nowrap"></div>
                  <span className='whitespace-nowrap'>No Report</span>
                </div>
              </Table.Cell>
              <Table.Cell className='!px-4 !py-2'>Romand</Table.Cell>
              <Table.Cell className='!px-4 !py-2'>$4.50</Table.Cell>
              <Table.Cell className='!px-4 !py-2'>10%</Table.Cell>
              <Table.Cell className='!px-4 !py-2'>
                <DeleteButtonPopup />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>

    </>

  );
}

function ReportedTableComponent() {
  return (
    <>
      <div class="flex items-center justify-end space-y-4 md:space-y-0 py-4">
      <label for="table-search" class="sr-only">
        Search
      </label>
      <div class="relative">
        <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            class="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="table-search-users"
          class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search products here...."
        />
      </div>
      </div>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell className='!px-4 !py-2 !whitespace-nowrap'>Product ID</Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2'></Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2 !whitespace-nowrap'>Product name</Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2 !whitespace-nowrap'>Category</Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2 !whitespace-nowrap'>Status</Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2 !whitespace-nowrap'>Vendor</Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2 !whitespace-nowrap'>Price</Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2 !whitespace-nowrap'>Sale</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">View</span>
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
                <span className='line-clamp-1'>Beauty & Care</span>
              </Table.Cell>

              <Table.Cell className='!px-4 !py-2'>
                <div class="flex items-center">
                  <div class="h-2.5 w-2.5 rounded-full bg-red-500 me-2 whitespace-nowrap"></div>
                  <span>Report</span>
                </div>
              </Table.Cell>

              <Table.Cell className='!px-4 !py-2'>Romand</Table.Cell>
              <Table.Cell className='!px-4 !py-2'>$3.50</Table.Cell>
              <Table.Cell className='!px-4 !py-2'>15%</Table.Cell>
              <Table.Cell className='!px-4 !py-2'>
                <Link to="/admin/reported-product-page" href="" className="font-medium text-cyan-600 hover:underline">View</Link>
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
              <Table.Cell className='!px-4 !py-2'>
                <div class="flex items-center">
                  <div class="h-2.5 w-2.5 rounded-full bg-red-500 me-2 whitespace-nowrap"></div>
                  <span>Report</span>
                </div>
              </Table.Cell>
              <Table.Cell className='!px-4 !py-2'>Romand</Table.Cell>
              <Table.Cell className='!px-4 !py-2'>$4.50</Table.Cell>
              <Table.Cell className='!px-4 !py-2'>10%</Table.Cell>
              <Table.Cell className='!px-4 !py-2'>
                {/* <DeleteButtonPopup /> */}
                <a href="" className="font-medium text-cyan-600 hover:underline">View</a>
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
              <Table.Cell className='!px-4 !py-2'>
                <div class="flex items-center">
                  <div class="h-2.5 w-2.5 rounded-full bg-red-500 me-2 whitespace-nowrap"></div>
                  <span>Report</span>
                </div>
              </Table.Cell>
              <Table.Cell className='!px-4 !py-2'>Romand</Table.Cell>
              <Table.Cell className='!px-4 !py-2'>$4.50</Table.Cell>
              <Table.Cell className='!px-4 !py-2'>10%</Table.Cell>
              <Table.Cell className='!px-4 !py-2'>
                {/* <DeleteButtonPopup /> */}
                <a href="" className="font-medium text-cyan-600 hover:underline">View</a>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </>

  );
}


function DeleteButtonPopup() {
  const [openModal, setOpenModal] = useState(false);
  return (<>
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
  </>)
}
