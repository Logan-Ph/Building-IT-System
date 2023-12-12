'use client';
import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CartContext } from "../Context/CartContext";
import { Rating } from 'flowbite-react';
export default function ProductDetailCard({ product, vendorName }) {
    const [quantity, setQuantity] = useState(1)
    const { setCart } = useContext(CartContext)
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
            const res = await axios.get(`http://localhost:4000/add-product/${productId}`, { params: { quantity: quantity }, withCredentials: true });
            setCart(res.data.length)
            setMsg(res.data.msg);
            setError('');
            setQuantity(1);
        } catch (er) {
            setError(er.response.data.error);
            setMsg('');
        }
    }
    return (
        <div className="lg:w-full lg:px-14 sm:px-0 md:px-2 mx-auto flex flex-wrap">
            <img
                alt="ecommerce"
                className="lg:w-[550px] lg:h-[510px] md:h-auto sm:h-auto xs:h-auto  rounded-lg shadow-md hover:shadow-2xl transition duration-500 mx-auto"
                src={product.image_link}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <nav className="flex mb-5">
                    <ol className="flex items-center">
                        <li className="text-left">
                            <div className="-m-1">
                                <a
                                    href="/"
                                    className="rounded-md p-1 text-md font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                                >
                                    {" "}
                                    Home{" "}
                                </a>
                            </div>
                        </li>

                        <li className="text-left">
                            <div className="flex items-center">
                                <span className="mx-2 text-gray-400">/</span>
                                <div className="-m-1">
                                    <a
                                        href="\search\query=\category=\price="
                                        className="rounded-md p-1 text-md font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                                    >
                                        {" "}
                                        Products{" "}
                                    </a>
                                </div>
                            </div>
                        </li>

                        <li className="text-left">
                            <div className="flex items-center">
                                <span className="mx-2 text-gray-400">/</span>
                                <div className="-m-1">
                                    <a
                                        href={`/vendor/${product.owner}/home`}
                                        className="rounded-md p-1 text-md font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                                        aria-current="page"
                                    >
                                        {" "}
                                        {vendorName}{" "}
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ol>
                </nav>
                <div></div>
                <div className="">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">
                        {vendorName}
                    </h2>
                    <h1 className="text-gray-900 lg:text-3xl sm:text-2xl xs:text-2xl  font-medium mb-3 ">
                        {product.product_name}
                    </h1>

                    <div className="flex mb-2 ">
                    <Rating size="md">
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star filled={false} />
      </Rating>
                    </div>

                    <span className=" font-medium lg:text-3xl md:text-3xl sm:text-2xl xs:text-2xl text-slate-700">
                        ${product.price}.00
                    </span>
                    <hr class="my-4 w-full border-gray-300" />
                    {product.description && <div className="text-xl xs:text-lg font-bold mt-2">
                        Product Description:
                    </div>
                    }
                    {product.description && <p className="leading-relaxed xs:text-sm ">
                        {product.description}
                    </p>}
                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                        <div>
                            <form class="max-w-xs mx-auto">
                                <label
                                    for="quantity-input"
                                    class="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                                >
                                    Choose quantity:
                                </label>
                                <div class="relative flex items-center max-w-[8rem]">
                                    <button
                                        type="button"
                                        id="decrement-button"
                                        data-input-counter-decrement="quantity-input"
                                        class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                                        onClick={() => setQuantity((prev) => prev > 1 ? prev - 1 : 1)}
                                    >
                                        <svg
                                            class="w-3 h-3 text-gray-900 dark:text-white"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 18 2"
                                        >
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M1 1h16"
                                            />
                                        </svg>
                                    </button>
                                    <input
                                        type="text"
                                        id="quantity-input"
                                        data-input-counter
                                        data-input-counter-min="1"
                                        data-input-counter-max="50"
                                        aria-describedby="helper-text-explanation"
                                        class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="999"
                                        value={quantity}
                                        required
                                    />
                                    <button
                                        type="button"
                                        id="increment-button"
                                        data-input-counter-increment="quantity-input"
                                        class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                                        onClick={() => { setQuantity((prev) => prev + 1) }}
                                    >
                                        <svg
                                            class="w-3 h-3 text-gray-900 dark:text-white"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 18 18"
                                        >
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M9 1v16M1 9h16"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <button className="rounded-full w-12 h-12 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-10 mt-4">
                            <svg
                                fill="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="flex">
                        <button onClick={() => addProduct(product._id)} className="w-48 h-12 xs:text-[15px] text-lg text-black font-medium bg-[#EAB308] border-0  focus:outline-none hover:bg-[#EAA000] rounded-lg">
                            Add to Cart
                        </button>
                        <button className="w-48 h-12 xs:text-[15px] text-lg ml-10 text-black font-medium bg-[#FF9209] border-0 focus:outline-none hover:bg-[#FF6C22] rounded-lg">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}