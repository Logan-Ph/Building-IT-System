import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CartContext } from "../Context/CartContext";

export default function ProductCard({ product }) {
    const {cart, setCart} = useContext(CartContext)
    const [error, setError] = useState('')
    const [msg, setMsg] = useState('')

    const notify = useCallback(() => {
        if (error) {
            toast.error(error, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
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
                autoClose: 5000,
                hideProgressBar: false,
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


    const addProduct = async (productId) => {
        error && notify();
        msg && notify();
        try {
            const res = await axios.get(`http://localhost:4000/add-product/${productId}`, { withCredentials: true });
            setCart(res.data.length)
            setMsg(res.data.msg);
            setError('');
        } catch (er) {
            setError(er.response.data.error);
            setMsg('');
        }
    }

    return (<div className="bg-white overflow-hidden group rounded-lg shadow-lg dark:border-gray-700 group" key={product._id}>
        <div className="relative">
            <div className="w">
                <img src={product.image_link} className="object-full h-full w-full xs:w-1/2" alt={product.product_name} />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                <a href={`/product/${product._id}`} className="text-white text-xl w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-800 transition p-2">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </a>
                <a href={`/product/${product._id}`} className="text-white text-xl w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-800 transition p-2">
                    <i className="fa-regular fa-heart"></i>
                </a>
            </div>
        </div>
        <div className="pt-4 pb-3 px-4">
            <a href={`/product/${product._id}`}>
                <h4 className="capitalize font-medium text-md mb-2 text-gray-800 hover:text-primary-900 transition line-clamp-2">{product.product_name}</h4>
            </a>
            <p className="text-lg text-red-500 font-semibold mb-2">${product.price}</p>
            <div className="flex items-center justify-between mb-2">
                <div className="flex gap-1 text-xs text-[#FAC800]">
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i></span>
                </div>
                <div className="text-xs text-gray-500 block" >Rating {product.ratings}</div>
            </div>
        </div>
        <span onClick={() => addProduct(product._id)} className="block w-full py-1 text-center text-md font-semibold text-white bg-red-500 border border-red-500 rounded-b hover:bg-transparent hover:text-red-500 hover:rounded transition">Add to cart</span>
    </div>)
}