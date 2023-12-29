import "../../css/mangeorder.css";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Table } from 'flowbite-react';
import { Button, Modal } from 'flowbite-react';
import { FiAlertTriangle } from "react-icons/fi";


export default function ReportedProductPage() {
  const params = useParams()
  const [product, setProduct] = useState()
  const [vendor, setVendor] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get(`http://localhost:4000/admin/manage-vendor-product/${params.id}`, { withCredentials: true });
      setIsLoading(false)
      setProduct(res.data.product)
      setVendor(res.data.vendor)
    } catch (error) {
      setIsLoading(false)
    }
  }, [params])


  useEffect(() => {
    fetchData()
  }, [fetchData])


  if (isLoading) {
    return <div>....is loading</div>
  }

  return (
    <>
      <section className="bg-gray-200 max-w-full px-4 sm:px-6 lg:px-8 pb-5 w-full">
        <div className="container mx-auto p-5 xs:px-2 xs:py-5">
          <h1 className="m-2 text-xl font-bold text-center xs:text-md">
            Reported Product Information
          </h1>
          {/* <!-- Vendor --> */}
          <ReportedVendorCard vendor={vendor} product={product} />
        </div>
      </section>
    </>
  );
}


function ReportedVendorCard({ vendor, product }) {
  return <>
    <div className="p-6 space-y-6 bg-white rounded-lg shadow my-5 xs:p-4">
      <div className="flex items-center gap-4 mt-4 xs:gap-3 ">
        {(vendor.img ? <img className="inline-block xl:w-10 xl:h-10 lg:w-10 lg:h-10 md:w-8 md:h-8 sm:w-8 sm:h-8 xs:w-5 xs:h-5 rounded-full object-fit ring-2 ring-white"
          src={`data:image/jpeg;base64,${vendor.img}`}
          alt="avatar_img" /> : <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
        </div>)}
        <div>
          <h2 className="text-2xl font-semibold mb-2 xs:text-md">{vendor.businessName}</h2>
          <div className="text-md text-gray-500 xs:text-xs">{vendor.email}</div>
          <div className="text-md text-gray-500 mb-2 xs:text-xs">{vendor.phoneNumber}</div>
          <span className="bg-[#000054] text-white text-sm font-medium me-2 px-2.5 py-1 rounded-full">
            {" "}
            <i className="fa-solid fa-shop"></i> Vendor
          </span>
        </div>
      </div>
      <div className="flex items-center mt-3 xs:flex-col xs:items-start">
        <div className="text-md text-black font-medium whitespace-nowrap">Business Address: </div>
        <div className="text-md text-gray-500 mx-2 whitespace-nowrap line-clamp-1 xs:mx-0 xs:text-sm">{vendor.address}</div>
      </div>
      <hr className="my-2" />
      <ReportedTableComponent product={product} />
      <h1>Reported information in details </h1>
      <div>
        <ReportedProductInfo />
      </div>
    </div>
  </>
}

function ReportedTableComponent({ product }) {
  return (
    <>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell className='!px-4 !py-2 !whitespace-nowrap'>Product ID</Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2'></Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2 !whitespace-nowrap'>Product name</Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2 !whitespace-nowrap'>Status</Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2 !whitespace-nowrap'>Reported_Date</Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2 !whitespace-nowrap'>Reported_Time</Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2 !whitespace-nowrap'>User_Info</Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2 !whitespace-nowrap'></Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">View</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="border-b border-gray-200">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 border-b border-gray-200">
              <Table.Cell className='!px-4 !py-2'>
                <span>{product._id}</span>
              </Table.Cell>
              <Table.Cell className='!px-4 !py-2'>
                <div className='w-[60px] h-[60px]'>
                  <img src={product.image_link} alt="product_img" className='object-fit w-full h-full' />
                </div>
              </Table.Cell>
              <Table.Cell className="!px-4 !py-2 overflow-x-auto">
                <span className='font-medium text-gray-900 '>{product.product_name}</span>
              </Table.Cell>

              <Table.Cell className='!px-4 !py-2'>
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2 whitespace-nowrap"></div>
                  <span>Report</span>
                </div>
              </Table.Cell>

              <Table.Cell className='!px-4 !py-2 '>05-12-2023 (STATIC)</Table.Cell>
              <Table.Cell className='!px-4 !py-2'>17:10 (STATIC)</Table.Cell>
              <Table.Cell className='!px-4 !py-2'>phamphuocsang5850@gmail.com (STATIC)</Table.Cell>
              <Table.Cell className="!px-4 !py-2">
                  <DeleteButtonPopup/>
              </Table.Cell>
            </Table.Row>

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
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2 whitespace-nowrap"></div>
                  <span>Report</span>
                </div>
              </Table.Cell>

              <Table.Cell className='!px-4 !py-2'>06-12-2023</Table.Cell>
              <Table.Cell className='!px-4 !py-2'>16:20</Table.Cell>
              <Table.Cell className='!px-4 !py-2'>tranphamkhanhdoan0112@gmail.com</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </>
  );
}

function ReportedProductInfo() {
  return (
    <>
      <div className="container mx-auto">
        <div>
          <div className="flex py-5">
            <div className="relative inline-block shrink-0">
              <img
                className="w-12 h-12 rounded-full"
                src={require("../../Components/images/defaultUserImage.png")}
                alt="Jese Leos image"
              />
            </div>
            <div className="ms-3 text-sm font-normal">
              <div className="text-md font-semibold text-gray-900">
                Logan Pham
              </div>
              <div className="text-xs font-light mb-2">
                phamphuocsang5850@gmail.com
              </div>
              <div className="text-sm font-normal">
                has reported product: <span>656f070a83e57918414548b9</span>
              </div>
              <div className="text-sm font-semibold text-red-600 mt-2">
                Scam
              </div>
              <div className="text-sm font-normal text-gray-900 my-3">
                I reported this account for posting scamming products. I
                have evidence below
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <img
                    className="object-fill h-full w-full"
                    src="/images/banner1.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="object-fill h-full w-full"
                    src="/images/banner1.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="object-fill h-full w-full"
                    src="/images/banner1.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="object-fill h-full w-full"
                    src="/images/banner1.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-sm text-gray-600 mt-3">05-12-2023 17:10</div>
            </div>
          </div>

          {/* <!-- second --> */}
          <div className="flex py-5 border-t border-gray-300">
            <div className="relative inline-block shrink-0">
              <img
                className="w-12 h-12 rounded-full"
                src={require("../../Components/images/defaultUserImage.png")}
                alt="Jese Leos image"
              />
            </div>
            <div className="ms-3 text-sm font-normal">
              <div className="text-sm font-semibold text-gray-900">
                tpkdoan
              </div>
              <div className="text-xs font-light mb-2">
                tranphamkhanhdoan0112@gmail.com
              </div>
              <div className="text-sm font-normal">
                has reported product: <span>656f070a83e57918414548b9</span>
              </div>
              <div className="text-sm font-semibold text-red-600 mt-2">
                Prohited Item
              </div>
              <div className="text-sm font-normal text-gray-900 my-3">
                I reported this product for low-quality. I
                have evidence below
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <img
                    className="object-fill h-full w-full"
                    src="/images/banner1.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-sm text-gray-600 mt-3">05-12-2023 17:10</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function DeleteButtonPopup(){
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <span className="font-medium text-[#E61E2A] hover:underline" onClick={() => setOpenModal(true)}>
        Delete
      </span>
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
              <Button color="gray" onClick={() => { setOpenModal(false)}}>
                Cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
