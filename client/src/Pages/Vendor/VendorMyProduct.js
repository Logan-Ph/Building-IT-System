import { useCallback, useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Button, Modal } from "flowbite-react";
import { FiAlertTriangle } from "react-icons/fi";
import axios from "axios";
import { UserContext } from "../../Context/UserContext";
import Pagination from "../../Components/Pagination";

export default function VendorMyProduct() {
  const [products, setProducts] = useState([]);
  const [dataSlice, setDataSlice] = useState([]);
  const { user } = useContext(UserContext);
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [numberOfProducts, setNumberOfProducts] = useState(0);

  const getProducts = useCallback(async () => {
    const res = await axios.get(
      `https://building-it-system-server.vercel.app/manage-product?query=${searchTerm}&page=${page}`,
      { withCredentials: true }
    );
    setProducts(res.data.products);
    setNumberOfProducts(res.data.numberOfProducts);
  }, [page]);

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    const res = await axios.get(
      `https://building-it-system-server.vercel.app/manage-product?query=${searchTerm}&page=${page}`,
      { withCredentials: true }
    );
    setProducts(res.data.products);
    setNumberOfProducts(res.data.numberOfProducts);
  };

  // const handleSearch = async (e) => {
  //   e.preventDefault()
  //   try {
  //     const response = await axios.get(`https://building-it-system-server.vercel.app/manage-product?product_name=${productName}&category=${category}`, { withCredentials: true });
  //     setProducts(response.data.products);
  //   } catch (error) {
  //     console.error('Error fetching products:', error);
  //   }
  // }

  // const fetchProducts = useCallback(async () => {
  //   try {
  //     const response = await axios.get(`https://building-it-system-server.vercel.app/manage-product?product_name=${productName}&category=${category}`, { withCredentials: true });
  //     setProducts(response.data.products);
  //   } catch (error) {
  //     console.error('Error fetching products:', error);
  //   }
  // }, [productName, category]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  if (!user) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    handleSearch(e); // Update the searchTerm state with the current input value
  };

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
      <div class="max-w-full px-4 sm:px-6 lg:px-8 bg-gray-100 mb-10 pb-5 w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] overflow-hidden  ">
        <div class="container mx-auto my-8 px-4 rounded-lg bg-white shadow p-4 mb-4">
          <form
            class="flex items-center justify-end space-y-4 md:space-y-0 py-4"
            onSubmit={handleSubmit}
          >
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
          <div class="mb-4 flex justify-between items-center" />
          <div class="relative overflow-x-auto sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-500">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50   dark:text-gray-700">
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
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr
                    key={product._id}
                    className="bg-white border-b   hover:bg-white "
                  >
                    {/* ... Table data goes here ... */}
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-900">
                      {product.product_name}
                    </td>
                    <td className="px-6 py-4">${product.price}</td>
                    <td className="px-6 py-4">{product.stock || 0}</td>
                    <td className="px-6 py-4 text-center">
                      <a
                        href={`/edit-product/${product._id}`}
                        className="font-medium pr-4 text-blue-600 dark:text-blue-600 hover:underline"
                      >
                        Edit
                      </a>
                      <DeleteButtonPopup
                        productId={product._id}
                        setProducts={setProducts}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {Math.floor(numberOfProducts / 10) > 1 && <Pagination pages={Math.ceil(numberOfProducts / 10)} isSetPage={true} setPage={setPage} />}
        </div>
      </div>
    </>
  );
}

function DeleteButtonPopup({ productId, setProducts }) {
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
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
  };

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
  };

  const handleDelete = async () => {
    const apiUrl = `https://building-it-system-server.vercel.app/delete-product/${productId}`;
    try {
      await axios
        .delete(apiUrl, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          setMsg(res.data);
          setError("");
          setProducts((prev) =>
            prev.filter((product) => product._id !== productId)
          );
        })
        .catch((er) => {
          setError(er.response.data);
          setMsg();
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    error && notify(error);
    msg && success(msg);
  }, [error, msg]);

  const customTheme1 = {
    root: {
      base: "fixed top-0 right-0 left-0 z-50 h-modal h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
      show: {
        on: "flex bg-gray-900 bg-opacity-50 ",
        off: "hidden",
      },
      sizes: {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
        "3xl": "max-w-3xl",
        "4xl": "max-w-4xl",
        "5xl": "max-w-5xl",
        "6xl": "max-w-6xl",
        "7xl": "max-w-7xl",
      },
      positions: {
        "top-left": "items-start justify-start",
        "top-center": "items-start justify-center",
        "top-right": "items-start justify-end",
        "center-left": "items-center justify-start",
        center: "items-center justify-center",
        "center-right": "items-center justify-end",
        "bottom-right": "items-end justify-end",
        "bottom-center": "items-end justify-center",
        "bottom-left": "items-end justify-start",
      },
    },
    content: {
      base: "relative h-full w-full p-4 md:h-auto",
      inner: "relative rounded-lg bg-white shadow  flex flex-col max-h-[90vh]",
    },
    body: {
      base: "p-6 flex-1 overflow-auto",
      popup: "pt-0",
    },
    header: {
      base: "flex items-start justify-between rounded-t  border-b p-5",
      popup: "p-2 border-b-0",
      title: "text-xl font-medium text-gray-900 ",
      close: {
        base: "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900",
        icon: "h-5 w-5",
      },
    },
    footer: {
      base: "flex items-center space-x-2 rounded-b border-gray-200 p-6 ",
      popup: "border-t",
    },
  };

  return (
    <>
      <span
        className="font-medium text-[#E61E2A] hover:underline"
        onClick={() => setOpenModal(true)}
      >
        Delete
      </span>
      <Modal
        theme={customTheme1}
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body theme={customTheme1}>
          <div className="text-center">
            <FiAlertTriangle className="mx-auto mb-2 h-10 w-10 text-[#FAC800]" />
            <h3 className="mb-5 text-lg font-normal text-gray-900">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => {
                  setOpenModal(false);
                  handleDelete();
                }}
              >
                Yes, I'm sure
              </Button>
              <Button
                color="gray"
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
