import axios from "axios";
import { Tabs } from "flowbite-react";
import { Table } from "flowbite-react";
import { useCallback, useContext, useEffect, useState } from "react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { AiFillDelete } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
import { UserContext } from "../../Context/UserContext";
import { Navigate } from "react-router-dom";
import AdminManageVendorProduct from "./AdminManageVendorProduct";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import Pagination from "../../Components/Pagination";
import SearchBox from "../../Components/SearchBox";

export default function ManageUserPage() {
  const { user } = useContext(UserContext)
  const [users, setUsers] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [shippers, setShippers] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:4000/admin/manage-user", { withCredentials: true })
      setUsers(res.data.users);
      console.log(res.data.users)
      setVendors(res.data.vendors);
      setShippers(res.data.shippers);
      setIsLoading(false)
    }
    catch (er) {
      console.log(er);
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData();
  }, [fetchData])

  if (isLoading) {
    return <div>....is loading</div>
  }

  return (
    <div className="max-w-full px-4 sm:px-6 lg:px-8 bg-gray-100 mb-10 pb-5 w-full">
      {user && user.role === "User" && <Navigate to={"/"} replace />}
      {user && user.role === "Vendor" && <Navigate to={"/dashboard"} replace />}
      <div className="overflow-x-auto">
        <Tabs aria-label="Full width tabs" style="fullWidth">
          {/* Admin manage customer account */}
          <Tabs.Item active title="Customer" icon={HiUserCircle}>
            <UserTable data={users} type="user" />
          </Tabs.Item>
          {/* Admin manage vendor account */}
          <Tabs.Item title="Vendor" icon={FaShoppingBag}>
            <UserTable data={vendors} type="vendor" />
          </Tabs.Item>
          {/* Admin manage shipper account */}
          <Tabs.Item title="Shipper" icon={HiAdjustments}>
            <UserTable data={shippers} type="shipper" />
          </Tabs.Item>
          {/* Admin manage reported account */}
          {/* <Tabs.Item title="Reported Account" icon={HiClipboardList}>
            <UserTable data={shippers} type="reported user" />
          </Tabs.Item> */}
          {/* Admin manage product */}
          <Tabs.Item title="Product" icon={AiFillDelete}>
            <AdminManageVendorProduct />
          </Tabs.Item>
        </Tabs>
      </div>
    </div>
  );
}

function filterUsers(users, searchTerm) {
  const regex = new RegExp(searchTerm, 'i');
  return users.filter(user => regex.test(user.email) || regex.test(user.name) || regex.test(user.phoneNumber) || regex.test(user.address) || regex.test(user.distributionHub));
}

function UserTable({ data, dataImage, type }) {
  const [dataSlice, setDataSlice] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    (searchTerm) ? setDataSlice(filterUsers(data, searchTerm)) : setDataSlice(data.slice(0, 10))
  }, [searchTerm, data])

  useEffect(() => {
    setDataSlice(data.slice(0, 10));
  }, [data, dataImage]);

  const getHeadCellContent = () => {
    switch (type) {
      case 'vendor':
      case 'user':
        return (
          <>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Phone Number</Table.HeadCell>
            <Table.HeadCell>Default Address</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>View</Table.HeadCell>
          </>
        );
      case 'shipper':
        return (
          <>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Phone Number</Table.HeadCell>
            <Table.HeadCell>Default Address</Table.HeadCell>
            <Table.HeadCell>Distribution Hub</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>View</Table.HeadCell>
          </>
        );
      default:
        return null;
    }
  }

  const getCellContent = (item) => {
    switch (type) {
      case 'user':
        return (
          <>
            <Table.Cell>{item.phoneNumber}</Table.Cell>
            <Table.Cell>{item.address}</Table.Cell>
          </>
        );
      case 'vendor':
        return (
          <>
            <Table.Cell>{item.phoneNumber}</Table.Cell>
            <Table.Cell>{item.address}</Table.Cell>
          </>
        );
      case 'shipper':
        return (
          <>
            <Table.Cell>{item.phoneNumber}</Table.Cell>
            <Table.Cell>{item.address}</Table.Cell>
            <Table.Cell>{item.distributionHub}</Table.Cell>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="p-4 bg-gray-100">
        <div className="relative overflow-x-auto">
          <div class="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4">
            <SearchBox setSearchTerm={setSearchTerm} />
          </div>
          <Table hoverable>
            <Table.Head>
              {getHeadCellContent()}
            </Table.Head>
            {dataSlice.map((item, i) => (
              <>
                <Table.Body className="divide-y">
                  <Table.Row className="bg-white">
                    <Table.Cell className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                      <img src={(dataSlice[i].img) ? `data:image/jpeg;base64,${dataSlice[i].img}` : require("../../Components/images/defaultUserImage.png")} className="w-10 h-10 aspect-square object-cover rounded-full" alt="avatar_img" />
                      <div class="ps-3">
                        <div class="text-base font-medium">{item.name}</div>
                        <div class="font-normal text-gray-500">
                          {item.email}
                        </div>
                      </div>
                    </Table.Cell>
                    {getCellContent(item)}
                    <Table.Cell>
                      <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                        No Report
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <a
                        href={`/admin/${item._id}/report`}
                        className="font-medium text-cyan-600 hover:underline"
                      >
                        View
                      </a>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </>
            ))}
          </Table>
        </div>
      </div>
      {!searchTerm && Math.ceil(data.length / 10) > 1 && <Pagination pages={Math.ceil(data.length / 10)} setDataSlice={setDataSlice} data={data} />}
    </>
  )
}

function ReportedTable() {
  return (<>
    <div className="p-4 bg-gray-100">
      <div className="relative overflow-x-auto">
        <div class="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4">
          <SearchBox />
        </div>
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Phone Number</Table.HeadCell>
            <Table.HeadCell>Address</Table.HeadCell>
            <Table.HeadCell>Role</Table.HeadCell>
            <Table.HeadCell>Previous Reports</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">View</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white">
              <Table.Cell className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                <img
                  class="w-10 h-10 rounded-full"
                  src={require("../../Components/images/defaultUserImage.png")}
                  alt="Jese image"
                />
                <div class="ps-3">
                  <div class="text-base font-medium">Name</div>
                  <div class="font-normal text-gray-500">
                    email@gmail.com
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>091234567</Table.Cell>
              <Table.Cell>abc Street</Table.Cell>
              <Table.Cell>Customer</Table.Cell>
              <Table.Cell>0</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300"
                >
                  View Report
                  <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-yellow-800 bg-yellow-200 rounded-full">
                    1
                  </span>
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white">
              <Table.Cell className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                <img
                  class="w-10 h-10 rounded-full"
                  src={require("../../Components/images/defaultUserImage.png")}
                  alt="Jese image" />
                <div class="ps-3">
                  <div class="text-base font-medium">Name</div>
                  <div class="font-normal text-gray-500">
                    email@gmail.com
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>091234567</Table.Cell>
              <Table.Cell>abc Street</Table.Cell>
              <Table.Cell>Vendor</Table.Cell>
              <Table.Cell>2</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300"
                >
                  View Report
                  <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-yellow-800 bg-yellow-200 rounded-full">
                    3
                  </span>
                </a>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  </>)
}
