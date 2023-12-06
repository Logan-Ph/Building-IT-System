import React, { useEffect, useState } from 'react';
import { useSearchBox } from 'react-instantsearch';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { UserContext } from '../Context/UserContext';
import { Navigate, useParams } from 'react-router-dom';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

export default function Header() {
  const { cart } = useContext(CartContext)
  const { user } = useContext(UserContext)
  const { refine } = useSearchBox();
  const [inputValue, setInputValue] = useState("");
  const [navigateTo, setNavigateTo] = useState("")
  const { query } = useParams();
  const [searchQuery] = useState(query && (query.split('='))[1]);

  function submitSearch(e) {
    e.preventDefault();
    setNavigateTo(`/search/query=${inputValue}`);
    refine(inputValue)
    setInputValue("")
  }

  useEffect(() => {
    searchQuery && refine(searchQuery)
  }, [searchQuery, refine]);

  document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelectorAll(".navbar-burger");
    const menu = document.querySelectorAll(".navbar-menu");

    burger.forEach((bg) => {
      bg.addEventListener("click", () => {
        menu.forEach((mn) => {
          mn.classList.toggle("hidden");
        });
      });
    });
  });

  const openCloseBurger = () => {
    const menu = document.querySelectorAll(".navbar-menu");
    menu.forEach((mn) => {
      mn.classList.toggle("hidden");
    });
  };

  return (
    <section>
      {navigateTo && <Navigate to={navigateTo} replace={true} />}
      <div className="w-full">
        <div className="border py-3 px-6 gradient-background">
          <div className="flex justify-between">
            {/* <!-- logo --> */}
            <a className="flex items-center lg:ml-10 " href='\'>
              <img
                src={require("./images/logo1.png")}
                className="w-14 mb-2 lg:w-14 md:w-12 sm:w-10 xs:w-8"
                alt="logo"
              />
              <span href='\' className="pl-3.5 font-semibold text-white lg:text-2xl md:text-2xl sm:text-lg xs:text-md ">
                rBuy
              </span>
            </a>

            <form onSubmit={submitSearch} className="ml-64 flex-1 items-center lg:flex md:hidden sm:hidden xs:hidden ">
              <input
                type="text"
                className="w-3/4 rounded-md border border-slate-400 px-3 py-2 text-md hover:border-black"
                placeholder="Enter "
                value={inputValue}
                onChange={(e) => setInputValue(e.currentTarget.value)}
              />
              <div class="grid place-items-center h-full w-12 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </form>

            <div className="flex items-center">
              <div className="ml-2 flex">
                <div className="mr-2 flex">
                  <div className="lg:hidden flex items-center">
                    <button
                      className="navbar-burger flex items-center text-red-500 p-3"
                      onClick={openCloseBurger}
                    >
                      <svg
                        className="block h-4 w-4 fill-current"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Mobile menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 text-white shadow-lg hover:shadow-3xl bg-blue-400 transition duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[18px] w-[18px] text-red-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                    <path
                      fill-rule="evenodd"
                      d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="text-[17px] font-medium lg:flex md:hidden sm:hidden xs:hidden ">
                    Orders
                  </span>
                </div>

                <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 text-white shadow-md hover:shadow-2xl transition duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[18px] w-[18px] text-red-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="text-[17px] font-medium  lg:flex md:hidden sm:hidden xs:hidden">
                    Wishlists
                  </span>
                </div>

                <a href='/checkout' className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 text-white hover:bg-gray-200 hover:text-black">
                  <div className="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-red-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>

                    {/* <!-- number on the cart --> */}
                    <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-[8px] text-white hover:animate-bounce ">
                      {(cart > 99) ? '99+' : cart}
                    </span>
                  </div>
                  <span className="text-[17px] font-medium  lg:flex md:hidden sm:hidden xs:hidden">
                    Cart
                  </span>
                </a>

                {/* if user login this will appear: avatar icon*/}
                <div className='flex items-center'>
                  {/* avatar icon */}
                  <DropdownAva />
                  <p className='xs:hidden font-light text-white ml-2 xl:text-lg lg:text-md md:text-sm sm:text-xs'>nnthmai</p>
                </div>
              </div>
            </div>
            {/* if the user login this will disappear */}
            {!user && <div className="ml-3 lg:flex hidden cursor-pointer rounded-md border border-black h-10 px-8 hover:bg-slate-200 items-center m-auto bg-white">
              <a href='\login' className="text-md font-medium text-black">Sign in</a>
            </div>}
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <div className="flex gap-x-2 py-1 px-2"></div>

          <div className="lg:flex gap-x-8 sm:hidden md:hidden xs:hidden">
            <span className="cursor-pointer rounded-sm py-1 px-2 text-md font-medium hover:bg-gray-100 ">
              Best Seller
            </span>
            <span className="cursor-pointer rounded-sm py-1 px-2 text-md font-medium hover:bg-gray-100">
              New Releases
            </span>
            <span className="cursor-pointer rounded-sm py-1 px-2 text-md font-medium hover:bg-gray-100">
              Electronics
            </span>
            <span className="cursor-pointer rounded-sm py-1 px-2 text-md font-medium hover:bg-gray-100">
              Beauty & Personal Care
            </span>
            <span className="cursor-pointer rounded-sm py-1 px-2 text-md font-medium hover:bg-gray-100">
              Household Appliances
            </span>
            <span className="cursor-pointer rounded-sm py-1 px-2 text-md font-medium hover:bg-gray-100">
              Fashion
            </span>
            <span className="cursor-pointer rounded-sm py-1 px-2 text-md font-medium hover:bg-gray-100">
              Entertainment
            </span>
            <span className="cursor-pointer rounded-sm py-1 px-2 text-md font-medium hover:bg-gray-100">
              Toys & Games
            </span>
          </div>
          <div>

            {!user && <a href='/register' className="cursor-pointer rounded-sm py-1 px-2 text-md font-medium hover:bg-gray-100 mr-10 lg:flex sm:hidden md:hidden xs:hidden">
              Become a vendor
            </a>}
          </div>
        </div>
      </div>

      <div className="navbar-menu relative z-50 sm:w-1 hidden">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>

        <div className=" ">
          <div className="container flex flex-col mx-auto bg-white ">
            <aside
              className="group/sidebar flex flex-col shrink-0 lg:w-[280px] md:w-[280px]  sm:w-[280px] xs:w-[200px] transition-all duration-300 ease-in-out m-0 fixed z-40 inset-y-0 left-0 bg-[#222160]  sidenav fixed-start loopple-fixed-start overflow-y-auto"
              id="sidenav-main"
            >
              <div className="flex shrink-0 px-8 items-center justify-between h-[96px]">
                <a
                  className="transition-colors duration-200 ease-in-out flex items-center"
                  href="/"
                >
                  <img
                    alt="Logo"
                    src={require("./images/logo1.png")}
                    className="inline xs:w-8 sm:w-10 md:w-12 mb-2 "
                  />
                  <span className="pl-3.5 font-semibold text-white lg:text-2xl md:text-2xl sm:text-lg xs:text-md ">
                    rBuy
                  </span>
                </a>
                <button className="navbar-close" onClick={openCloseBurger}>
                  <svg
                    className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="hidden border-b border-dashed lg:block border-neutral-200"></div>

              <div className="flex items-center justify-between px-8 py-5">
                <div className="flex items-center mr-5">
                  <div className="mr-5">
                    <div className="inline-block relative shrink-0 cursor-pointer rounded-[.95rem]">
                      <img
                        className="w-[40px] h-[40px] shrink-0 inline-block rounded-[.95rem]"
                        src="https://inkythuatso.com/uploads/thumbnails/800/2023/03/9-anh-dai-dien-trang-inkythuatso-03-15-27-03.jpg"
                        alt="avatar"
                      />
                    </div>
                  </div>
                  <div className="mr-2 ">
                    <div className=" text-white hover:text-primary transition-colors duration-200 ease-in-out text-[1.075rem] font-medium  text-secondary-inverse">
                      User
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={submitSearch} className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 mr-3 ml-3 h-10">
                <input
                  type="text"
                  className="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-xs text-gray-600 focus:outline-none"
                  placeholder="Search"
                  onChange={(e) => setInputValue(e.currentTarget.value)}
                />
                <button className="rounded-tr-md rounded-br-md px-2 py-3 hidden md:block text-white">
                  <svg
                    className="w-4 h-4 fill-current"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </form>

              <div className="  lg:block  border-neutral-200">

              <div id="menu" class="flex flex-col xs:space-y-1.5 sm:space-y-1.5 md:space-y-2 ml-3 md:ml-5 my-4 md:my-5 text-white">
                                <a
                                    href=""
                                    class="text-sm font-medium  py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
                                >
                                    <svg
                                        class="w-6 h-6 fill-current inline-block"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                        ></path>
                                    </svg>
                                    <span class="ml-2 md:text-[16px] xs:text-[12.24px] ">Best Seller</span>
                                </a>
                                <a
                                    href=""
                                    class="text-sm font-medium  py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                                >
                                    <svg
                                        class="w-6 h-6 fill-current inline-block"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
                                        ></path>
                                    </svg>
                                    <span class="ml-2 xs:text-[12.24px] md:text-[16px]">New Releases</span>
                                </a>
                                <a
                                    href=""
                                    class="text-sm font-medium  py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                                >
                                    <svg
                                        class="w-6 h-6 fill-current inline-block"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                                        <path
                                            fill-rule="evenodd"
                                            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <span class="ml-2 xs:text-[12.24px] md:text-[16px]">Electronics</span>
                                </a>
                                <a
                                    href=""
                                    class="text-sm font-medium  py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                                >
                                    <svg
                                        class="w-6 h-6 fill-current inline-block"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
                                        ></path>
                                        <path
                                            d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
                                        ></path>
                                    </svg>
                                    <span class="ml-2 xs:text-[12.24px] md:text-[16px]">Beauty & Personal Care</span>
                                </a>
                                <a
                                    href=""
                                    class="text-sm font-medium  py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                                >
                                    <svg
                                        class="w-6 h-6 fill-current inline-block"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <span class="ml-2 xs:text-[12.24px] md:text-[16px]">Household Appliances</span>
                                </a>
                                <a
                                    href=""
                                    class="text-sm font-medium  py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                                >
                                    <svg
                                        class="w-6 h-6 fill-current inline-block"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <span class="ml-2 xs:text-[12.24px] md:text-[16px]">Fashion</span>
                                </a>
                                <a
                                    href=""
                                    class="text-sm font-medium  py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                                >
                                    <svg
                                        class="w-6 h-6 fill-current inline-block"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"
                                        ></path>
                                    </svg>
                                    <span class="ml-2 xs:text-[12.24px] md:text-[16px]">Entertainments</span>
                                </a>
                                <a
                                    href=""
                                    class="text-sm font-medium  py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                                >
                                    <svg
                                        class="w-6 h-6 fill-current inline-block"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                                        ></path>
                                    </svg>
                                    <span class="ml-2 xs:text-[12px] md:text-[16px]">Toys & Games</span>
                                </a>
                            </div>
                
              </div>
              <div className="mt-5">
                <div className="mt-40 flex cursor-pointer justify-center  rounded-md border border-black h-10 sm:h-9 xs:h-9 w-52 sm:w-46 xs:w-40 xs:text-sm hover:bg-slate-200 items-center m-auto bg-white mb-6 xs:mb-3">
                  <a className="text-md font-medium text-black" href={user ? "/logout" : "/login"} >
                    {user ? "logout" : "Sign in"}
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function DropdownAva() {
  return (
    <Menu as="div" className="relative inline-block text-left ml-2">
      <div>
        <Menu.Button className="flex">
          <img className="inline-block xl:w-10 xl:h-10 lg:w-10 lg:h-10 md:w-8 md:h-8 sm:w-8 sm:h-8 xs:w-5 xs:h-5 rounded-full object-fit ring-2 ring-white"
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0JTIwZ2lybCUyMGNhcnRvb258ZW58MHx8MHx8fDA%3D"
            alt="avatar_img" />

          {/* Cái đang comment là nếu ko có ava thì để nó đó, ý là vậy */}
          {/* <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
          </div> */}

        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-[-10px] z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : '',
                    'block px-4 py-2 text-sm'
                  )}>
                  <i class="fas fa-user-circle mr-1"></i>
                  My profile
                </a>
              )}
            </Menu.Item>

            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : '',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    <i className="fas fa-sign-out-alt mr-1"></i>
                    Log Out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
