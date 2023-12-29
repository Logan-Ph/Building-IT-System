import { Table } from 'flowbite-react';
import { Button, Modal } from 'flowbite-react';
import { useCallback, useEffect, useState } from 'react';
import { FiAlertTriangle } from "react-icons/fi";
import { Tabs } from "flowbite-react";
import { FaCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Pagination from '../../Components/Pagination';
import { ToastContainer, toast } from 'react-toastify';

export default function AdminManageVendorProduct() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getProducts = useCallback(async () => {
    const res = await axios.get("http://localhost:4000/admin/manage-product/query=", { withCredentials: true });
    setProducts(res.data.products);
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    serachProduct(); // Update the searchTerm state with the current input value
  };

  const serachProduct = useCallback(async () => {
    const res = await axios.get(`http://localhost:4000/admin/manage-product/query=${searchTerm}`, { withCredentials: true });
    setProducts(res.data.products);
  }, [searchTerm])

  useEffect(() => {
    getProducts();
  }, [getProducts])

  return <>
    <ToastContainer
      position="top-center"
      autoClose={10000}
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
        {/* Admin manage customer account */}
        <TableComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm} products={products} handleSubmit={handleSubmit} />
      </div>
    </main>
  </>
}

function TableComponent({ setSearchTerm, products, handleSubmit }) {
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
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell className='!px-4 !py-2 !whitespace-nowrap'>Product ID</Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2'></Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2 !whitespace-nowrap'>Product name</Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2 !whitespace-nowrap'>Category</Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2 !whitespace-nowrap'>Status</Table.HeadCell>
            <Table.HeadCell className='!px-4 !py-2 !whitespace-nowrap'>Price</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">View</span>
            </Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Delete</span>
            </Table.HeadCell>
          </Table.Head>
          <TableProductContent products={products} />
        </Table>
      </div>
    </>
  );
}

function TableProductContent({ products }) {
  const [dataslice, setDataSlice] = useState(products)

  useEffect(() => {
    setDataSlice(products.slice(0, 10))
  }, [products])

  return (
    <>
      <Table.Body className="border-b border-gray-200">
        {dataslice.length !== 0 && dataslice.map((product) => (
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
            <Table.Cell className='!px-4 !py-2'>
              <span className='line-clamp-1'>Beauty & Care</span>
            </Table.Cell>
            <Table.Cell className='!px-4 !py-2'>
              <div class="flex items-center">
                <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2 whitespace-nowrap"></div>
                <span className='whitespace-nowrap'>No Report</span>
              </div>
            </Table.Cell>
            <Table.Cell className='!px-4 !py-2'>${product.price}</Table.Cell>
            <Table.Cell className='!px-4 !py-2'>
              <DeleteButtonPopup productId={product._id} />
            </Table.Cell>
            <Table.Cell className='!px-4 !py-2'>
              <Link to={`/admin/reported-product-page/${product._id}`} href="" className="font-medium text-cyan-600 hover:underline">View</Link>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
        {Math.floor(products.length / 10) > 1 && <Pagination pages={Math.ceil(products.length / 10)} setDataSlice={setDataSlice} data={products} />}
    </>
  )
}

function DeleteButtonPopup({ productId }) {
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const notify = (error) => {
    toast.error(error, {
      position: "top-center",
      autoClose: 5000,
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
      autoClose: 10000,
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
      })
        .catch(er => { setError(er.response.data); setMsg() });
    } catch (error) {
      console.error('Error:', error);
    }
  };

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
              <Button color="gray" onClick={() => { setOpenModal(false); handleDelete() }}>
                Cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
