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
  const [usersImage, setUsersImage] = useState([]);
  const [vendorsImage, setVendorsImage] = useState([]);
  const [shippersImage, setShippersImage] = useState([]);
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
      setUsersImage(res.data.usersImage);
      setVendorsImage(res.data.vendorsImage);
      setShippersImage(res.data.shippersImage);
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
            <UserTable users={users} usersImage={usersImage} />
          </Tabs.Item>
          {/* Admin manage vendor account */}
          <Tabs.Item title="Vendor" icon={FaShoppingBag}>
            <VendorTable vendors={vendors} vendorsImage={vendorsImage} />
          </Tabs.Item>
          {/* Admin manage shipper account */}
          <Tabs.Item title="Shipper" icon={HiAdjustments}>
            <ShipperTable shippers={shippers} shippersImage={shippersImage} />
          </Tabs.Item>
          {/* Admin manage reported account */}
          <Tabs.Item title="Reported Account" icon={HiClipboardList}>
            <ReportedTable />
          </Tabs.Item>
          {/* Admin manage product */}
          <Tabs.Item title="Product" icon={AiFillDelete}>
            <AdminManageVendorProduct />
          </Tabs.Item>
        </Tabs>
      </div>
    </div>
  );
}

function UserTable({ users, usersImage }) {
  const [usersSlice, setUsersSlice] = useState([]);

  useEffect(() => {
    setUsersSlice(users.slice(0, 10));
  }, [users]);

  return (
    <>
      <div className="p-4 bg-gray-100">
        <div className="relative overflow-x-auto">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Phone Number</Table.HeadCell>
              <Table.HeadCell>Default Address</Table.HeadCell>
              <Table.HeadCell>Status</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">View</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {usersSlice
                .map((user, i) => (
                  <Table.Row className="bg-white">
                    <Table.Cell className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                      <img src={(usersImage[i]) ? `data:image/jpeg;base64,${usersImage[i]}` : require("../../Components/images/defaultUserImage.png")} className="w-10 h-10 aspect-square object-cover rounded-full" alt="avatar_img" />
                      <div class="ps-3">
                        <div class="text-base font-medium">{user.name}</div>
                        <div class="font-normal text-gray-500">
                          {user.email}
                        </div>
                      </div>
                    </Table.Cell>
                    <Table.Cell>{user.phoneNumber}</Table.Cell>
                    <Table.Cell>{user.address}</Table.Cell>
                    <Table.Cell>
                      <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                        No Report
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <a
                        href={`/admin/${user._id}/report`}
                        className="font-medium text-cyan-600 hover:underline"
                      >
                        View
                      </a>
                    </Table.Cell>
                  </Table.Row>
                ))}
              {/* <Table.Row className="bg-white">
                <Table.Cell className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                  <img
                    class="w-10 h-10 rounded-full"
                    src="/docs/images/people/profile-picture-1.jpg"
                    alt="User"
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
                <Table.Cell>
                  <div class="flex items-center">
                    <div class="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>
                    Reported
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline"
                  >
                    View
                  </a>
                </Table.Cell>
              </Table.Row> */}
            </Table.Body>
          </Table>
        </div>
      </div>
      {Math.floor(users.length / 10) > 1 && <Pagination pages={Math.ceil(users.length / 10)} setUsersSlice={setUsersSlice} users={users} />}
    </>
  )
}

function VendorTable({ vendors, vendorsImage }) {
  const [usersSlice, setUsersSlice] = useState([]);

  useEffect(() => {
    setUsersSlice(vendors.slice(0, 10));
  }, [vendors]);
  return (<>
    <div className="p-4 bg-gray-100">
      <div className="relative overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Business Name</Table.HeadCell>
            <Table.HeadCell>Phone Number</Table.HeadCell>
            <Table.HeadCell>Business Address</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">View</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {usersSlice.map((vendor, i) => (
              <Table.Row className="bg-white">
                <Table.Cell className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                  <img src={(vendorsImage[i]) ? `data:image/jpeg;base64,${vendorsImage[i]}` : require("../../Components/images/defaultUserImage.png")} className="w-10 h-10 aspect-square object-cover rounded-full" alt="avatar_img" />
                  <div class="ps-3">
                    <div class="text-base font-medium">{vendor.businessName}</div>
                    <div class="font-normal text-gray-500">
                      {vendor.email}
                    </div>
                  </div>
                </Table.Cell>
                <Table.Cell>{vendor.phoneNumber}</Table.Cell>
                <Table.Cell>{vendor.address}</Table.Cell>
                <Table.Cell>
                  <div class="flex items-center">
                    <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                    No Report
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <a
                    href={`/admin/${vendor._id}/report`}
                    className="font-medium text-cyan-600 hover:underline"
                  >
                    View
                  </a>
                </Table.Cell>
              </Table.Row>
            ))}
            {/* <Table.Row className="bg-white">
              <Table.Cell className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                <img
                  class="w-10 h-10 rounded-full"
                  src="/docs/images/people/profile-picture-1.jpg"
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
              <Table.Cell>
                <div class="flex items-center">
                  <div class="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>
                  Reported
                </div>
              </Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline"
                >
                  View
                </a>
              </Table.Cell>
            </Table.Row> */}
          </Table.Body>
        </Table>
      </div>
      {Math.floor(vendors.length / 10) > 1 && <Pagination pages={Math.ceil(vendors.length / 10)} setUsersSlice={setUsersSlice} users={vendors} />}
    </div>
  </>)
}

function ShipperTable({ shippers, shippersImage }) {
  const [usersSlice, setUsersSlice] = useState([]);

  useEffect(() => {
    setUsersSlice(shippers.slice(0, 10));
  }, [shippers]);
  return (<>
    <div className="p-4 bg-gray-100">
      <div className="relative overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Phone Number</Table.HeadCell>
            <Table.HeadCell>Address</Table.HeadCell>
            <Table.HeadCell>Distribution Hub</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">View</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {usersSlice.map((shipper, i) => (
              <Table.Row className="bg-white">
                <Table.Cell className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                  <img src={(shippersImage[i]) ? `data:image/jpeg;base64,${shippersImage[i]}` : require("../../Components/images/defaultUserImage.png")} className="w-10 h-10 aspect-square object-cover rounded-full" alt="avatar_img" />
                  <div class="ps-3">
                    <div class="text-base font-medium">{shipper.name}</div>
                    <div class="font-normal text-gray-500">
                      {shipper.email}
                    </div>
                  </div>
                </Table.Cell>
                <Table.Cell>{shipper.phoneNumber}</Table.Cell>
                <Table.Cell>{shipper.address}</Table.Cell>
                <Table.Cell>{shipper.distributionHub}</Table.Cell>
                <Table.Cell>
                  <div class="flex items-center">
                    <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                    No Report
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <a
                    href={`/admin/${shipper._id}/report`}
                    className="font-medium text-cyan-600 hover:underline"
                  >
                    View
                  </a>
                </Table.Cell>
              </Table.Row>
            ))}
            {/* <Table.Row className="bg-white">
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
              <Table.Cell>distribution hub</Table.Cell>
              <Table.Cell>
                <div class="flex items-center">
                  <div class="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>
                  Reported
                </div>
              </Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline"
                >
                  View
                </a>
              </Table.Cell>
            </Table.Row> */}
          </Table.Body>
        </Table>
      </div>
      {Math.floor(shippers.length / 10) > 1 && <Pagination pages={Math.ceil(shippers.length / 10)} setUsersSlice={setUsersSlice} users={shippers} />}
    </div>
  </>)
}

function ReportedTable() {
  return (<>
    <div className="p-4 bg-gray-100">
      <div className="relative overflow-x-auto">
        <div class="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4">
          <div>
            <button
              id="dropdownActionButton"
              data-dropdown-toggle="dropdownAction"
              class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5"
              type="button"
            >
              <span class="sr-only">Action button</span>
              All User
              <svg
                class="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                ></path>
              </svg>
            </button>
            {/* <!-- Dropdown menu --> */}
            <div
              id="dropdownAction"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
              data-popper-reference-hidden=""
              data-popper-escaped=""
              data-popper-placement="bottom"
              style={{
                position: "absolute",
                inset: "0px auto auto 0px",
                margin: "0px",
                transform: "translate3d(0px, 10px, 0px)",
              }}
            >
              <div class="py-1">
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Customer
                </a>
              </div>
              <div class="py-1">
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Vendor
                </a>
              </div>
              <div class="py-1">
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Shipper
                </a>
              </div>
            </div>
          </div>
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
            />
          </div>
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

function Pagination({ pages, setUsersSlice, users }) {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setUsersSlice(users.slice((pageNumber - 1) * 10, pageNumber * 10))
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
                {Array.from({ length: pages }, (_, i) => i + 1).map((pageNumber) => (
                  <span
                    key={pageNumber}
                    className={(pageNumber === currentPage) ? "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" : "relative items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"}
                    href="#"
                    onClick={(event) => {
                      event.preventDefault();
                      handlePageChange(pageNumber);
                      setUsersSlice(users.slice((pageNumber - 1) * 10, pageNumber * 10))
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