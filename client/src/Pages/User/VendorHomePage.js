import { useCallback, useContext, useEffect, useState } from "react";
import { Rating } from "flowbite-react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import VendorNav from "../../Components/VendorNav";
import axios from "axios";
import { Link, Navigate, useParams } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import LoadingPage from "./LoadingPage";
import { CartContext } from "../../Context/CartContext";
import { toast } from "react-toastify";
export default function VendorHomePage() {
  const [follow, setFollow] = useState();
  const params = useParams()
  const [vendor, setVendor] = useState()
  const [numberOfProducts, setNumberOfProducts] = useState(0)
  const [numberOfFollowers, setNumberOfFollwers] = useState(0)
  const { user } = useContext(UserContext)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [trendingProducts, setTrendingProducts] = useState([])
  const { setCart } = useContext(CartContext)

  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get(`http://localhost:4000/vendor/${params.id}`, { withCredentials: true })
      setVendor(res.data.vendor)
      setNumberOfFollwers(res.data.numberOfFollowers)
      setNumberOfProducts(res.data.numberOfProducts)
      setTrendingProducts(res.data.trendingProducts)
      setIsLoading(false)
    } catch (error) {
      setError(error)
    }
  }, [params.id])

  useEffect(() => {
    fetchData();
  }, [fetchData, follow])

  const addProduct = async (productId) => {
    try {
      const res = await axios.get(`http://localhost:4000/add-product/${productId}`, { params: { quantity: 1 }, withCredentials: true });
      notifySuccess(res.data.msg);
      setCart(res.data.cart)
    } catch (er) {
      notifyError(er.response.data.error)
    }
  }

  const notifySuccess = (msg) => {
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

  const notifyError = (error) => {
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

  if (isLoading) {
    return <LoadingPage />
  }

  return (
    <>
      {error && <Navigate to={"/"} replace />}
      <section class="my-5">
        {/* <!-- Vendor Profile and Nav section --> */}
        <VendorNav
          user={user}
          vendor={vendor}
          activeTab={"HOME"}
          coverPhoto={vendor.coverPhoto ? vendor.coverPhoto : ""}
          numberOfFollowers={numberOfFollowers}
          numberOfProducts={numberOfProducts}
          setNumberOfFollwers={setNumberOfFollwers}
          follow={follow}
          setFollow={setFollow}
        />
        {/*  */}
        {/* Top Product */}
        <div className="lg:container md:container lg:px-12 md:px-12 sm:px-14 xs:px-3 mx-auto mb-10 bg-gray-50">
          <div className="lg:py-12 md:py-12 sm:py-8 xs:py-4">
            <h2 className="lg:text-2xl md:text-2xl  sm:xs:text-xl font-bold text-gray-600 mb-8 xs:mb-3 sm:mb-3 ">
              Top Products
            </h2>

            <Swiper
              breakpoints={{
                300: {
                  spaceBetween: 7,
                  slidesPerView: 2,
                },

                576: {
                  spaceBetween: 10,
                  slidesPerView: 2,
                },

                898: {
                  spaceBetween: 20,
                  slidesPerView: 4,
                },
                1200: {
                  spaceBetween: 15,
                  slidesPerView: 5,
                },
                1259: {
                  spaceBetween: 15,
                  slidesPerView: 5,
                },
              }}
            >
              <div className="mt-64">
                {/* Top Product */}
                  {/* Product Card */}
                  {trendingProducts.map((product) => (
                    <SwiperSlide>
                      <div className="bg-white overflow-hidden group rounded-lg shadow-lg dark:border-gray-700 group xs:mx-auto">
                        <div className="relative">
                          <Link
                            className="flex justify-center items-center w-full h-[220px] md:h-[200px] sm:h-[180px] xs:h-[160px] xs:w-3/4 xs:mx-auto"
                            to={`/product/${product.objectID}`}
                          >
                            <img
                              src={product.image_link}
                              alt=""
                              className="p-4 object-full lg:md:scale-75"
                            />
                          </Link>
                          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-4 sm:gap-2 opacity-0 group-hover:opacity-100 transition">
                            <Link
                              to={`/product/${product.objectID}`}
                              className="text-white text-xl w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-800 transition p-2"
                            >
                              <i className="fa-solid fa-magnifying-glass"></i>
                            </Link>
                            <Link
                              to={`/product/${product.objectID}`}
                              className="text-white text-xl w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-800 transition p-2"
                            >
                              <i className="fa-regular fa-heart"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="pt-4 pb-3 px-4">
                          <Link to={`/product/${product.objectID}`}>
                            <h4
                              className="capitalize font-medium xl:text-md lg:text-[15px] md:text-sm sm:text-sm xs:text-xs mb-1 text-gray-800 hover:text-primary-900 transition line-clamp-2 "
                              href={`/product/${product.objectID}`}
                            >
                              {" "}
                              {product.product_name}
                            </h4>
                          </Link>
                          <div className="px-1">
                            <div className="flex items-center justify-center">
                              <Rating>
                                <p className="text-md text-gray-500 lg:md:text-[14px] sm:xs:text-[12px] font-medium">
                                  Ratings: {product.ratings}
                                </p>
                                <Rating.Star className="xs:sm:w-3 lg:md:w-4 h-auto ml-1" />
                              </Rating>
                            </div>
                            <p className="lg:md:text-lg sm:xs:text-sm text-red-500 font-semibold mb-2 text-center">
                              ${product.price}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </div>
            </Swiper>

            {/* Product Card */}
            {/* <div class="grid md:grid-cols-5">
              {trendingProducts.map((product) => (
                <div>
                  <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                    <span href="#">
                      <img
                        class="p-8 rounded-t-lg"
                        src={product.image_link}
                        alt="product"
                      />
                    </span>
                    <div class="px-5 pb-5">
                      <Link to="#">
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                          {product.product_name}
                        </h5>
                      </Link>
                      <div class="flex items-center mt-2.5 mb-5">
                        <div class="flex items-center space-x-1 rtl:space-x-reverse">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              class="w-4 h-4 text-yellow-300"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                              key={i}
                              fillRule={i < Math.floor(product.ratings + 0.5) ? "currentColor" : "none"}
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                          ))}
                        </div>
                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                          {product.ratings}
                        </span>
                      </div>
                      <div class="flex items-center justify-between">
                        <span class="text-3xl font-bold text-gray-900 dark:text-white">
                          ${product.price}
                        </span>
                        <span
                          onClick={() => addProduct(product._id)}
                          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Add to cart
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>

        {/* <!-- Banner --> */}
        <div class="md:container mx-auto grid grid-cols-4 gap-4">
          {vendor.smallBanner1 && (
            <div class="md:col-span-2 col-span-4">
              <img
                class="object-fill h-full w-full"
                src={vendor.smallBanner1}
                alt=""
              />
            </div>
          )}
          {vendor.smallBanner2 && (
            <div class="md:col-span-2 col-span-4">
              <img
                class="object-fill h-full w-full"
                src={vendor.smallBanner2}
                alt=""
              />
            </div>
          )}

          {vendor.bigBanner && (
            <div class="col-span-4">
              <img
                class="object-fill h-full w-full"
                src={vendor.bigBanner}
                alt=""
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
