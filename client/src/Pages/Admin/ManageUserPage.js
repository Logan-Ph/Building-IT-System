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

export default function ManageUserPage() {
  const { user, setUser } = useContext(UserContext)
  const [usersInfo, setUsersInfo] = useState([]);
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
      setUsersInfo(res.data.users);
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
    <div class="container mx-auto my-5">
      {user && user.role === "User" && <Navigate to={"/"} replace />}
      {user && user.role === "Vendor" && <Navigate to={"/dashboard"} replace />}
      {error && <Navigate to={"/login"} replace />}
      <div className="overflow-x-auto">
        <Tabs aria-label="Full width tabs" style="fullWidth">
          <Tabs.Item active title="Customer" icon={HiUserCircle}>
            <UserTable users={usersInfo} usersImage={usersImage} />
          </Tabs.Item>
          <Tabs.Item title="Vendor" icon={FaShoppingBag}>
            <VendorTable vendors={vendors} vendorsImage={vendorsImage} />
          </Tabs.Item>
          <Tabs.Item title="Shipper" icon={HiAdjustments}>
            <ShipperTable shippers={shippers} shippersImage={shippersImage} />
          </Tabs.Item>
          <Tabs.Item title="Reported Account" icon={HiClipboardList}>
            <ReportedTable />
          </Tabs.Item>

          {/* Admin manage product */}
          <Tabs.Item title="Product" icon={AiFillDelete}>
            <AdminManageVendorProduct/>
          </Tabs.Item>
        </Tabs>
      </div>
    </div>
  );
}

function UserTable({ users, usersImage }) {
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
              {users && users
                .filter(user => user.role !== 'Admin')
                .map((user, i) => (
                  <Table.Row className="bg-white">
                    <Table.Cell className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                      <img src={(usersImage[i]) ? `data:image/jpeg;base64,${usersImage[i]}` : require("../../Components/images/defaultUserImage.png")} className="w-16 aspect-square object-cover rounded" alt="" />
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
              <Table.Row className="bg-white">
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
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    </>
  )
}

function VendorTable({ vendors, vendorsImage }) {
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
            {vendors && vendors.map((vendor, i) => (
              <Table.Row className="bg-white">
                <Table.Cell className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                  <img src={(vendorsImage[i]) ? `data:image/jpeg;base64,${vendorsImage[i]}` : require("../../Components/images/defaultUserImage.png")} className="w-16 aspect-square object-cover rounded" alt="" />
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
            <Table.Row className="bg-white">
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
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  </>)
}

function ShipperTable({ shippers, shippersImage }) {
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
            {shippers && shippers.map((shipper, i) => (
              <Table.Row className="bg-white">
                <Table.Cell className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                  <img src={(shippersImage[i]) ? `data:image/jpeg;base64,${shippersImage[i]}` : require("../../Components/images/defaultUserImage.png")} className="w-16 aspect-square object-cover rounded" alt="" />
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
            <Table.Row className="bg-white">
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
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
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