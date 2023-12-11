import axios from 'axios'
import React, { useState, useEffect, useCallback, useContext } from 'react'
import { ToastContainer } from 'react-toastify'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'react-toastify/dist/ReactToastify.css'
import '../../css/homepage.css'
import Slider from '../../Components/Slider';
import Banner from '../../Components/Banner';
import { UserContext } from '../../Context/UserContext';
import { CartContext } from '../../Context/CartContext';
import ProductCard from '../../Components/ProductCard';
import { Navigate } from 'react-router-dom';
import { UserImageContext } from '../../Context/UserImageContext';

import { Carousel } from 'flowbite-react';



export default function Homepage() {
    const { user, setUser } = useContext(UserContext)
    const { setUserImage } = useContext(UserImageContext)
    const { setCart } = useContext(CartContext)
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchProduct = useCallback(async () => {
        try {
            const res = await axios.get("http://localhost:4000/", { withCredentials: true });
            setProducts(res.data.product);
        } catch (er) {
            console.log(er);
        }
    }, [])

    const fetchUser = useCallback(async () => {
        try {
            const res = await axios.get("http://localhost:4000/login/success", { withCredentials: true });
            setUser(res.data.user);
            setCart(res.data.length)
            setUserImage(res.data.userImage)
            setIsLoading(false);
        } catch (er) {
            console.log(er);
            setIsLoading(false);
        }
    }, [setUser, setCart])

    useEffect(() => {
        fetchProduct();
        fetchUser();
    }, [fetchProduct, fetchUser]);

    if (isLoading) {
        return <div>Loading....</div>
    }


    return (
        <>
            {user && user.role === "Vendor" && <Navigate to={'/dashboard'} replace />}
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

            <section className='bg-gray-50 py-6'>
                <main className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-5">
                    {/* Carousel */}
                    <Slider />

                    {/* Top banner */}
                    <Banner />

                    {/* Category */}
                    <MiddleBanner/>

                    <div className="flex flex-col justify-around pb-32">
                        {/* Trending Product */}
                        <div className="flex flex-row items-center my-6">
                            <div className='w-8 h-8'>
                                <img src={require("../../Components/images/trending.png")} className="object-cover" />
                            </div>
                            <h2 className="xl:ml-2 lg:ml-2 md:ml-1 sm:ml-1 xs:ml-1 col-span-full text-center xs:text-sm sm:text-md md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#E61E2A]">Trending Products</h2>
                        </div>

                        <div className="grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 gap-x-4 gap-y-4">
                            {products.map((product) => (
                                <ProductCard product={product} />
                            ))}
                        </div>

                        <div className='flex flex-col items-center my-10'>
                            <button type="button" class="border-[#FAC800] text-white bg-[#FAC800] bg-gradient-to-r from-red-500 via-red-600 to-yellow-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Explore more</button>
                        </div>
                    </div>

                    
                </main>
            </section>

            {/* <SimpleSlider/> */}

        </>
    )
}

function MiddleBanner(){
    return <>
        <div className='grid grid-cols-2 gap-x-4 xs:overflow-y divide-x-2 xl:grid lg:grid md:grid sm:hidden xs:hidden'>

            <div className="h-80">
                <Carousel>
                <img src={require("../../Components/images/bannerN5.jpg")} alt="banner1" className=' border border-gray-200 shadow-lg' />
                <img src={require("../../Components/images/bannerN6.jpg")} alt="banner2" className=' border border-gray-200 shadow-lg' />
                <img src={require("../../Components/images/bannerN9.jpg")} alt="banner3" className='border border-gray-200 shadow-lg'/>
                </Carousel>
            </div>

            <div className='bg-white grid grid-cols-3 gap-x-4 px-4 py-6'>

                <div className='flex items-center flex-col group cursor-pointer overflow-hidden'>
                    <img src={require("../../Components/images/tv.avif")} alt="tv" 
                        className='w-[100px] h-[100px] object-fit transition duration-300 group-hover:-translate-y-1 scale-95'
                        style={{transformOrigin: "center center"}}/>
                    <div 
                        className="transition duration-300 group-hover:-translate-y-1 mt-2 "
                        style={{transformOrigin: "center center"}}
                    > Household Appliances</div>
                </div>

                <div className='flex items-center flex-col group cursor-pointer overflow-hidden'>
                    <img src={require("../../Components/images/laptop.jpg")} alt="tv" 
                        className='w-[100px] h-[100px] object-fit transition duration-300 group-hover:-translate-y-1 scale-95'
                        style={{transformOrigin: "center center"}}/>
                    <div 
                        className="transition duration-300 group-hover:-translate-y-1 mt-2 "
                        style={{transformOrigin: "center center"}}
                    > Electronics</div>
                </div>

                <div className='flex items-center flex-col group cursor-pointer overflow-hidden'>
                    <img src={require("../../Components/images/fashion.jpg")} alt="tv" 
                        className='w-[100px] h-[100px] object-fit transition duration-300 group-hover:-translate-y-1 scale-95'
                        style={{transformOrigin: "center center"}}/>
                    <div 
                        className="transition duration-300 group-hover:-translate-y-1 mt-2 "
                        style={{transformOrigin: "center center"}}
                    > Fashion</div>
                </div>

                <div className='flex items-center flex-col group cursor-pointer overflow-hidden'>
                    <img src={require("../../Components/images/game.jpg")} alt="tv" 
                        className='w-[100px] h-[100px] object-fit transition duration-300 group-hover:-translate-y-1 scale-95'
                        style={{transformOrigin: "center center"}}/>
                    <div 
                        className="transition duration-300 group-hover:-translate-y-1 mt-2 "
                        style={{transformOrigin: "center center"}}
                    > Toys & Game</div>
                </div>

                <div className='flex items-center flex-col group cursor-pointer overflow-hidden'>
                    <img src={require("../../Components/images/beauty.jpg")} alt="tv" 
                        className='w-[100px] h-[100px] object-fit transition duration-300 group-hover:-translate-y-1 scale-95'
                        style={{transformOrigin: "center center"}}/>
                    <div 
                        className="transition duration-300 group-hover:-translate-y-1 mt-2 "
                        style={{transformOrigin: "center center"}}
                    > Beauty & Care</div>
                </div>

                <div className='flex items-center flex-col group cursor-pointer overflow-hidden'>
                    <img src={require("../../Components/images/enter.jpg")} alt="tv" 
                        className='w-[100px] h-[100px] object-fit transition duration-300 group-hover:-translate-y-1 scale-95'
                        style={{transformOrigin: "center center"}}/>
                    <div 
                        className="transition duration-300 group-hover:-translate-y-1 mt-2 "
                        style={{transformOrigin: "center center"}}
                    > Entertainment</div>
                </div>
            </div>

        </div>

        <div className='bg-white grid grid-cols-3 gap-x-4 px-4 py-6 my-6 xl:hidden lg:hidden md:hidden sm:grid xs:grid'>

            <div className='flex items-center flex-col group cursor-pointer overflow-hidden'>
                <img src={require("../../Components/images/tv.avif")} alt="tv" 
                    className='w-[100px] h-[100px] object-fit transition duration-300 group-hover:-translate-y-1 scale-95'
                    style={{transformOrigin: "center center"}}/>
                <div 
                    className="transition duration-300 group-hover:-translate-y-1 mt-2 xs:line-clamp-1"
                    style={{transformOrigin: "center center"}}
                > Household Appliances</div>
            </div>

            <div className='flex items-center flex-col group cursor-pointer overflow-hidden'>
                <img src={require("../../Components/images/laptop.jpg")} alt="laptop" 
                    className='w-[100px] h-[100px] object-fit transition duration-300 group-hover:-translate-y-1 scale-95'
                    style={{transformOrigin: "center center"}}/>
                <div 
                    className="transition duration-300 group-hover:-translate-y-1 mt-2 "
                    style={{transformOrigin: "center center"}}
                > Electronics</div>
            </div>

            <div className='flex items-center flex-col group cursor-pointer overflow-hidden'>
                <img src={require("../../Components/images/fashion.jpg")} alt="fashion" 
                    className='w-[100px] h-[100px] object-fit transition duration-300 group-hover:-translate-y-1 scale-95'
                    style={{transformOrigin: "center center"}}/>
                <div 
                    className="transition duration-300 group-hover:-translate-y-1 mt-2 "
                    style={{transformOrigin: "center center"}}
                > Fashion</div>
            </div>

            <div className='flex items-center flex-col group cursor-pointer overflow-hidden'>
                <img src={require("../../Components/images/game.jpg")} alt="toys and game" 
                    className='w-[100px] h-[100px] object-fit transition duration-300 group-hover:-translate-y-1 scale-95'
                    style={{transformOrigin: "center center"}}/>
                <div 
                    className="transition duration-300 group-hover:-translate-y-1 mt-2 xs:line-clamp-1"
                    style={{transformOrigin: "center center"}}
                > Toys & Game</div>
            </div>

            <div className='flex items-center flex-col group cursor-pointer overflow-hidden'>
                <img src={require("../../Components/images/beauty.jpg")} alt="beauty and care" 
                    className='w-[100px] h-[100px] object-fit transition duration-300 group-hover:-translate-y-1 scale-95'
                    style={{transformOrigin: "center center"}}/>
                <div 
                    className="transition duration-300 group-hover:-translate-y-1 mt-2 xs:line-clamp-1"
                    style={{transformOrigin: "center center"}}
                > Beauty & Care</div>
            </div>

            <div className='flex items-center flex-col group cursor-pointer overflow-hidden'>
                <img src={require("../../Components/images/enter.jpg")} alt="entertainment" 
                    className='w-[100px] h-[100px] object-fit transition duration-300 group-hover:-translate-y-1 scale-95'
                    style={{transformOrigin: "center center"}}/>
                <div 
                   className="transition duration-300 group-hover:-translate-y-1 mt-2 xs:line-clamp-1"
                   style={{transformOrigin: "center center"}}
                > Entertainment</div>
            </div>

        </div>

    </>
}