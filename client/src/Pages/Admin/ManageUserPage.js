import axios from "axios";
import { Tabs } from "flowbite-react";
import { Table } from "flowbite-react";
import { useCallback, useContext, useEffect, useState } from "react";
import { HiUserCircle, HiTruck } from "react-icons/hi";
import { FaShoppingBag } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import Pagination from "../../Components/Pagination";
import SearchBox from "../../Components/SearchBox";
import { UserContext } from "../../Context/UserContext";
import { LightModeTable } from "../../Components/LightModeTable";

export default function ManageUserPage() {
  const [users, setUsers] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [shippers, setShippers] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const { user } = useContext(UserContext)

  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:4000/admin/manage-user", { withCredentials: true })
      setUsers(res.data.users);
      setVendors(res.data.vendors);
      setShippers(res.data.shippers);
      setIsLoading(false)
    }
    catch (error) {
      setError(error);
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData();
  }, [fetchData])


  if (isLoading || !user) {
    return null
  }

  const customTheme = {
    "base": "flex flex-col gap-2",
    "tablist": {
      "base": "flex text-center",
      "styles": {
        "default": "flex-wrap border-b border-gray-200 dark:border-gray-200",
        "underline": "flex-wrap -mb-px border-b border-gray-200 dark:border-gray-200",
        "pills": "flex-wrap font-medium text-sm text-gray-500 dark:text-gray-500 space-x-2",
        "fullWidth": "w-full text-sm font-medium divide-x divide-gray-200 shadow grid grid-flow-col dark:divide-gray-200  rounded-none"
      },
      "tabitem": {
        "base": "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-400 focus:ring-4 focus:ring-cyan-300 focus:outline-none",
        "styles": {
          "default": {
            "base": "rounded-t-lg",
            "active": {
              "on": "bg-gray-100 text-cyan-600 dark:bg-gray-100 dark:text-cyan-600",
              "off": "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-500 dark:hover:bg-gray-50  dark:hover:text-gray-600"
            }
          },
          "underline": {
            "base": "rounded-t-lg",
            "active": {
              "on": "text-cyan-600 rounded-t-lg border-b-2 border-cyan-600 active dark:text-cyan-600 dark:border-cyan-600",
              "off": "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-600"
            }
          },
          "pills": {
            "base": "",
            "active": {
              "on": "rounded-lg bg-cyan-600 text-white",
              "off": "rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900"
            }
          },
          "fullWidth": {
            "base": "ml-0 first:ml-0 w-full rounded-none flex",
            "active": {
              "on": "p-4 text-gray-900 bg-gray-100 active dark:bg-gray-100 dark:text-gray-900 rounded-none",
              "off": "bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-gray-700 dark:bg-white dark:hover:bg-gray-50 rounded-none"
            }
          }
        },
        "icon": "mr-2 h-5 w-5"
      }
    },
    "tabitemcontainer": {
      "base": "",
      "styles": {
        "default": "",
        "underline": "",
        "pills": "",
        "fullWidth": ""
      }
    },
    "tabpanel": "py-3",






    "root": {
      "base": "w-full text-left text-sm text-gray-500 dark:text-gray-500",
      "shadow": "absolute bg-white dark:bg-white w-full h-full top-0 left-0 rounded-lg drop-shadow-md -z-10",
      "wrapper": "relative"
    },
    "body": {
      "base": "group/body",
      "cell": {
        "base": "group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg px-6 py-4"
      }
    },
    "head": {
      "base": "group/head text-xs uppercase text-gray-700 dark:text-gray-700",
      "cell": {
        "base": "group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg bg-gray-50 dark:bg-gray-50 px-6 py-3"
      }
    },
    "row": {
      "base": "group/row",
      "hovered": "hover:bg-gray-50 dark:hover:bg-gray-50",
      "striped": "odd:bg-white even:bg-gray-50 odd:dark:bg-white even:dark:bg-gray-50"
    }
  };

  return (
    <div className="max-w-full px-4 sm:px-6 lg:px-8 bg-gray-100 mb-10 pb-5 w-full">
      {error && <Navigate to={"/"} replace />}
      <div>
        <Tabs theme={customTheme} aria-label="Full width tabs" style="fullWidth">
          {/* Admin manage customer account */}
          <Tabs.Item theme={customTheme} active title="Customer" icon={HiUserCircle}>
            <UserTable data={users} customTheme={customTheme} type="user" />
          </Tabs.Item>
          {/* Admin manage vendor account */}
          <Tabs.Item theme={customTheme} title="Vendor" icon={FaShoppingBag}>
            <UserTable data={vendors} customTheme={customTheme} type="vendor" />
          </Tabs.Item>
          {/* Admin manage shipper account */}
          <Tabs.Item theme={customTheme} title="Shipper" icon={HiTruck}>
            <UserTable data={shippers} customTheme={customTheme} type="shipper" />
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

function UserTable({ data, dataImage, type, customTheme }) {
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
            <Table.HeadCell className="dark:bg-white">Name</Table.HeadCell>
            <Table.HeadCell className="dark:bg-white">Phone Number</Table.HeadCell>
            <Table.HeadCell className="dark:bg-white">Default Address</Table.HeadCell>
            <Table.HeadCell className="dark:bg-white">Status</Table.HeadCell>
            <Table.HeadCell className="dark:bg-white">View</Table.HeadCell>
          </>
        );
      case 'shipper':
        return (
          <>
            <Table.HeadCell className="dark:bg-white">Name</Table.HeadCell>
            <Table.HeadCell className="dark:bg-white">Phone Number</Table.HeadCell>
            <Table.HeadCell className="dark:bg-white">Default Address</Table.HeadCell>
            <Table.HeadCell className="dark:bg-white">Distribution Hub</Table.HeadCell>
            <Table.HeadCell className="dark:bg-white">Status</Table.HeadCell>
            <Table.HeadCell className="dark:bg-white">View</Table.HeadCell>
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
            <Table.Cell >{item.phoneNumber}</Table.Cell>
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
        <div className="relative">
          <div class="flex items-center justify-end flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4">
            <SearchBox setSearchTerm={setSearchTerm} />
          </div>
          <LightModeTable hoverable>
            <Table.Head id="TableHeader">
              {getHeadCellContent()}
            </Table.Head>
            {dataSlice.map((item, i) => (
              <>
                <Table.Body className="divide-y">
                  <Table.Row className="dark:hover:bg-gray-200 bg-white dark:border-gray-700 border-b border-gray-200">
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
                      <div class="flex items-center whitespace-nowrap">
                        <div class={`h-2.5 w-2.5 rounded-full me-2 ${item.reportCount ? "bg-red-500" : "bg-green-500"}`}></div>
                        {item.reportCount ? "Reported" : "No Report"}
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <Link
                        to={`/admin/${item._id}/report`}
                        className="font-medium text-cyan-600 hover:underline"
                      >
                        View
                      </Link>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </>
            ))}
          </LightModeTable>
        </div>
      </div>
      {!searchTerm && Math.ceil(data.length / 10) > 1 && <Pagination pages={Math.ceil(data.length / 10)} setDataSlice={setDataSlice} data={data} />}
    </>
  )
}

