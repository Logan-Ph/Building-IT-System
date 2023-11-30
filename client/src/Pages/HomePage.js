import axios from 'axios'
import React, { useState, useEffect, useCallback, useContext } from 'react'
import { ToastContainer } from 'react-toastify'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'react-toastify/dist/ReactToastify.css'
import '../css/homepage.css'
import ProductCard from '../Components/ProductCard';
import Slider from '../Components/Slider';
import Banner from '../Components/Banner';
import { UserContext } from '../Context/UserContext';
import { CartContext } from '../Context/CartContext';

export default function Homepage() {
    const { setUser } = useContext(UserContext)
    const { setCart } = useContext(CartContext)
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchProduct = useCallback(async () => {
        try {
            const res = await axios.get("http://localhost:4000/", { withCredentials: true });
            setProducts(res.data.product);
            setIsLoading(false);
        } catch (er) {
            console.log(er);
        }
    }, [])

    const fetchUser = useCallback(async () => {
        try {
            const res = await axios.get("http://localhost:4000/login/success", { withCredentials: true });
            setUser(res.data.user);
            setCart(res.data.length)
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
                <Slider />
            </div>

            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col justify-around pb-32 w-full ">
                    {/* Top banner */}
                    <Banner />
                    {/* Trending Product */}
                    <div className="flex flex-row items-center my-6">
                        <div className='w-8 h-8'>
                            <img src={require("../Components/images/trending.png")} className="object-cover" />
                        </div>
                        <h2 className="ml-2 col-span-full text-center xs:text-md sm:text-xl md:text-2xl text-3xl font-bold text-[#E61E2A]">Trending Products</h2>
                    </div>

                    <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-x-4 gap-y-8 sm:gap-x-10 sm:gap-y-10  items-center">
                        {products.map((product) => (
                            <ProductCard product={product} />
                        ))}
                    </div>
                    <div className='flex flex-col items-center my-10'>
                        <button type="button" class="border-[#FAC800] text-white bg-[#FAC800] bg-gradient-to-r from-red-500 via-red-600 to-yellow-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Explore more</button>
                    </div>
                </div>
            </main>
            {/* <SimpleSlider/> */}
        </>
    )
}
