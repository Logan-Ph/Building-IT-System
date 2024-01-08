import axios from 'axios';
import { useCallback, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import aa from 'search-insights';

export default function SRProductCard({ hit, user }) {
  const [quantity, setQuantity] = useState(1)
  const [error, setError] = useState('')
  const [msg, setMsg] = useState('')
  const { setCart } = useContext(CartContext)

  const addProduct = async (productId) => {
    notify()
    try {
      const res = await axios.get(`http://localhost:4000/add-product/${productId}`, { params: { quantity: quantity }, withCredentials: true });
      setMsg(res.data.msg);
      setError('');
      setQuantity(1);
      setCart(res.data.cart);
    } catch (er) {
      setError(er.response.data.error);
      setMsg('');
    }
  }

  const notify = useCallback(() => {
    if (error) {
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

    if (msg) {
      toast.success(msg, {
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
  }, [error, msg]);

  useEffect(() => {
    if (error || msg) {
      notify();
    }
  }, [error, msg, notify]);

  const handleClickedObjectIDsAfterSearch = (hit) => {
    aa('clickedObjectIDsAfterSearch', {
      userToken: user ? user._id : null,
      eventName: 'Product clicked after search',
      index: 'rBuy',
      queryID: hit.__queryID,
      objectIDs: [hit.objectID],
      positions: [hit.__position],
    });
  }

  const handleAddedToCartObjectIDsAfterSearch = (hit) => {
    aa('addedToCartObjectIDsAfterSearch', {
      userToken: user ? user._id : null,
      eventName: 'Product added after Search',
      index: 'rBuy',
      queryID: hit.__queryID,
      objectIDs: [hit.objectID],
      objectData: [{ price: hit.price, quantity: 1 }],
      value: hit.price,
      currency: 'USD',
    });
    addProduct(hit.objectID);
  }

  const handlePurchasedObjectIDsAfterSearch = (hit) => {
    aa('purchasedObjectIDsAfterSearch', {
      userToken: user ? user._id : null,
      eventName: "Product purchased after search",
      index: 'rBuy',
      objectIDs: [hit.objectID],
      objectData: [{ price: hit.price, quantity: 1 }],
      value: hit.price,
      currency: 'USD',
    });
    buyProduct(hit);
  }

  const buyProduct = async (product) => {
    if (user === null) {
      toast.error("You need to login first", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        pauseOnHover: false,
        theme: "light",
      });
      return;
    }
    product.checked = true
    product.quantity = 1
    localStorage.setItem('products', JSON.stringify([product]));
    window.location.href = '/checkout'
  }

  return <>
    <div className="bg-white shadow-md p-4">
      <Link className="group relative" to={`/product/${hit.objectID}`} onClick={() => { handleClickedObjectIDsAfterSearch(hit) }}>
        <div className="w-full h-[220px] md:h-[200px] sm:h-[180px] xs:h-[160px] sm:w-3/4 sm:mx-auto xs:w-3/4 xs:mx-auto">
          <img src={hit.image_link} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-fit object-center scale-75 sm:scale-75 xs:scale-75" />
        </div>
        <hr className='border border-gray-200 mt-4'></hr>
        <div className="mt-4 flex items-center">
          <div>
            <h3 className="text-md text-gray-900 line-clamp-1">
              {/* <span> */}
              <span aria-hidden="true" className="absolute inset-0"></span>
              {hit.product_name}
              {/* </span> */}
            </h3>
            <p className="mt-1 text-md font-bold text-[#E61E2A]">${hit.price}</p>
            <p className="mt-1 text-sm font-light text-gray-700">{hit.category}</p>
            <p className="text-xs font-medium text-[#fac800f1] mt-4">Rating: {hit.ratings}</p>
          </div>
        </div>
      </Link>
      <span className="block w-full my-4 py-1 text-center text-sm font-semibold text-white bg-red-500 rounded-lg border border-red-500  hover:bg-transparent hover:text-red-500 hover:rounded-lg transition" onClick={() => handlePurchasedObjectIDsAfterSearch(hit)}>Buy Now</span>

      <span className="block w-full my-4 py-1 text-center text-sm font-semibold text-white  bg-[#EAB308]  border rounded-lg  border-[#EAB308]  hover:bg-transparent hover:text-[#EAB308] hover:rounded-lg transition" onClick={() => handleAddedToCartObjectIDsAfterSearch(hit)}>Add to Cart</span>
    </div>
  </>
}