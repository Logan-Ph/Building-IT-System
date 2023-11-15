import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Homepage() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        await axios.get("http://localhost:4000/")
            .then(res => setProducts(res.data))
            .catch(er => console.log(er))
    }

    return (
        <>
            {/* <p class="bg-black">
                Hiii
            </p>
            <p>products</p>
            {products.map(product => (
                <>
                    <p>{product.product_name}</p>
                    <img src={product.image_link} alt={product.product_name} />
                    <p>price {product.price}</p>
                    <a href={`http://localhost:3000/product/${product._id}`}>View Product</a>
                </>
            ))} */}
            <section className="bg-gray-100">
                <div className="my-4">
                    <div id="default-carousel" className="relative w-full " data-carousel="slide">
                        {/* <!-- Carousel wrapper --> */}
                        <div className="relative h-96 overflow-hidden rounded-lg md:h-96">
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src={require("../Components/images/banner2.png")} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="banner1" />
                            </div>

                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src={require("../Components/images/banner2.png")} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="banner2" />
                            </div>

                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src={require("../Components/images/banner2.png")} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="banner3" />
                            </div>

                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src={require("../Components/images/banner2.png")} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="banner4" />
                            </div>

                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src={require("../Components/images/banner2.png")} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="banner5" />
                            </div>
                        </div>

                        <div className="absolute z-30 lg:flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse hidden">
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

                <div class="flex flex-col justify-center items-center pb-32">

                    <div class="my-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto justify-center content-center ">
                            <div class="border border-[#FAC800] rounded-md px-2 py-3 flex justify-center items-center gap-8 shadow-lg shadow-gray-100 bg-[#FAC800]">
                                <div class="w-12 h-12">
                                    <img src={require("../Components/images/logo1.png")} class="object-fit" />
                                </div>

                                <div>
                                    <h4 class="font-bold capitalize text-sm md:text-md lg:text-lg text-[#E61E2A] text-start">Free Shipping</h4>
                                    <p class="text-[#000054] text-sm">order over $200</p>
                                </div>
                            </div>

                            <div class="border border-[#FAC800] rounded-md px-2 py-3 flex justify-center items-center gap-8 shadow-lg shadow-gray-100 bg-[#FAC800]">
                                <img src={require("../Components/images/logo1.png")} class="w-12 h-12 object-contain" />
                                <div>
                                    <h4 class="font-bold capitalize text-sm md:text-md lg:text-lg text-[#E61E2A]">Money Returns</h4>
                                    <p class="text-[#000054] text-sm">30 Days money return</p>
                                </div>
                            </div>

                            <div class="border border-[#FAC800] rounded-md px-2 py-3 flex justify-center items-center gap-8 shadow-lg shadow-gray-100 bg-[#FAC800]">
                                <img src={require("../Components/images/logo1.png")} class="w-12 h-12 object-contain" />
                                <div>
                                    <h4 class="font-bold capitalize text-sm md:text-md lg:text-lg text-[#E61E2A]">Security Payment</h4>
                                    <p class="text-[#000054] text-sm">Protected by PayPal</p>
                                </div>
                            </div>

                            <div class="border border-[#FAC800] rounded-md px-2 py-3 flex justify-center items-center gap-8 shadow-lg shadow-gray-100 bg-[#FAC800]">
                                <img src={require("../Components/images/logo1.png")} class="w-12 h-12 object-contain" />
                                <div>
                                    <h4 class="font-bold capitalize text-sm md:text-md lg:text-lg text-[#E61E2A]">24/7 Support</h4>
                                    <p class="text-[#000054] text-sm">Customer support</p>
                                </div>
                            </div>


                        </div>
                    </div>


                    <h2 class="col-span-full text-center md:text-2xl text-3xl font-bold text-white my-6">Trending Products</h2>
                    <div class="grid grid-cols-6 md:grid-cols-4 sm:grid-cols-4 xs:grid-cols-2  items-center justify-items-center gap-y-16 md:gap-y-14 lg:gap-x-20 sm:gap-x-10 gap-x-10 px-10 sm:px-20 md:px-0 lg:px-24 mt-2 mb-5 md:max-w-2xl lg:max-w-7xl">

                        <div class="bg-white overflow-hidden group rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 group">

                            <div class="relative">
                                <div>
                                    <img src={require("../Components/images/logo1.png")} class="object-cover" />
                                </div>
                                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                                    <a href="" class="text-white text-xl w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-gray-800 transition p-2">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </a>
                                    <a href="" class="text-white text-xl w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-gray-800 transition p-2">
                                        <i class="fa-regular fa-heart"></i>
                                    </a>
                                </div>
                            </div>



                            <div class="pt-4 pb-3 px-4">
                                <a href="#">
                                    <h4 class="uppercase font-medium text-md mb-2 text-gray-800 hover:text-primary-900 transition">Pink Chair</h4>
                                </a>
                                <div class="flex items-baseline mb-1 space-x-2">
                                    <p class="text-md text-red-500 font-semibold">$45.00</p>
                                    <p class="text-sm text-gray-500 line-through">$55.00</p>
                                </div>
                                <div class="flex item-center">
                                    <div class="flex gap-1 text-sx text-yellow-400">
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                    </div>
                                    <div class="text-xs text-gray-500 ml-3">(150)</div>
                                </div>
                            </div>
                            <a href="#" class="block w-full py-1 text-center text-md font-semibold text-white bg-red-500 border border-red-500 rounded-b hover:bg-transparent hover:text-red-500 transition">Add to cart</a>

                        </div>

                        <div class="bg-white shadow rounded overflow-hidden group">

                            <div class="relative">
                                <div>
                                    <img src={require("../Components/images/logo1.png")} class="object-cover" />
                                </div>
                                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                                    <a href="" class="text-white text-xl w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-gray-800 transition p-2">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </a>
                                    <a href="" class="text-white text-xl w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-gray-800 transition p-2">
                                        <i class="fa-regular fa-heart"></i>
                                    </a>
                                </div>
                            </div>


                            <div class="pt-4 pb-3 px-4">
                                <a href="#">
                                    <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary-900 transition">Pink Chair</h4>
                                </a>
                                <div class="flex items-baseline mb-1 space-x-2">
                                    <p class="text-xl text-red-500 font-semibold">$45.00</p>
                                    <p class="text-sm text-gray-500 line-through">$55.00</p>
                                </div>
                                <div class="flex item-center">
                                    <div class="flex gap-1 text-sm text-yellow-400">
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                    </div>
                                    <div class="text-xs text-gray-500 ml-3">(150)</div>
                                </div>
                            </div>
                            <a href="#" class="block w-full py-1 text-center text-md font-semibold text-white bg-red-500 border border-red-500 rounded-b hover:bg-transparent hover:text-red-500 transition">Add to cart</a>

                        </div>

                        <div class="bg-white shadow rounded overflow-hidden group">

                            <div class="relative">
                                <div>
                                    <img src={require("../Components/images/logo1.png")} class="object-cover" />
                                </div>
                                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                                    <a href="" class="text-white text-xl w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-gray-800 transition p-2">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </a>
                                    <a href="" class="text-white text-xl w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-gray-800 transition p-2">
                                        <i class="fa-regular fa-heart"></i>
                                    </a>
                                </div>
                            </div>

                            <div class="pt-4 pb-3 px-4">
                                <a href="#">
                                    <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary-900 transition">Pink Chair</h4>
                                </a>
                                <div class="flex items-baseline mb-1 space-x-2">
                                    <p class="text-xl text-red-500 font-semibold">$45.00</p>
                                    <p class="text-sm text-gray-500 line-through">$55.00</p>
                                </div>
                                <div class="flex item-center">
                                    <div class="flex gap-1 text-sm text-yellow-400">
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                    </div>
                                    <div class="text-xs text-gray-500 ml-3">(150)</div>
                                </div>
                            </div>
                            <a href="#" class="block w-full py-1 text-center text-md font-semibold text-white bg-red-500 border border-red-500 rounded-b hover:bg-transparent hover:text-red-500 transition">Add to cart</a>

                        </div>

                        <div class="bg-white shadow rounded overflow-hidden group">

                            <div class="relative">
                                <div>
                                    <img src={require("../Components/images/logo1.png")} class="object-cover" />
                                </div>
                                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                                    <a href="" class="text-white text-xl w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-gray-800 transition p-2">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </a>
                                    <a href="" class="text-white text-xl w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-gray-800 transition p-2">
                                        <i class="fa-regular fa-heart"></i>
                                    </a>
                                </div>
                            </div>



                            <div class="pt-4 pb-3 px-4">
                                <a href="#">
                                    <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary-900 transition">Pink Chair</h4>
                                </a>
                                <div class="flex items-baseline mb-1 space-x-2">
                                    <p class="text-xl text-red-500 font-semibold">$45.00</p>
                                    <p class="text-sm text-gray-500 line-through">$55.00</p>
                                </div>
                                <div class="flex item-center">
                                    <div class="flex gap-1 text-sm text-yellow-400">
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                    </div>
                                    <div class="text-xs text-gray-500 ml-3">(150)</div>
                                </div>
                            </div>
                            <a href="#" class="block w-full py-1 text-center text-md font-semibold text-white bg-red-500 border border-red-500 rounded-b hover:bg-transparent hover:text-red-500 transition">Add to cart</a>

                        </div>

                        <div class="bg-white shadow rounded overflow-hidden group">

<div class="relative">
    <div>
        <img src={require("../Components/images/logo1.png")} class="object-cover" />
    </div>
    <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
        <a href="" class="text-white text-xl w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-gray-800 transition p-2">
            <i class="fa-solid fa-magnifying-glass"></i>
        </a>
        <a href="" class="text-white text-xl w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-gray-800 transition p-2">
            <i class="fa-regular fa-heart"></i>
        </a>
    </div>
</div>



<div class="pt-4 pb-3 px-4">
    <a href="#">
        <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary-900 transition">Pink Chair</h4>
    </a>
    <div class="flex items-baseline mb-1 space-x-2">
        <p class="text-xl text-red-500 font-semibold">$45.00</p>
        <p class="text-sm text-gray-500 line-through">$55.00</p>
    </div>
    <div class="flex item-center">
        <div class="flex gap-1 text-sm text-yellow-400">
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
        </div>
        <div class="text-xs text-gray-500 ml-3">(150)</div>
    </div>
</div>
<a href="#" class="block w-full py-1 text-center text-md font-semibold text-white bg-red-500 border border-red-500 rounded-b hover:bg-transparent hover:text-red-500 transition">Add to cart</a>

</div>

<div class="bg-white shadow rounded overflow-hidden group">

<div class="relative">
    <div>
        <img src={require("../Components/images/logo1.png")} class="object-cover" />
    </div>
    <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
        <a href="" class="text-white text-xl w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-gray-800 transition p-2">
            <i class="fa-solid fa-magnifying-glass"></i>
        </a>
        <a href="" class="text-white text-xl w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-gray-800 transition p-2">
            <i class="fa-regular fa-heart"></i>
        </a>
    </div>
</div>



<div class="pt-4 pb-3 px-4">
    <a href="#">
        <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary-900 transition">Pink Chair</h4>
    </a>
    <div class="flex items-baseline mb-1 space-x-2">
        <p class="text-xl text-red-500 font-semibold">$45.00</p>
        <p class="text-sm text-gray-500 line-through">$55.00</p>
    </div>
    <div class="flex item-center">
        <div class="flex gap-1 text-sm text-yellow-400">
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
        </div>
        <div class="text-xs text-gray-500 ml-3">(150)</div>
    </div>
</div>
<a href="#" class="block w-full py-1 text-center text-md font-semibold text-white bg-red-500 border border-red-500 rounded-b hover:bg-transparent hover:text-red-500 transition">Add to cart</a>

</div>


                    </div>




                    <button type="button" class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-8 mb-8 flex justify-center mx-auto">
                        Explore more
                    </button>



                    <h2 class="col-span-full text-center mt-10 text-2xl mb-10 md:text-3xl font-bold md:mb-8 text-white">On Sale Products</h2>
                    <section class="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 
        items-center justify-items-center gap-y-16 md:gap-y-14 lg:gap-x-20 sm:gap-x-10 gap-x-16 
        px-10 sm:px-20 md:px-0 lg:px-24 mt-2 mb-5 md:max-w-2xl lg:max-w-7xl">

                        <div class="bg-white overflow-hidden group rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 group">

                            <div class="relative">
                                <div>
                                    <img src={require("../Components/images/logo1.png")} class="object-cover" />
                                </div>
                                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                                    <a href="" class="text-white text-xl w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-gray-800 transition p-2">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </a>
                                    <a href="" class="text-white text-xl w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-gray-800 transition p-2">
                                        <i class="fa-regular fa-heart"></i>
                                    </a>
                                </div>
                            </div>

                            <div class="pt-4 pb-3 px-4">
                                <a href="#">
                                    <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary-900 transition">Pink Chair</h4>
                                </a>
                                <div class="flex items-baseline mb-1 space-x-2">
                                    <p class="text-xl text-red-500 font-semibold">$45.00</p>
                                    <p class="text-sm text-gray-500 line-through">$55.00</p>
                                </div>
                                <div class="flex item-center">
                                    <div class="flex gap-1 text-sm text-yellow-400">
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                    </div>
                                    <div class="text-xs text-gray-500 ml-3">(150)</div>
                                </div>
                            </div>
                            <a href="#" class="block w-full py-1 text-center text-md font-semibold text-white bg-red-500 border border-red-500 rounded-b hover:bg-transparent hover:text-red-500 transition">Add to cart</a>

                        </div>

                        <div class="bg-white shadow rounded overflow-hidden group">

                            <div class="relative">
                                <div>
                                    <img src="./images/chair.jpg" class="object-cover" />
                                </div>
                                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                                    <a href="" class="text-white text-xl w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-gray-800 transition p-2">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </a>
                                    <a href="" class="text-white text-xl w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-gray-800 transition p-2">
                                        <i class="fa-regular fa-heart"></i>
                                    </a>
                                </div>
                            </div>

                            <div class="pt-4 pb-3 px-4">
                                <a href="#">
                                    <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary-900 transition">Pink Chair</h4>
                                </a>
                                <div class="flex items-baseline mb-1 space-x-2">
                                    <p class="text-xl text-red-500 font-semibold">$45.00</p>
                                    <p class="text-sm text-gray-500 line-through">$55.00</p>
                                </div>
                                <div class="flex item-center">
                                    <div class="flex gap-1 text-sm text-yellow-400">
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                    </div>
                                    <div class="text-xs text-gray-500 ml-3">(150)</div>
                                </div>
                            </div>
                            <a href="#" class="block w-full py-1 text-center text-md font-semibold text-white bg-red-500 border border-red-500 rounded-b hover:bg-transparent hover:text-red-500 transition">Add to cart</a>

                        </div>

                        <div class="bg-white shadow rounded overflow-hidden group">

                            <div class="relative">
                                <div>
                                    <img src="./images/chair.jpg" class="object-cover" />
                                </div>
                                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                                    <a href="" class="text-white text-xl w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-gray-800 transition p-2">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </a>
                                    <a href="" class="text-white text-xl w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-gray-800 transition p-2">
                                        <i class="fa-regular fa-heart"></i>
                                    </a>
                                </div>
                            </div>

                            <div class="pt-4 pb-3 px-4">
                                <a href="#">
                                    <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary-900 transition">Pink Chair</h4>
                                </a>
                                <div class="flex items-baseline mb-1 space-x-2">
                                    <p class="text-xl text-red-500 font-semibold">$45.00</p>
                                    <p class="text-sm text-gray-500 line-through">$55.00</p>
                                </div>
                                <div class="flex item-center">
                                    <div class="flex gap-1 text-sm text-yellow-400">
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                    </div>
                                    <div class="text-xs text-gray-500 ml-3">(150)</div>
                                </div>
                            </div>
                            <a href="#" class="block w-full py-1 text-center text-md font-semibold text-white bg-red-500 border border-red-500 rounded-b hover:bg-transparent hover:text-red-500 transition">Add to cart</a>

                        </div>

                        <div class="bg-white shadow rounded overflow-hidden group">

                            <div class="relative">
                                <div>
                                    <img src="./images/chair.jpg" class="object-cover" />
                                </div>
                                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                                    <a href="" class="text-white text-xl w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-gray-800 transition p-2">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </a>
                                    <a href="" class="text-white text-xl w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-gray-800 transition p-2">
                                        <i class="fa-regular fa-heart"></i>
                                    </a>
                                </div>
                            </div>

                            <div class="pt-4 pb-3 px-4">
                                <a href="#">
                                    <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary-900 transition">Pink Chair</h4>
                                </a>
                                <div class="flex items-baseline mb-1 space-x-2">
                                    <p class="text-xl text-red-500 font-semibold">$45.00</p>
                                    <p class="text-sm text-gray-500 line-through">$55.00</p>
                                </div>
                                <div class="flex item-center">
                                    <div class="flex gap-1 text-sm text-yellow-400">
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                    </div>
                                    <div class="text-xs text-gray-500 ml-3">(150)</div>
                                </div>
                            </div>
                            <a href="#" class="block w-full py-1 text-center text-md font-semibold text-white bg-red-500 border border-red-500 rounded-b hover:bg-transparent hover:text-red-500 transition">Add to cart</a>

                        </div>

                    </section>
                    <button type="button" class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-8 mb-8 flex justify-center mx-auto">
                        Explore more
                    </button>


                    <h2 class="col-span-full text-center mt-8 mb-8 md:mt-10 text-xl md:text-2xl font-bold md:mb-8 text-white">SHOP BY CATEGORY</h2>

                    <div class="flex flex-row flex-wrap items-center justify-center">
                        <div class="flex flex-row flex-wrap items-center justify-center">
                            <div class="basis-1/3 md:basis-1/4 lg:basis-1/4 relative rounded-md overflow-hidden group shadow-md w-3/4 h-3/4 ">
                                <img src="./images/devices.jpg" class="w-full" />
                                <a href="#" class="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center xs:text-xs xs:text-center md:text-md lg:text-lg  text-white font-bold group-hover:bg-opacity-50">Electronic Devices</a>
                            </div>

                            <div class="basis-1/3 md:basis-1/4 lg:basis-1/4 relative rounded-md overflow-hidden group shadow-md xs:ml-4 md:ml-5 lg:ml-5">
                                <img src="./images/house.jpg" class="w-full" />
                                <a href="#" class="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center xs:text-xs xs:text-center md:text-md lg:text-lg  text-white font-bold group-hover:bg-opacity-50">Household Appliances</a>
                            </div>

                            <div class="basis-1/3 md:basis-1/4 lg:basis-1/4 relative rounded-md overflow-hidden group shadow-md xs:mt-2 md:ml-5 lg:ml-5">
                                <img src="./images/men.jpg" class="w-full" />
                                <a href="#" class="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center xs:text-xs xs:text-center  md:text-md lg:text-lg  text-white font-bold group-hover:bg-opacity-50">Men's Fashion</a>
                            </div>

                            <div class="basis-1/3 md:basis-1/4 lg:basis-1/4 relative rounded-md overflow-hidden group shadow-md xs:ml-4 xs:mt-2 md:mt-4 lg:mt-5">
                                <img src="./images/women.jpg" class="w-full" />
                                <a href="#" class="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center xs:text-xs xs:text-center  md:text-md lg:text-lg  text-white font-bold group-hover:bg-opacity-50">Women's Fashion</a>
                            </div>

                            <div class="basis-1/3 md:basis-1/4 lg:basis-1/4 relative rounded-md overflow-hidden group shadow-md xs:mt-2 md:ml-5 md:mt-4 lg:mt-5 lg:ml-5">
                                <img src="./images/beauty.jpg" class="w-full" />
                                <a href="#" class="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center xs:text-xs xs:text-center md:text-md lg:text-lg  text-white font-bold group-hover:bg-opacity-50">Beauty</a>
                            </div>

                            <div class="basis-1/3 md:basis-1/4 lg:basis-1/4 relative rounded-md overflow-hidden group shadow-md ml-4 xs:mt-2 md:ml-5 md:mt-4 lg:mt-5 lg:ml-5">
                                <img src="./images/book.jpg" class="w-full" />
                                <a href="#" class="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center xs:text-sm  md:text-md lg:text-lg  text-white font-bold group-hover:bg-opacity-50">Entertainment</a>
                            </div>

                        </div>
                    </div>

                </div>

            </section>


        </>
    )
}