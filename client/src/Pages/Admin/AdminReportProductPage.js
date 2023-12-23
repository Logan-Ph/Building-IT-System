import "../../css/mangeorder.css";
import ReportInfo from "../../Components/ReportInfo";
import CustomerCard from "../../Components/ProfileCard/CustomerCard";
import VendorCard from "../../Components/ProfileCard/VendorCard";
import ShipperCard from "../../Components/ProfileCard/ShipperCard";
import { Navigate, useParams } from "react-router-dom";
import { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../Context/UserContext";
import OrdersInfo from "../../Components/OrdersInfo";
import { Table } from 'flowbite-react';
import { Button, Modal } from 'flowbite-react';
import { FiAlertTriangle } from "react-icons/fi";
import { Tabs } from "flowbite-react";
import { FaCircle } from "react-icons/fa";
import { MdReportProblem } from "react-icons/md";


export default function ReportedProductPage() {
  const params = useParams()
  const { user, setUser } = useContext(UserContext)
  const [userInfo, setUserInfo] = useState()
  const [orders, setOrders] = useState([])
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get(`http://localhost:4000/admin/${params.id}/report`, { withCredentials: true });
      setUserInfo(res.data.user);
      setOrders(res.data.orders)
      setIsLoading(false)
    } catch (error) {
      setError(error);
      setIsLoading(false)
    }
  }, [params])

  const fetchUser = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:4000/login/success", { withCredentials: true });
      setUser(res.data.user);
      setIsLoading(false)
    } catch (er) {
      setError(er)
      setIsLoading(false)
    }
  }, [setUser])

  useEffect(() => {
    fetchData()
    fetchUser()
  }, [fetchData, fetchUser])


  if (isLoading) {
    return <div>....is loading</div>
  }

  return (
    <>
      <section className="bg-gray-200">
        {/* {user && user.role === "User" && <Navigate to={"/"} replace />}
        {user && user.role === "Vendor" && <Navigate to={"/dashboard"} replace />}
        {error && <Navigate to={"/admin/manage-user"} replace />} */}

        <div className="container mx-auto p-5 xs:px-2 xs:py-5">
          <h1 className="m-5 text-3xl font-light text-center xs:text-md">
            Reported Product Information
          </h1>
          {/* <!-- Vendor --> */}
          <ReportedVendorCard />
        </div>
      </section>
    </>
  );
}


function ReportedVendorCard(){
    return <>
    <div className="p-6 space-y-6 bg-white rounded-lg shadow my-5 xs:p-4">
        
        <div className="flex items-center gap-4 mt-4 xs:gap-3 ">
            <img src={require("../../Components/images/defaultUserImage.png")} className="w-16 h-16 aspect-square object-cover rounded" alt="avatar-img" />
            <div>
                <h2 className="text-2xl font-semibold mb-2 xs:text-md">Rommand</h2>
                <div className="text-md text-gray-500 xs:text-xs">RommandV6isthebest@gmail.com</div>
                <div className="text-md text-gray-500 mb-2 xs:text-xs">0977702769</div>
                <span className="bg-[#000054] text-white text-sm font-medium me-2 px-2.5 py-1 rounded-full">
                {" "}
                <i className="fa-solid fa-shop"></i> Vendor
                </span>
            </div>
        </div>
        <div className="flex items-center mt-3 xs:flex-col xs:items-start">
            <div className="text-md text-black font-medium whitespace-nowrap">Business Address: </div>
            <div className="text-md text-gray-500 mx-2 whitespace-nowrap line-clamp-1 xs:mx-0 xs:text-sm">104 Pho Quang Street, Tan Binh district</div>
        </div>
        <hr className="my-2"/>
        
        <ReportedTableComponent />

        <h1>Reported information in details </h1>
        <div>
            {/* Report Section */}
            <ReportedProductInfo />
        </div>
      </div>
    </>
}


function ReportedTableComponent() {
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
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2 whitespace-nowrap"></div>
                    <span>Report</span>
                  </div>
                </Table.Cell>
  
                <Table.Cell className='!px-4 !py-2'>05-12-2023</Table.Cell>
                <Table.Cell className='!px-4 !py-2'>17:10</Table.Cell>
                <Table.Cell className='!px-4 !py-2'>phamphuocsang5850@gmail.com</Table.Cell>
                <Table.Cell className='!px-4 !py-2'>
                  <DeleteButtonPopup />
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
