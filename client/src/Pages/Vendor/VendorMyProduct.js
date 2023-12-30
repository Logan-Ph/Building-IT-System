import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify'
import axios from "axios";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export default function VendorMyProduct() {
  const [products, setProducts] = useState([])
  const [dataSlice, setDataSlice] = useState([])
  const [error, setError] = useState('')
  const [msg, setMsg] = useState('')

  const notify = (error) => {
    toast.error(error, {
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

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://building-it-system-server-ppt2mxwor-logan-phs-projects.vercel.app/manage-product", { withCredentials: true });
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleDelete = async (productID) => {
    const apiUrl = `https://building-it-system-server-ppt2mxwor-logan-phs-projects.vercel.app/delete-product/${productID}`;
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
    setDataSlice(products.slice(0, 10));
  }, [products]);

  useEffect(() => {
    error && notify(error)
    msg && success(msg)
    fetchProducts();
  }, [error, msg]);

  return (
    <>
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
      <div class=" bg-gray-100 h-auto lg:w-5/6 md:w-2/3 w-3/4 mx-auto lg:px-20 md:mr-32 relative py-20 ">
        <div className="container mx-auto my-8 px-4 rounded-lg bg-white shadow p-4">
          <div className="mb-4">
            <form>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div>
                    <label for="product-name" className="block text-sm">Product Name</label>
                    <input type="text" id="product-name" name="product-name" placeholder="Please input at least 2 characters or words" className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    <p className="text-xs text-gray-400"></p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div>
                      <label for="stock-min" className="block text-sm">Stock Min</label>
                      <input type="number" id="stock-min" name="stock-min" className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                    <div className="text-xl pt-5">-</div>
                    <div>
                      <label for="stock-max" className="block text-sm">Stock Max</label>
                      <input type="number" id="stock-max" name="stock-max" className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label for="category" className="block text-sm">Category</label>
                    <input type="text" id="category" name="category" placeholder="Category" className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <div>
                      <label for="sales-min" className="block text-sm">Sales Min</label>
                      <input type="number" id="sales-min" name="sales-min" className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                    <div className="text-xl pt-5">-</div>
                    <div>
                      <label for="sales-max" className="block text-sm">Sales Max</label>
                      <input type="number" id="sales-max" name="sales-max" className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded">Search</button>
                <button type="reset" className=" border-solid border-2 hover:bg-gray-100 ml-2 px-3 py-1 rounded-md ">Reset</button>
              </div>
            </form>
          </div>
        </div>


        <div class="container mx-auto my-8 px-4 rounded-lg bg-white shadow p-4 mb-4">
          <div class="mb-4 flex justify-between items-center">
            <div class="flex space-x-2 text-md font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
              <ul class="flex flex-wrap -mb-px">
                <li class="me-2">
                  <a href="#" class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">All</a>
                </li>
                <li class="me-2">
                  <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Live</a>
                </li>
                <li class="me-2">
                  <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Sold Out</a>
                </li>
                <li class="me-2">
                  <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Reviewing</a>
                </li>
                <li class="me-2">
                  <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Delisted</a>
                </li>
              </ul>
            </div>
            <div class="space-x-2">
              <button class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"> + Add a new product</button>
            </div>
          </div>

          <div class="relative overflow-x-auto sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Stock
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Sales
                  </th>
                  <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataSlice.map((product) => (
                  <tr key={product._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    {/* ... Table data goes here ... */}
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {product.product_name}
                    </td>
                    <td className="px-6 py-4">
                      ${product.price}
                    </td>
                    <td className="px-6 py-4">
                      {product.stock}
                    </td>
                    <td className="px-6 py-4">
                      {product.description}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <a href={`/edit-product/${product._id}`} className="font-medium pr-4 text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                      <button onClick={() => handleDelete(product._id)} className="font-medium text-red-600 dark:red-blue-500 hover:underline">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {Math.floor(products.length / 10) >= 1 && <Pagination pages={Math.ceil(products.length / 10)} setDataSlice={setDataSlice} data={products} />}
      </div>
    </>
  )
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
    let start = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 10));
    let end = Math.min(pages, start + maxPageNumbersToShow - 1);
    if (currentPage <= Math.floor(maxPageNumbersToShow / 10)) {
      end = Math.min(pages, maxPageNumbersToShow);
    }
    if (currentPage > pages - Math.floor(maxPageNumbersToShow / 10)) {
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
                    className={(pageNumber === currentPage) ? "relative z-2 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" : "relative items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"}
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
