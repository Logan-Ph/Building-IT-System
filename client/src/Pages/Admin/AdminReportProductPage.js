import "../../css/mangeorder.css";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Table } from 'flowbite-react';

export default function ReportedProductPage() {
  const params = useParams()
  const [product, setProduct] = useState()
  const [vendor, setVendor] = useState()
  const [reports, setReports] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get(`http://localhost:4000/admin/manage-vendor-product/${params.id}`, { withCredentials: true });
      setIsLoading(false)
      setProduct(res.data.product)
      setVendor(res.data.vendor)
      setReports(res.data.reports)
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
      <section className="bg-gray-200">
        <div className="container mx-auto p-5 xs:px-2 xs:py-5">
          <h1 className="m-5 text-3xl font-light text-center xs:text-md">
            Reported Product Information
          </h1>
          {/* <!-- Vendor --> */}
          <ReportedVendorCard vendor={vendor} product={product} reports={reports} />
        </div>
      </section>
    </>
  );
}


function ReportedVendorCard({ vendor, product, reports }) {
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
        <ReportedProductInfo reports={reports} />
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
                <span className='line-clamp-1 font-medium text-gray-900 '>{product.product_name}</span>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </>
  );
}

function ReportedProductInfo({ reports }) {
  return (
    <>
      <div className="container mx-auto">
        <div>
          {reports.map(report => {
            const date = new Date(report.date)
            const formtatedDate = date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
            return (
              <div className="flex py-5">
                <div className="relative inline-block shrink-0">
                  {report.user.img ? <img className="inline-block xl:w-10 xl:h-10 lg:w-10 lg:h-10 md:w-8 md:h-8 sm:w-8 sm:h-8 xs:w-5 xs:h-5 rounded-full object-fit ring-2 ring-white"
                    src={`data:image/jpeg;base64,${report.user.img}`}
                    alt="avatar_img" /> : <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                  </div>}
                </div>
                <div className="ms-3 text-sm font-normal">
                  <div className="text-md font-semibold text-gray-900">
                    {report.user.name}
                  </div>
                  <div className="text-xs font-light mb-2">
                    {report.user.email}
                  </div>
                  <div className="text-sm font-semibold text-red-600 mt-2">
                    {report.title}
                  </div>
                  <div className="text-sm font-normal text-gray-900 my-3">
                    {report.description}
                  </div>
                  <div className="text-sm text-gray-600 mt-3">{formtatedDate}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}
