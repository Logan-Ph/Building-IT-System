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

export default function ManageUserPage() {
  const { user, setUser } = useContext(UserContext)
  const [users, setUsers] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [shippers, setShippers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const fetchUser = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:4000/login/success", { withCredentials: true })
      setUser(res.data.user);
      setIsLoading(false)
    }
    catch (er) {
      setIsLoading(false)
      setError(er)
    }
  }, [setUser])

  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:4000/admin/manage-user", { withCredentials: true })
      setUsers(res.data.users);
      setVendors(res.data.vendors);
      setShippers(res.data.shippers);
    }
    catch (er) {
      console.log(er);
    }
  }, [])

  useEffect(() => {
    fetchUser();
    fetchData();
  }, [fetchUser, fetchData])

  if (isLoading) {
    return <div>....is loading</div>
  }

  return (
    <div className="max-w-full px-4 sm:px-6 lg:px-8 bg-gray-100 mb-10 pb-5 w-full">
      {user && user.role === "User" && <Navigate to={"/"} replace />}
      {user && user.role === "Vendor" && <Navigate to={"/dashboard"} replace />}
      {error && <Navigate to={"/login"} replace />}
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
  const [dataSlice, setDataSlice] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setDataSlice(filterUsers(data, searchTerm));
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
                      <img src={(dataSlice[i].userImage) ? `data:image/jpeg;base64,${dataSlice[i].userImage}` : require("../../Components/images/defaultUserImage.png")} className="w-10 h-10 aspect-square object-cover rounded-full" alt="avatar_img" />
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
      {Math.floor(data.length / 10) > 1 && <Pagination pages={Math.ceil(data.length / 10)} setDataSlice={setDataSlice} data={data} />}
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

function Pagination({ pages, setDataSlice, data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPageNumbersToShow = 5;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setDataSlice(data.slice((pageNumber - 1) * 10, pageNumber * 10))
  };

  const getPaginationNumbers = () => {
    const numbers = [];
    let start = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
    let end = Math.min(pages, start + maxPageNumbersToShow - 1);
    if (currentPage <= Math.floor(maxPageNumbersToShow / 2)) {
      end = Math.min(pages, maxPageNumbersToShow);
    }
    if (currentPage > pages - Math.floor(maxPageNumbersToShow / 2)) {
      start = Math.max(1, pages - maxPageNumbersToShow + 1);
    }
    for (let i = start; i <= end; i++) {
      numbers.push(i);
    }
    return numbers;
  };

  return (
    <div className="flex items-center justify-end py-3 mt-5">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between lg:justify-end xl:justify-end">
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            {pages > 1 &&
              <>
                <span
                  href="#"
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  onClick={() => { (currentPage - 1) > 0 && handlePageChange(currentPage - 1) }}
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                {getPaginationNumbers().map((pageNumber) => (
                  <span
                    key={pageNumber}
                    className={(pageNumber === currentPage) ? "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" : "relative items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"}
                    href="#"
                    onClick={(event) => {
                      event.preventDefault();
                      handlePageChange(pageNumber);
                      setDataSlice(data.slice((pageNumber - 1) * 10, pageNumber * 10))
                    }}>
                    {pageNumber}
                  </span>
                ))}
                <span
                  href="#"
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  onClick={() => { (currentPage + 1) <= pages && handlePageChange(currentPage + 1) }}
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </span>
              </>
            }
          </nav>
        </div>
      </div>
    </div>
  )
}

function SearchBox({ setSearchTerm }) {
  return (
    <>
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
          placeholder="Search for users"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div></>
  )
}