import axios from 'axios'
import React, { useState, useEffect, useCallback } from 'react'
import { Carousel } from 'flowbite-react';
import { ToastContainer, toast } from 'react-toastify'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'react-toastify/dist/ReactToastify.css'
import '../css/homepage.css'
import { signal } from '@preact/signals';

export const cart = signal(0);
const setCart = (length) => {
    cart.value = length;
}

export default function Homepage() {
    const [products, setProducts] = useState([])
    const [error, setError] = useState('')
    const [msg, setMsg] = useState('')
    const [isLoading, setIsLoading] = useState(true)

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

    const fetchProduct = async () => {
        try {
            const res = await axios.get("http://localhost:4000/", { withCredentials: true });
            setProducts(res.data.product);
            setIsLoading(false);
        } catch (er) {
            console.log(er);
        }
    }

    const fetchUser = async () => {
        try {
            const res = await axios.get("http://localhost:4000/login/success", { withCredentials: true });
            // user.value = res.data.user;
            // setCart(res.data.length)
            console.log(res.data.length)
            // console.log(user.value);
        } catch (er) {
            console.log(er);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchProduct();
        fetchUser();
    }, []);

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
            // setCart(res.data.length)
            setMsg(res.data.msg);
            setError('');
        } catch (er) {
            setError(er.response.data.error);
            setMsg('');
        }
    }

    if (isLoading) {
        return <div>Loading....</div>
    }

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={10000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
            />
            <div className="lg:my-6 xs:my-2 sm:my-2 md:my-4">
                <Carousel>
                    <img
                        src={require("../Components/images/banner2.png")}
                        alt="..."
                        className='legend md-h-[50px]'
                    />
                    <img
                        src={require("../Components/images/banner2.png")}
                        alt="..."
                        className='legend'
                    />
                    <img
                        src={require("../Components/images/BIS-banner-1.png")}
                        alt="..."
                        className='legend'
                    />

                </Carousel>

            </div>

            <section className="ml-10 mr-10" >
                <div className="flex flex-col justify-around pb-32 w-full ">

                    {/* Top banner */}
                    <div className="my-6 ">
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:gap-y-4 mx-auto">
                            <div>
                                <div className="mx-auto border border-[#FAC800] rounded-md px-2 py-3 flex items-center justify-around shadow-lg shadow-gray-100 hover:bg-[#fac800e1] w-3/4 transition">
                                    <div className="w-12 h-12">
                                        <img src={require("../Components/images/free.png")} className="object-cover" />
                                    </div>

                                    <div>
                                        <h4 className="font-bold capitalize text-sm md:text-md lg:text-lg text-[#E61E2A] text-start">Free Shipping</h4>
                                        <p className="text-[#000054] text-sm">order over $200</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="mx-auto border border-[#FAC800] rounded-md px-2 py-3 flex  items-center justify-around shadow-lg shadow-gray-100  hover:bg-[#fac800e1] transition w-3/4">
                                    <img src={require("../Components/images/save-money.png")} className="w-12 h-12 object-contain" />
                                    <div>
                                        <h4 className="font-bold capitalize text-sm md:text-md lg:text-lg text-[#E61E2A]">Money Returns</h4>
                                        <p className="text-[#000054] text-sm">30 days money return</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="mx-auto border border-[#FAC800] rounded-md px-2 py-3 flex items-center justify-around shadow-lg shadow-gray-100 hover:bg-[#fac800e1] transition w-3/4">
                                    <div className='w-12 h-12'>
                                        <img src={require("../Components/images/credit-card.png")} className="object-contain" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold capitalize text-sm md:text-md lg:text-lg text-[#E61E2A]">Security Payment</h4>
                                        <p className="text-[#000054] text-sm">Protected by PayPal</p>
                                    </div>
                                </div>
                            </div>


                            <div>
                                <div className="mx-auto border border-[#FAC800] rounded-md px-2 py-3 flex  items-center justify-around shadow-lg shadow-gray-100 hover:bg-[#fac800e1] transition w-3/4">
                                    <div className='w-12 h-12'>
                                        <img src={require("../Components/images/delivery.png")} className=" object-contain" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold capitalize text-sm md:text-md lg:text-lg text-[#E61E2A]">24/7 Support</h4>
                                        <p className="text-[#000054] text-sm">Customer support</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Trending Product */}
                    <div className="flex flex-row items-center my-6">
                        <div className='w-8 h-8'>
                            <img src={require("../Components/images/trending.png")} className="object-cover" />
                        </div>
                        <h2 className="ml-2 col-span-full text-center xs:text-md sm:text-xl md:text-2xl text-3xl font-bold text-[#E61E2A]">Trending Products</h2>
                    </div>


                    <div className="grid xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-x-4 gap-y-8 sm:gap-x-10 sm:gap-y-10  items-center">
                        {products.map((product) => (
                            <div className="bg-white overflow-hidden group rounded-lg shadow-lg dark:border-gray-700 group" key={product._id}>
                                <div className="relative">
                                    <div className="w-full h-[220px] md:h-[200px] sm:h-[180px] xs:h-[160px]">
                                        <img src={product.image_link} className="object-full h-full w-full" alt={product.product_name} />
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
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col items-center my-10'>
                        <button type="button" class="border-[#FAC800] text-white bg-[#FAC800]   bg-gradient-to-r from-red-500 via-red-600 to-yellow-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Explore more</button>
                    </div>
                </div>
            </section>
            {/* <SimpleSlider/> */}
        </>
    )
}
