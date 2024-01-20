import { Table } from 'flowbite-react';
import { Button, Modal } from 'flowbite-react';
import { useCallback, useContext, useEffect, useState } from 'react';
import { FiAlertTriangle } from "react-icons/fi";
import { Tabs } from "flowbite-react";
import { FaCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Pagination from '../../Components/Pagination';
import { ToastContainer, toast } from 'react-toastify';
import { MdReportProblem } from "react-icons/md";
import { UserContext } from '../../Context/UserContext';
import { LightModeTable } from '../../Components/LightModeTable';

export default function AdminManageVendorProduct() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { user } = useContext(UserContext)
  const [page, setPage] = useState(1);
  const [numberOfProducts, setNumberOfProducts] = useState(0);
  const [activeTab, setActiveTab] = useState("");

  const getProducts = useCallback(async () => {
    const res = await axios.get(`http://localhost:4000/admin/manage-product/?query=${searchTerm}&page=${page}&reported=${activeTab === 1}`, { withCredentials: true });
    setProducts(res.data.products);
    setNumberOfProducts(res.data.numberOfProducts)
  }, [page, activeTab])

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    const res = await axios.get(`http://localhost:4000/admin/manage-product/?query=${searchTerm}&page=${page}&reported=${activeTab === 1}`, { withCredentials: true });
    setProducts(res.data.products);
    setNumberOfProducts(res.data.numberOfProducts)
  };

  useEffect(() => {
    getProducts();
  }, [getProducts])

  if (!user) {
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

  return <>
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      theme="light"
    />
    <main className="max-w-full px-4 sm:px-6 lg:px-8 bg-gray-100 mb-10 pb-5 w-full">
      <div className='mx-auto'>
        <Tabs theme={customTheme} className='dark:bg-white' aria-label="Full width tabs" style="fullWidth" onActiveTabChange={(tab) => { setActiveTab(tab); setSearchTerm("") }}>
          {/* Admin manage customer account */}
          {/* dark:text-white */}
          {/* dark:bg-gray-700 */}
          <Tabs.Item theme={customTheme} color='white' active title="All Products" icon={FaCircle} >
            <TableComponent setSearchTerm={setSearchTerm} products={products} handleSubmit={handleSubmit} setProducts={setProducts} setPage={setPage} numberOfProducts={numberOfProducts} />
          </Tabs.Item>
          <Tabs.Item theme={customTheme} className='dark:bg-white' active title="Reported Product" icon={MdReportProblem}>
            <TableComponent setSearchTerm={setSearchTerm} products={products} handleSubmit={handleSubmit} setProducts={setProducts} setPage={setPage} numberOfProducts={numberOfProducts} />
          </Tabs.Item>
        </Tabs>
      </div>
    </main>
  </>
}

function TableComponent({ setSearchTerm, products, handleSubmit, setProducts, setPage, numberOfProducts }) {
  return (
    <>
      <form class="flex items-center justify-end space-y-4 md:space-y-0 py-4" onSubmit={handleSubmit}>
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
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>
      <div className="overflow-x-auto">
        <LightModeTable hoverable>
          <Table.Head id='TableHeader' className="dark:bg-white">
            {/* dark:bg-gray-700 */}
            <Table.HeadCell className='!px-4 !py-2 !whitespace-nowrap dark:bg-white'>Product ID</Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2 dark:bg-white'></Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2 !whitespace-nowrap dark:bg-white'>Product name</Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2 !whitespace-nowrap dark:bg-white'>Category</Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2 !whitespace-nowrap dark:bg-white'>Price</Table.HeadCell>
            <Table.HeadCell className='dark:bg-white'>
              <span className="sr-only">View</span>
            </Table.HeadCell>
            <Table.HeadCell className='dark:bg-white'>
              <span className="sr-only">Delete</span>
            </Table.HeadCell>
          </Table.Head>
          <TableProductContent products={products} setProducts={setProducts} />
        </LightModeTable>
      </div>
      {Math.floor(numberOfProducts / 10) > 1 && <Pagination pages={Math.ceil(numberOfProducts / 10)} isSetPage={true} setPage={setPage} />}
    </>
  );
}

// dark:hover:bg-gray-600
function TableProductContent({ products, setProducts }) {
  return (
    <>
      <Table.Body className="border-b border-gray-200">
        {products.length !== 0 && products.map((product) => (
          <Table.Row className="dark:hover:bg-gray-200 bg-white dark:border-gray-700 border-b border-gray-200">
            <Table.Cell className='!px-4 !py-2'>
              <span>{product._id}</span>
            </Table.Cell>

            <Table.Cell className='!px-4 !py-2'>
              <div className='w-[60px] h-[60px]'>
                <img src={product.image_link} alt="product_img" className='object-fit w-full h-full scale-90' />
              </div>
            </Table.Cell>

            <Table.Cell className="!px-4 !py-2 overflow-x-auto">
              <span className='line-clamp-1 font-medium text-gray-900 '>{product.product_name}</span>
            </Table.Cell>
            <Table.Cell className='!px-4 !py-2'>
              <span>{product.category}</span>
            </Table.Cell>
            <Table.Cell className='!px-4 !py-2'>${product.price}</Table.Cell>
            <Table.Cell className='!px-4 !py-2'>
              <DeleteButtonPopup productId={product._id} setProducts={setProducts} />
            </Table.Cell>
            <Table.Cell className='!px-4 !py-2'>
              <Link to={`/admin/reported-product-page/${product._id}`} href="" className="font-medium text-cyan-600 hover:underline">View</Link>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </>
  )
}

function DeleteButtonPopup({ productId, setProducts }) {
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const notify = (error) => {
    toast.error(error, {
      position: "top-center",
      autoClose: 200,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      pauseOnHover: false,
      theme: "light",
    });
  }

  const success = (success) => {
    toast.success(success, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      pauseOnHover: false,
      theme: "light",
    });
  }

  const handleDelete = async () => {
    const apiUrl = `http://localhost:4000/delete-product/${productId}`;
    try {
      await axios.delete(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(res => {
        setMsg(res.data)
        setError('')
        setProducts(prev => prev.filter(product => product._id !== productId));
      })
        .catch(er => { setError(er.response.data); setMsg() });

    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    if (openModal) {
      setTimeout(() => {
        const element = document.getElementById('myUniqueModalId').parentNode;
        const classes = element.className.split(' ');
        const newClasses = classes.filter(c => !c.startsWith('dark:bg-gray') && !c.startsWith('dark:hover:bg-gray'));
        element.className = newClasses.join(' ');
      }, 0); // Adjust the delay time as needed
    }
  }, [openModal]);

  useEffect(() => {
    error && notify(error)
    msg && success(msg)
  }, [error, msg]);

  return (
    <>
      <span className="font-medium text-[#E61E2A] hover:underline" onClick={() => setOpenModal(true)}>
        Delete
      </span>
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <div id="myUniqueModalId">
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <FiAlertTriangle className="mx-auto mb-2 h-10 w-10 text-[#FAC800]" />
              <h3 className="mb-5 text-lg font-normal text-gray-900">
                Are you sure you want to delete this product?
              </h3>
              <div className="flex justify-center gap-4">
                <Button color="failure" onClick={() => { setOpenModal(false); handleDelete() }}>
                  Yes, I'm sure
                </Button>
                <Button color="gray" onClick={() => { setOpenModal(false) }}>
                  Cancel
                </Button>
              </div>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </>
  )
}
