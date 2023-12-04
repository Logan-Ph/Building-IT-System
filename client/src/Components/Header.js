import React, { useState } from 'react';
import { useSearchBox } from 'react-instantsearch';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { UserContext } from '../Context/UserContext';

export default function Header() {

  const { cart } = useContext(CartContext)
  const { user } = useContext(UserContext)
  const { query, refine } = useSearchBox();
  const [inputValue, setInputValue] = useState(query);

  function setQuery(newQuery) {
    setInputValue(newQuery);

    refine(newQuery);
  }

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

            <div className="ml-64 flex-1 items-center lg:flex md:hidden sm:hidden xs:hidden ">
              <input
                type="text"
                className="w-3/4 rounded-md border border-slate-400 px-3 py-2 text-md hover:border-black"
                placeholder="Enter "
                onChange={(e) => setQuery(e.currentTarget.value)}
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
            </div>

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
              </div>
            </div>
            {/* if the user login this will disappear */}
            {!user && <div className="ml-3 lg:flex hidden cursor-pointer rounded-md border border-black h-10 px-8 hover:bg-slate-200 items-center m-auto bg-white">
              <a href='\login' className="text-md font-medium text-black">Sign in</a>
            </div>}
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between ">
          
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
          {/* cai div nay de no can bang 2 ben nen dung xoa' */}
          <div>
          {!user && <a href='/register' className="cursor-pointer rounded-sm py-1 px-2 text-md font-medium hover:bg-gray-100 mr-10 lg:flex sm:hidden md:hidden xs:hidden">
            Become a vendor
          </a>}
          </div>
        </div>
      </div>

      <div className="navbar-menu relative z-50 sm:w-1 hidden">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>

        <div className="">
          <div className="container flex flex-col mx-auto bg-white ">
            <aside
              className="group/sidebar flex flex-col shrink-0 lg:w-[280px] md:w-[280px]  sm:w-[280px] xs:w-[200px] transition-all duration-300 ease-in-out m-0 fixed z-40 inset-y-0 left-0 bg-[#222160] border-r border-r-dashed border-r-neutral-200 sidenav fixed-start loopple-fixed-start"
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

              <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 mr-3 ml-3 h-10">
                <input
                  type="text"
                  className="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-xs text-gray-600 focus:outline-none"
                  placeholder="Search"
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
              </div>

              <div className="hidden border-b border-dashed lg:block  border-neutral-200"></div>

              <div className="relative pl-3 my-5 ">
                <div className="flex flex-col w-full font-medium text-[12.5px] ">
                  {/* <!-- menu item --> */}
                  <div>
                    <span className="select-none flex items-center px-4 py-[.3rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                      <a
                        href="/"
                        className="flex items-center flex-grow  text-white hover:text-dark md:text-lg"
                      >
                        Best seller
                      </a>
                    </span>
                  </div>

                  {/* <!-- menu item --> */}
                  <div>
                    <span className="select-none flex items-center px-4 py-[.3rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                      <a
                        href="/"
                        className="flex items-center flex-grow  text-white hover:text-dark md:text-lg"
                      >
                        New Releases
                      </a>
                    </span>
                  </div>

                  {/* <!-- menu item --> */}
                  <div>
                    <span className="select-none flex items-center px-4 py-[.3rem] cursor-pointer my-[.4rem] rounded-[.95rem] ">
                      <a
                        href="/"
                        className="flex items-center flex-grow  text-white hover:text-dark md:text-lg"
                      >
                        Electronics
                      </a>
                    </span>
                  </div>

                  {/* <!-- menu item --> */}
                  <div>
                    <span className="select-none flex items-center px-4 py-[.3rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                      <a
                        href="/"
                        className="flex items-center flex-grow  text-white hover:text-dark md:text-lg"
                      >
                        Beauty & Personal Care
                      </a>
                    </span>
                  </div>

                  {/* <!-- menu item --> */}
                  <div>
                    <span className="select-none flex items-center px-4 py-[.3rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                      <a
                        href="/"
                        className="flex items-center flex-grow  text-white hover:text-dark md:text-lg"
                      >
                        Household Appliances
                      </a>
                    </span>
                  </div>

                  {/* <!-- menu item --> */}
                  <div>
                    <span className="select-none flex items-center px-4 py-[.3rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                      <a
                        href="/"
                        className="flex items-center flex-grow  text-white hover:text-dark md:text-lg"
                      >
                        Fashion
                      </a>
                    </span>
                  </div>

                  {/* <!-- menu item --> */}
                  <div>
                    <span className="select-none flex items-center px-4 py-[.3rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                      <a
                        href="/"
                        className="flex items-center flex-grow  text-white hover:text-dark md:text-lg"
                      >
                        Entertainment
                      </a>
                    </span>
                  </div>

                  {/* <!-- menu item --> */}
                  <div>
                    <span className="select-none flex items-center px-4 py-[.3rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                      <a
                        href="/"
                        className="flex items-center flex-grow  text-white hover:text-dark md:text-lg"
                      >
                        Toys & Games
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-20">
                <div className="flex cursor-pointer justify-center  rounded-md border border-black h-10 sm:h-9 xs:h-9 w-52 sm:w-46 xs:w-40 xs:text-sm hover:bg-slate-200 items-center m-auto bg-white mb-6 xs:mb-3">
                  <span className="text-md font-medium text-black">
                    Sign in
                  </span>
                </div>
                <div className="flex cursor-pointer justify-center  rounded-md border border-black h-10 sm:h-9 xs:h-9 w-52 sm:w-46 xs:w-40 xs:text-sm hover:bg-slate-200 items-center m-auto bg-white">
                  <span className="text-md font-medium text-black">
                    Become a vendor
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
