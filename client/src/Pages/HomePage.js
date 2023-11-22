import axios from 'axios'
import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import React, { Component } from "react";

export default function Homepage() {
    const [products, setProducts] = useState([])
    const [user, setUser] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchProduct();
        fetchUser()
    }, [])

    const fetchProduct = async () => {
        await axios.get("http://localhost:4000/", { withCredentials: true })
            .then(res => {
                setProducts(res.data.product)
            })
            .catch(er => console.log(er))
    }

    const fetchUser = async () => {
        await axios.get("http://localhost:4000/login/success", { withCredentials: true })
            .then(res => {
                setUser(res.data.user)
                setIsLoading(false)
            })
            .catch(er => {
                console.log(er)
                setIsLoading(false)
            })
    }

    if (isLoading) {
        return <div>Loading....</div>
    }

    console.log(products)

    return (
        <>
            <div className="lg:my-6 xs:my-2 sm:my-2 md:my-4">
                <div id="default-carousel" className="relative w-full" data-carousel="slide">
                    <div className="relative h-60 overflow-hidden rounded-lg md:h-96">

                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={require("../Components/images/banner2.png")} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>

                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={require("../Components/images/banner2.png")} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>

                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={require("../Components/images/banner2.png")} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>

                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={require("../Components/images/banner2.png")} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>

                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={require("../Components/images/banner2.png")} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                    </div>

                    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                    </div>

                    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>

            </div>

            <section className="ml-10 mr-10" >
                <div className='ml-10 mr-10'>
                    <div className="flex flex-col pb-32 w-full ">

                        {/* Top banner */}
                        <div className="my-6 ">
                            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto ">
                                <div className="border border-[#FAC800] rounded-md px-2 py-3 flex items-center justify-around shadow-lg shadow-gray-100 hover:bg-[#fac800e1] w-3/4 transition">
                                    <div className="w-12 h-12">
                                        <img src={require("../Components/images/free.png")} className="object-cover" />
                                    </div>

                                    <div>
                                        <h4 className="font-bold capitalize text-sm md:text-md lg:text-lg text-[#E61E2A] text-start">Free Shipping</h4>
                                        <p className="text-[#000054] text-sm">order over $200</p>
                                    </div>
                                </div>

                                <div className="border border-[#FAC800] rounded-md px-2 py-3 flex  items-center justify-around shadow-lg shadow-gray-100  hover:bg-[#fac800e1] transition w-3/4">
                                    <img src={require("../Components/images/save-money.png")} className="w-12 h-12 object-contain" />
                                    <div>
                                        <h4 className="font-bold capitalize text-sm md:text-md lg:text-lg text-[#E61E2A]">Money Returns</h4>
                                        <p className="text-[#000054] text-sm">30 days money return</p>
                                    </div>
                                </div>

                                <div className="border border-[#FAC800] rounded-md px-2 py-3 flex items-center justify-around shadow-lg shadow-gray-100 hover:bg-[#fac800e1] transition w-3/4">
                                    <div className='w-12 h-12'>
                                        <img src={require("../Components/images/credit-card.png")} className="object-contain" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold capitalize text-sm md:text-md lg:text-lg text-[#E61E2A]">Security Payment</h4>
                                        <p className="text-[#000054] text-sm">Protected by PayPal</p>
                                    </div>
                                </div>

                                <div className="border border-[#FAC800] rounded-md px-2 py-3 flex  items-center justify-around shadow-lg shadow-gray-100 hover:bg-[#fac800e1] transition w-3/4">
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


                        {/* Trending Product */}
                        <div className="flex flex-row items-center my-6">
                            <div className='w-8 h-8'>
                                <img src={require("../Components/images/trending.png")} className="object-cover" />
                            </div>
                            <h2 className="ml-2 col-span-full text-center md:text-2xl text-3xl font-bold text-[#E61E2A]">Trending Products</h2>
                        </div>


                        <div className="grid grid-cols-4 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1  items-center gap-y-16 md:gap-y-14 lg:gap-x-10 sm:gap-x-5 md:gap-x-20 gap-x-10 px-0 sm:px-20 md:px-0 lg:px-0 my-4 mb-5 md:max-w-2xl lg:max-w-7xl">
                            {products.map((product) => (
                                <div className="bg-white overflow-hidden group rounded-lg shadow-lg dark:border-gray-700 group" id={product._id}>
                                    <div className="relative">
                                        <div className="w-full h-[180px]">
                                            <img src={product.image_link} className="object-cover h-full w-full" alt={product.product_name} />
                                        </div>
                                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                                            <a href="#" className="text-white text-xl w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-800 transition p-2">
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                            </a>
                                            <a href="" className="text-white text-xl w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-800 transition p-2">
                                                <i className="fa-regular fa-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="pt-4 pb-3 px-4">
                                        <a href="#">
                                            <h4 className="uppercase font-medium text-md mb-2 text-gray-800 hover:text-primary-900 transition">{product.product_name}</h4>
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
                                    <a href="#" className="block w-full py-1 text-center text-md font-semibold text-white bg-red-500 border border-red-500 rounded-b hover:bg-transparent hover:text-red-500 hover:rounded transition">Add to cart</a>
                                </div>
                            ))}
                            {/* <div className="bg-white overflow-hidden group rounded-lg shadow-lg dark:border-gray-700 group">
                                <div className="relative">
                                    <div className="w-full h-[180px]">
                                        <img src={require("../Components/images/vaccum.jpg")} className="object-cover h-full w-full"/>
                                    </div>
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                                        <a href="#" className="text-white text-xl w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-800 transition p-2">
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </a>
                                        <a href="" className="text-white text-xl w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-800 transition p-2">
                                            <i className="fa-regular fa-heart"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="pt-4 pb-3 px-4">
                                    <a href="#">
                                        <h4 className="uppercase font-medium text-md mb-2 text-gray-800 hover:text-primary-900 transition">Pink Chair</h4>
                                    </a>
                                    <p className="text-lg text-red-500 font-semibold mb-2">$45.00</p>
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex gap-1 text-xs text-[#FAC800]">
                                            <span><i className="fa-solid fa-star"></i></span>
                                            <span><i className="fa-solid fa-star"></i></span>
                                            <span><i className="fa-solid fa-star"></i></span>
                                            <span><i className="fa-solid fa-star"></i></span>
                                            <span><i className="fa-solid fa-star"></i></span>
                                        </div>
                                        <div className="text-xs text-gray-500 block" >Rating 4.8</div>
                                    </div>
                                </div>
                                <a href="#" className="block w-full py-1 text-center text-md font-semibold text-white bg-red-500 border border-red-500 rounded-b hover:bg-transparent hover:text-red-500 hover:rounded transition">Add to cart</a>
                            </div> */}

                            <button type="button" class="border-[#FAC800] text-white bg-[#FAC800] bg-gradient-to-r from-red-500 via-red-600 to-yellow-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Explore more</button>


                        </div>
                    </div>
                </div>
            </section>
            {/* <SimpleSlider/> */}
        </>
    )
}
