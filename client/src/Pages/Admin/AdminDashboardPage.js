"use client";
import AdminBarChart from "../../Components/AdminBarChart";
import AdminInsight from "../../Components/AdminInsight";
import { Button, Modal } from "flowbite-react";
import { useCallback, useEffect, useState } from "react";
import AddImageHomePageBanner from "../../Components/AddImageHomePageBanner";
import AddImageHomePageCarousel from "../../Components/AddImageHomePageCarousel";
import axios from "axios";
import { Carousel } from "flowbite-react";
import bannerImage from "../../Components/images/banner1.jpg";

export default function DashboardPage() {
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);
  const [openModal5, setOpenModal5] = useState(false);
  const [numberOfUsers, setNumberOfUsers] = useState(0);
  const [numberOfVendors, setNumberOfVendors] = useState(0);
  const [numberOfShippers, setNumberOfShippers] = useState(0);
  const [numberOfProducts, setNumberOfProducts] = useState(0);

  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:4000/admin/dashboard", {
        withCredentials: true,
      });
      setNumberOfUsers(res.data.numberOfUsers);
      setNumberOfVendors(res.data.numberOfVendors);
      setNumberOfShippers(res.data.numberOfShippers);
      setNumberOfProducts(res.data.numberOfProducts);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />
      <div class=" max-w-full mb-10 pb-5 lg:md:w-full w-5/6 overflow:hidden ">
        <div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-gray-100 mb-10 px-4">
          <h1 class="font-bold  lg:pl-5  uppercase text-black text-2xl  pt-10 ">
            Homepage Decoration
          </h1>
          <h1 class="font-medium  lg:md:pt-1 lg:pl-5 text-gray-500 text-base mb-3">
            Upload real, high resolution, clear product images. You should
            choose images with 1:1 resolution
          </h1>
          <h1 class="font-bold  lg:pl-5  uppercase text-2xl text-gray-700  pt-10 mb-2">
            1. Carousel
          </h1>
          <div className="grid grid-cols-1">
            <div className="h-80 ">
              <Carousel>
                <div>
                  <h1 class="font-medium  lg:md:pt-1 lg:pl-5 text-gray-500 text-xl  mb-3">
                    Carousel #1
                  </h1>
                  {/* <div>
                    <img
                      src={require("../../Components/images/banner1.jpg")}
                      alt="banner"
                      class="bg-center bg-no-repeat bg-gray-700 bg-blend-multiply"
                    />
                  </div> */}

                  <div
                    id="image-preview"
                    class="max-w-full h-64 p-6 mb-4 bg-gray-700 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer object-fit bg-cover bg-center bg-no-repeat bg-blend-multiply"
                    style={{ backgroundImage: `url(${bannerImage})` }}
                  >
                    <input
                      id="upload"
                      type="file"
                      class="hidden"
                      accept="image/*"
                      required
                    />
                    <label for="upload" class="cursor-pointer">
                      <div class="font-extrabold tracking-tight leading-none text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-8 h-8 mx-auto mb-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                          />
                        </svg>
                        <h5 class="mb-2 text-xl">Upload Cover Image</h5>
                        <p class="font-normal text-sm md:px-6">
                          You should choose photo size with{" "}
                          <b class="italic ...">height {">"} 950px</b> and{" "}
                          <b class="italic ...">width {"<"} 300px</b>
                        </p>
                        <p class="font-normal text-sm md:px-6">
                          and must be in{" "}
                          <b class="italic ...">JPG, PNG, or GIF</b> format.
                        </p>
                        <span
                          id="filename"
                          class="text-gray-500 bg-gray-200 z-50"
                        ></span>
                      </div>
                    </label>
                  </div>
                </div>
                <div>
                  <h1 class="font-medium  lg:md:pt-1 lg:pl-5 text-gray-500 text-xl  mb-3">
                    Carousel #2
                  </h1>

                  <div
                    id="image-preview"
                    class="max-w-full h-64 p-6 mb-4 bg-gray-700 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer object-fit bg-cover bg-center bg-no-repeat bg-blend-multiply"
                    style={{ backgroundImage: `url(${bannerImage})` }}
                  >
                    <input
                      id="upload"
                      type="file"
                      class="hidden"
                      accept="image/*"
                      required
                    />
                    <label for="upload" class="cursor-pointer">
                      <div class="font-extrabold tracking-tight leading-none text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-8 h-8 mx-auto mb-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                          />
                        </svg>
                        <h5 class="mb-2 text-xl">Upload Cover Image</h5>
                        <p class="font-normal text-sm md:px-6">
                          You should choose photo size with{" "}
                          <b class="italic ...">height {">"} 950px</b> and{" "}
                          <b class="italic ...">width {"<"} 300px</b>
                        </p>
                        <p class="font-normal text-sm md:px-6">
                          and must be in{" "}
                          <b class="italic ...">JPG, PNG, or GIF</b> format.
                        </p>
                        <span
                          id="filename"
                          class="text-gray-500 bg-gray-200 z-50"
                        ></span>
                      </div>
                    </label>
                  </div>
                </div>
                <div>
                  <h1 class="font-medium  lg:md:pt-1 lg:pl-5 text-gray-500 text-xl  mb-3">
                    Carousel #3
                  </h1>

                  <div
                    id="image-preview"
                    class="max-w-full h-64 p-6 mb-4 bg-gray-700 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer object-fit bg-cover bg-center bg-no-repeat bg-blend-multiply"
                    style={{ backgroundImage: `url(${bannerImage})` }}
                  >
                    <input
                      id="upload"
                      type="file"
                      class="hidden"
                      accept="image/*"
                      required
                    />
                    <label for="upload" class="cursor-pointer">
                      <div class="font-extrabold tracking-tight leading-none text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-8 h-8 mx-auto mb-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                          />
                        </svg>
                        <h5 class="mb-2 text-xl">Upload Cover Image</h5>
                        <p class="font-normal text-sm md:px-6">
                          You should choose photo size with{" "}
                          <b class="italic ...">height {">"} 950px</b> and{" "}
                          <b class="italic ...">width {"<"} 300px</b>
                        </p>
                        <p class="font-normal text-sm md:px-6">
                          and must be in{" "}
                          <b class="italic ...">JPG, PNG, or GIF</b> format.
                        </p>
                        <span
                          id="filename"
                          class="text-gray-500 bg-gray-200 z-50"
                        ></span>
                      </div>
                    </label>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>

          <div className="pb-8">
            <h1 class="font-bold  lg:pl-5  uppercase text-2xl text-gray-700 pt-10 mb-2">
              2. Banner
            </h1>

            <div className="flex grid-cols-2 gap-x-4 xs:overflow-y divide-x-2 xl:grid lg:grid md:grid sm:flex-col xs:flex-col ">
              <div>
                <div
                  id="image-preview"
                  class="max-w-full h-48 p-6 mb-4 bg-gray-700 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer bg-cover bg-center bg-no-repeat bg-blend-multiply"
                  style={{ backgroundImage: `url(${bannerImage})` }}
                >
                  <input
                    id="upload"
                    type="file"
                    class="hidden"
                    accept="image/*"
                    required
                  />
                  <label for="upload" class="cursor-pointer">
                    <div class="font-extrabold tracking-tight leading-none text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-8 h-8 mx-auto mb-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                        />
                      </svg>
                      <h5 class="mb-2 text-xl">Upload Cover Image</h5>
                      <p class="font-normal text-sm md:px-6">
                        You should choose photo size with{" "}
                        <b class="italic ...">height {">"} 950px</b> and{" "}
                        <b class="italic ...">width {"<"} 300px</b>
                      </p>
                      <p class="font-normal text-sm md:px-6">
                        and must be in{" "}
                        <b class="italic ...">JPG, PNG, or GIF</b> format.
                      </p>
                      <span
                        id="filename"
                        class="text-gray-500 bg-gray-200 z-50"
                      ></span>
                    </div>
                  </label>
                </div>
                <div
                  id="image-preview"
                  class="max-w-full h-48 p-6 mb-4 bg-gray-700 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer bg-cover bg-center bg-no-repeat bg-blend-multiply"
                  style={{ backgroundImage: `url(${bannerImage})` }}
                >
                  <input
                    id="upload"
                    type="file"
                    class="hidden"
                    accept="image/*"
                    required
                  />
                  <label for="upload" class="cursor-pointer">
                    <div class="font-extrabold tracking-tight leading-none text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-8 h-8 text-gray-700 mx-auto mb-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                        />
                      </svg>
                      <h5 class="mb-2 text-xl">Upload Cover Image</h5>
                      <p class="font-normal text-sm md:px-6">
                        You should choose photo size with{" "}
                        <b class="italic ...">height {">"} 950px</b> and{" "}
                        <b class="italic ...">width {"<"} 300px</b>
                      </p>
                      <p class="font-normal text-sm md:px-6">
                        and must be in{" "}
                        <b class="italic ...">JPG, PNG, or GIF</b> format.
                      </p>
                      <span
                        id="filename"
                        class="text-gray-500 bg-gray-200 z-50"
                      ></span>
                    </div>
                  </label>
                </div>
              </div>

              <div className="bg-white grid grid-cols-3 gap-x-4 px-4 py-6">
                <div className="flex items-center flex-col group cursor-pointer overflow-hidden">
                  <img
                    src={require("../../Components/images/tv.avif")}
                    alt="tv"
                    className="w-[100px] h-[100px] object-fit transition duration-300 group-hover:-translate-y-1 scale-95"
                    style={{ transformOrigin: "center center" }}
                  />
                  <div
                    className="transition duration-300 group-hover:-translate-y-1 mt-2 "
                    style={{ transformOrigin: "center center" }}
                  >
                    {" "}
                    Household Appliances
                  </div>
                </div>

                <div className="flex items-center flex-col group cursor-pointer overflow-hidden">
                  <img
                    src={require("../../Components/images/laptop.jpg")}
                    alt="tv"
                    className="w-[100px] h-[100px] object-fit transition duration-300 group-hover:-translate-y-1 scale-95"
                    style={{ transformOrigin: "center center" }}
                  />
                  <div
                    className="transition duration-300 group-hover:-translate-y-1 mt-2 "
                    style={{ transformOrigin: "center center" }}
                  >
                    {" "}
                    Electronics
                  </div>
                </div>

                <div className="flex items-center flex-col group cursor-pointer overflow-hidden">
                  <img
                    src={require("../../Components/images/fashion.jpg")}
                    alt="tv"
                    className="w-[100px] h-[100px] object-fit transition duration-300 group-hover:-translate-y-1 scale-95"
                    style={{ transformOrigin: "center center" }}
                  />
                  <div
                    className="transition duration-300 group-hover:-translate-y-1 mt-2 "
                    style={{ transformOrigin: "center center" }}
                  >
                    {" "}
                    Fashion
                  </div>
                </div>

                <div className="flex items-center flex-col group cursor-pointer overflow-hidden">
                  <img
                    src={require("../../Components/images/game.jpg")}
                    alt="tv"
                    className="w-[100px] h-[100px] object-fit transition duration-300 group-hover:-translate-y-1 scale-95"
                    style={{ transformOrigin: "center center" }}
                  />
                  <div
                    className="transition duration-300 group-hover:-translate-y-1 mt-2 "
                    style={{ transformOrigin: "center center" }}
                  >
                    {" "}
                    Toys & Game
                  </div>
                </div>

                <div className="flex items-center flex-col group cursor-pointer overflow-hidden">
                  <img
                    src={require("../../Components/images/beauty.jpg")}
                    alt="tv"
                    className="w-[100px] h-[100px] object-fit transition duration-300 group-hover:-translate-y-1 scale-95"
                    style={{ transformOrigin: "center center" }}
                  />
                  <div
                    className="transition duration-300 group-hover:-translate-y-1 mt-2 "
                    style={{ transformOrigin: "center center" }}
                  >
                    {" "}
                    Beauty & Personal Care
                  </div>
                </div>

                <div className="flex items-center flex-col group cursor-pointer overflow-hidden">
                  <img
                    src={require("../../Components/images/enter.jpg")}
                    alt="tv"
                    className="w-[100px] h-[100px] object-fit transition duration-300 group-hover:-translate-y-1 scale-95"
                    style={{ transformOrigin: "center center" }}
                  />
                  <div
                    className="transition duration-300 group-hover:-translate-y-1 mt-2 "
                    style={{ transformOrigin: "center center" }}
                  >
                    {" "}
                    Entertainment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-gray-100 mb-10 px-4 pt-10 pb-20">
          <div id="content" class="">
            <h1 class="font-bold  lg:pl-5 lg:pt-4 uppercase text-black text-2xl ">
              Admin Insight
            </h1>
            <h1 class="font-medium  lg:md:pt-1 lg:pl-5 text-gray-500 text-base mb-3">
              Critical business priorities encompass operational efficiency,
              market dynamics, and customer engagement
            </h1>
            <AdminInsight
              numbersOfUser={numberOfUsers}
              numbersOfVendors={numberOfVendors}
              numbersOfShippers={numberOfShippers}
              numbersOfProducts={numberOfProducts}
            />
            <div className="mt-4">
              <h1 class="font-bold  lg:pl-5 py-4 uppercase text-black text-2xl">
                Last Month Users
              </h1>
              <AdminBarChart />
            </div>
            <div id="last-users"></div>
          </div>
        </div>
      </div>
    </>
  );
}
