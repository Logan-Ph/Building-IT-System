"use client";

import { Rating } from "flowbite-react";
import RelatedProduct from "../Components/RelatedProduct";
import CustomerReview from "../Components/CustomerReview";
import { Label, Textarea } from "flowbite-react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function TestingPage() {
  function textMessage() {
    document.getElementById("customer_review").className = "block";
    console.log("hahaha");
  }
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden ">
        <div className="lg:container md:container py-12 px-12 mx-auto mt-10 bg-gray-50 ">
          <div className="lg:w-full lg:px-14 sm:px-0 md:px-2 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-auto lg:h-auto md:h-auto sm:h-auto xs:h-auto object-cover object-center rounded-lg shadow-md hover:shadow-2xl transition duration-500 mx-auto"
              src="https://m.media-amazon.com/images/I/716mmFt0PGL._AC_UL320_.jpg"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <nav className="flex mb-5">
                <ol className="flex items-center">
                  <li className="text-left">
                    <div className="-m-1">
                      <a
                        href="#"
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
                          href="#"
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
                          href="#"
                          className="rounded-md p-1 text-md font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                          aria-current="page"
                        >
                          {" "}
                          Coffee{" "}
                        </a>
                      </div>
                    </div>
                  </li>
                </ol>
              </nav>
              <div></div>
              <div className="">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  VENDOR
                </h2>
                <h1 className="text-gray-900 lg:text-3xl sm:text-md xs:text-md title-font font-medium mb-3 ">
                  Havells Ambrose 1200mm Energy Saving with Remote Control 5
                  Star Decorative BLDC Ceiling Fan (Gold Mist Wood, Pack of 1)
                </h1>

                <div className="flex mb-2 ">
                  <span className="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5 xs:w-4 xs:h-4 text-[#222160]"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5 xs:w-4 xs:h-4 text-[#222160]"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5 xs:w-4 xs:h-4 text-[#222160]"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5 xs:w-4 xs:h-4 text-[#222160]"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5 xs:w-4 xs:h-4 text-[#222160]"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <div></div>
                    <div className="px-3 ps-4 lg:text-lg md:text-md sm:text-sm xs:text-sm font-medium hover:underline ml-3">
                      4 Reviews
                    </div>
                    <a
                      href="#"
                      class="px-3 lg:text-lg md:text-md sm:text-sm xs:text-sm font-medium  border-slate-500  border-s-[1px] md:mb-0 hover:underline "
                    >
                      14 Sold
                    </a>
                  </span>
                </div>

                <span className=" font-medium lg:text-3xl md:text-3xl sm:text-2xl xs:text-xl text-slate-700">
                  $58.00
                </span>
                <hr class="my-4 w-full border-gray-300" />
                <div className="text-xl xs:text-lg font-bold mt-2">
                  Product Description:
                </div>
                <p className="leading-relaxed xs:text-sm ">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas, accusantium.
                </p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div>
                    <form class="max-w-xs mx-auto">
                      <label
                        for="quantity-input"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Choose quantity:
                      </label>
                      <div class="relative flex items-center max-w-[8rem]">
                        <button
                          type="button"
                          id="decrement-button"
                          data-input-counter-decrement="quantity-input"
                          class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
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
                          value="5"
                          required
                        />
                        <button
                          type="button"
                          id="increment-button"
                          data-input-counter-increment="quantity-input"
                          class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
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
                  <button className="w-48 h-12 xs:text-[12.5px]  text-black font-medium bg-[#EAB308] border-0 py-2 px-6 focus:outline-none hover:bg-[#EAA000] rounded-lg">
                    Add to Cart
                  </button>
                  <button className="w-48 h-12 xs:text-[12.5px]  ml-10 text-black font-medium bg-[#FF9209] border-0 py-2 px-6 focus:outline-none hover:bg-[#FF6C22] rounded-lg">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:container md:container mx-auto ">
        <div className="lg:container md:container lg:px-9 md:px-9 sm:px-3 xs:px-4 mx-auto mt-10 bg-gray-50 lg:flex ">
          <div className="w-full lg:md:py-12 md:pr-2 xs:py-3">
            <p className="lg:text-2xl md:text-2xl xs:text-xl font-semibold mb-2">
              Customer Reviews
            </p>
            <Rating className="mb-2 ">
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star filled={false} />
              <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                4.95 out of 5
              </p>
            </Rating>
            <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
              1,745 global ratings
            </p>
            <Rating.Advanced percentFilled={70} className="mb-2 ">
              5 star
            </Rating.Advanced>
            <Rating.Advanced percentFilled={17} className="mb-2">
              4 star
            </Rating.Advanced>
            <Rating.Advanced percentFilled={8} className="mb-2">
              3 star
            </Rating.Advanced>
            <Rating.Advanced percentFilled={4} className="mb-2">
              2 star
            </Rating.Advanced>
            <Rating.Advanced percentFilled={1}>1 star</Rating.Advanced>

            <hr class="my-6 w-4/5 border-gray-300" />
            <div>
              <p className="lg:text-2xl md:text-2xl xs:text-xl font-semibold mb-1 ">
                Review This Product
              </p>
              <p className="text-md xs:text-sm font-normal">
                Share your thoughts with other customers
              </p>
              <div className=" flex cursor-pointer rounded-lg border border-slate-300 h-9 lg:md:w-[300px] xs:sm:w-auto hover:bg-slate-200 items-center mt-3 bg-white">
                <button
                  className="text-sm font-medium text-black text-center mx-auto"
                  onClick={textMessage}
                >
                  Write a customer review
                </button>
              </div>

              <div className="lg:md:w-96 mt-5 ">
                <div className="">
                  <div className="hidden mt-2" id="customer_review">
                    <Textarea
                      id="comment"
                      placeholder="Leave a review..."
                      required
                      rows={4}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* comment  */}
          <div className="flex flex-col">
            <CustomerReview />
            <CustomerReview />
            <CustomerReview />
          </div>
        </div>

        {/* 
<div class="w-3/4 mx-auto">
        <div class="flex items-start mb-5">
            <div class="pe-4">
                <footer>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">Reviewed: <time datetime="2022-01-20 19:00">January 20, 2022</time></p>
                </footer>
                <h4 class="text-xl font-bold text-gray-900 dark:text-white">Spotless, good appliances, excellent layout, host was genuinely nice and helpful.</h4>
            </div>
            <p class="bg-blue-700 text-white text-sm font-semibold inline-flex items-center p-1.5 rounded">8.7</p>
        </div>
        <p class="mb-2 text-gray-500 dark:text-gray-400">The flat was spotless, very comfortable, and the host was amazing. I highly recommend this accommodation for anyone visiting New York city centre. It's quite a while since we are no longer using hotel facilities but self contained places. And the main reason is poor cleanliness and staff not being trained properly. This place exceeded our expectation and will return for sure.</p>
        <p class="mb-5 text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
        <aside class="flex items-center mt-3">
            <a href="#" class="inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                <svg class="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"/>
                </svg>
                Helpful
            </a>
            <a href="#" class="inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 group ms-5">
                <svg class="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M11.955 2.117h-.114C9.732 1.535 6.941.5 4.356.5c-1.4 0-1.592.526-1.879 1.316l-2.355 7A2 2 0 0 0 2 11.5h3.956L4.4 16a1.779 1.779 0 0 0 3.332 1.061 24.8 24.8 0 0 1 4.226-5.36l-.003-9.584ZM15 11h2a1 1 0 0 0 1-1V2a2 2 0 1 0-4 0v8a1 1 0 0 0 1 1Z"/>
                </svg>
                Not helpful
            </a>
        </aside>
    </div> */}

        {/* <div className="container px-12 mx-auto mb-10 mt-10 bg-gray-50">
          <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-xl font-bold text-gray-600 mb-8">
              Customers also purchased
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              <RelatedProduct />
              <RelatedProduct />
              <RelatedProduct />
              <RelatedProduct />
            </div>
          </div>
        </div> */}
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
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <div className="mt-64">
              <SwiperSlide>
                <RelatedProduct />
              </SwiperSlide>
              <SwiperSlide>
                <RelatedProduct />
              </SwiperSlide>
              <SwiperSlide>
                <RelatedProduct />
              </SwiperSlide>
              <SwiperSlide>
                <RelatedProduct />
              </SwiperSlide>
              <SwiperSlide>
                <RelatedProduct />
              </SwiperSlide>
              <SwiperSlide>
                <RelatedProduct />
              </SwiperSlide>
              <SwiperSlide>
                <RelatedProduct />
              </SwiperSlide>
              <SwiperSlide>
                <RelatedProduct />
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
}
