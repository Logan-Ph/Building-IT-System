import "swiper/css";
import { useParams } from "react-router-dom"
import { useState, useEffect, useCallback } from 'react'
import axios from "axios"
import recommend from '@algolia/recommend';
import { useRelatedProducts } from '@algolia/recommend-react'
import { Navigate } from 'react-router-dom'
import RelatedProduct from "../Components/RelatedProduct";
import CustomerReview from "../Components/CustomerReview";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductDetailCard from "../Components/ProductDetailCard";
import ProductDetailComment from "../Components/ProductDetailComment";
import { ToastContainer } from "react-toastify";

// import { Hits } from 'react-instantsearch';
// import Hit from '../Components/HitsTemplate';
const recommendClient = recommend('IZX7MYSNRD', 'd8ac69cc1ecc43ac91c32ca6d0fb4305');
const indexName = 'rBuy';

export default function TestingPage() {
  const params = useParams()
  const [product, setProduct] = useState([])
  const [error, setError] = useState()

  const { recommendations } = useRelatedProducts({
    recommendClient,
    indexName,
    objectIDs: [params.id],
    maxRecommendations: 10
  });

  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get(`http://localhost:4000/product/${params.id}`, { withCredentials: true });
      setProduct(res.data.product);
    } catch (error) {
      setError(error);
    }
  }, [params.id])

  useEffect(() => {
    fetchData()
  }, [fetchData])

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
      <section className="text-gray-600 body-font overflow-hidden ">
        <div className="lg:container md:container py-12 px-12 mx-auto mt-10 bg-gray-50 ">
          {/* product card */}
          <ProductDetailCard product={product} />
        </div>
      </section>

      <section className="lg:container md:container mx-auto ">
        <div className="lg:container md:container lg:px-9 md:px-9 sm:px-3 xs:px-4 mx-auto mt-10 bg-gray-50 lg:flex ">
          {/*Comment section */}
          <ProductDetailComment product={product} />
          <div className="flex flex-col">
            {/* comment  */}
            <CustomerReview />
          </div>
        </div>
      </section>

      <div className="lg:container md:container lg:px-12 md:px-12 sm:px-14 xs:px-3 mx-auto mb-10 mt-10 bg-gray-50">
        <div className="lg:py-12 md:py-12 sm:py-8 xs:py-4">
          <h2 className="lg:text-2xl md:text-2xl  sm:xs:text-xl font-bold text-gray-600 mb-8 xs:mb-3 sm:mb-3 ">
            Customers also purchased
          </h2>
          <Swiper
            breakpoints={{
              300: {
                spaceBetween: 7,
                slidesPerView: 3,
              },

              576: {
                spaceBetween: 10,
                slidesPerView: 3,
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
              {/* Realated Product */}
              {!error && recommendations.map(recommendation => (
                <SwiperSlide>
                  <RelatedProduct item={recommendation} />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
}