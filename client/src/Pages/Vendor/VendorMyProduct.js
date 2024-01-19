import { useCallback, useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify'
import { Button, Modal } from 'flowbite-react';
import { FiAlertTriangle } from "react-icons/fi";
import axios from "axios";
import { UserContext } from "../../Context/UserContext";
import Pagination from "../../Components/Pagination";

export default function VendorMyProduct() {
  const [products, setProducts] = useState([])
  const [dataSlice, setDataSlice] = useState([])
  const { user } = useContext(UserContext)
  const [productName, setProductName] = useState('')
  const [category, setCategory] = useState('')


  const handleSearch = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get(`http://localhost:4000/manage-product?product_name=${productName}&category=${category}`, { withCredentials: true });
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    handleSearch(e); // Update the searchTerm state with the current input value
  };

  const fetchProducts = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:4000/manage-product?product_name=${productName}&category=${category}`, { withCredentials: true });
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }, [productName, category]);

  useEffect(() => {
    setDataSlice(products.slice(0, 10));
  }, [products]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (!user) {
    return null;
  }

  const customTheme = {
    "base": "flex flex-col gap-2",
    "tablist": {
      "base": "flex text-center",
      "styles": {
        "default": "flex-wrap border-b border-gray-200 dark:border-gray-200",
        "underline": "flex-wrap -mb-px border-b border-gray-200 dark:border-gray-200",
        "pills": "flex-wrap font-medium text-sm text-gray-500 dark:text-gray-500 space-x-2",
        "fullWidth": "w-full text-sm font-medium divide-x divide-gray-200 shadow grid grid-flow-col dark:divide-gray-200 dark:text-gray-400 rounded-none"
      },
      "tabitem": {
        "base": "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-4 focus:ring-cyan-300 focus:outline-none",
        "styles": {
          "default": {
            "base": "rounded-t-lg",
            "active": {
              "on": "bg-gray-100 text-cyan-600 dark:bg-gray-100 dark:text-cyan-600",
              "off": "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-500 dark:hover:bg-gray-500  dark:hover:text-gray-500"
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
              "on": "p-4 text-gray-900 bg-gray-100 active dark:bg-gray-700 dark:text-white rounded-none",
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
        <div className="container mx-auto my-8 px-4 rounded-lg bg-white shadow p-4">
          <div className="mb-4">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div>
                    <label for="product-name" className="block text-sm">Product Name</label>
                    <input onChange={(e) => setProductName(e.target.value)} type="text" id="product-name" name="product-name" placeholder="Please input at least 2 characters or words" className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    <p className="text-xs text-gray-400"></p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label for="category" className="block text-sm">Category</label>
                    <input onChange={(e) => setCategory(e.target.value)} type="text" id="category" name="category" placeholder="Category" className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
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
                {dataSlice.map((product) => (
                  <tr key={product._id} className="bg-white border-b   hover:bg-white ">
                    {/* ... Table data goes here ... */}
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-900">
                      {product.product_name}
                    </td>
                    <td className="px-6 py-4">
                      ${product.price}
                    </td>
                    <td className="px-6 py-4">
                      {product.stock || 0}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <a href={`/edit-product/${product._id}`} className="font-medium pr-4 text-blue-600 dark:text-blue-600 hover:underline">Edit</a>
                      <DeleteButtonPopup productId={product._id} setProducts={setProducts} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {Math.floor(products.length / 10) >= 1 && <Pagination pages={Math.ceil(products.length / 10)} setDataSlice={setDataSlice} data={products} />}
        </div>
      </div>
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
    error && notify(error)
    msg && success(msg)
  }, [error, msg]);

  const customTheme1 =
  {
    "root": {
      "base": "fixed top-0 right-0 left-0 z-50 h-modal h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
      "show": {
        "on": "flex bg-gray-900 bg-opacity-50 ",
        "off": "hidden"
      },
      "sizes": {
        "sm": "max-w-sm",
        "md": "max-w-md",
        "lg": "max-w-lg",
        "xl": "max-w-xl",
        "2xl": "max-w-2xl",
        "3xl": "max-w-3xl",
        "4xl": "max-w-4xl",
        "5xl": "max-w-5xl",
        "6xl": "max-w-6xl",
        "7xl": "max-w-7xl"
      },
      "positions": {
        "top-left": "items-start justify-start",
        "top-center": "items-start justify-center",
        "top-right": "items-start justify-end",
        "center-left": "items-center justify-start",
        "center": "items-center justify-center",
        "center-right": "items-center justify-end",
        "bottom-right": "items-end justify-end",
        "bottom-center": "items-end justify-center",
        "bottom-left": "items-end justify-start"
      }
    },
    "content": {
      "base": "relative h-full w-full p-4 md:h-auto",
      "inner": "relative rounded-lg bg-white shadow  flex flex-col max-h-[90vh]"
    },
    "body": {
      "base": "p-6 flex-1 overflow-auto",
      "popup": "pt-0"
    },
    "header": {
      "base": "flex items-start justify-between rounded-t  border-b p-5",
      "popup": "p-2 border-b-0",
      "title": "text-xl font-medium text-gray-900 ",
      "close": {
        "base": "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900",
        "icon": "h-5 w-5"
      }
    },
    "footer": {
      "base": "flex items-center space-x-2 rounded-b border-gray-200 p-6 ",
      "popup": "border-t"
    }
  }

  return (
    <>
      <span className="font-medium text-[#E61E2A] hover:underline" onClick={() => setOpenModal(true)}>
        Delete
      </span>
      <Modal theme={customTheme1} show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body theme={customTheme1}>
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
      </Modal>
    </>
  )
}