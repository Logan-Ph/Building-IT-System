export default function VendorChatPage() {
  return (
    <>
      <section>
        {/* Component */}
        <div class="flex">
          {/* <!-- Sidebar --> */}
          <div class="sidebar w-full md:w-1/4 bg-white border-r border-gray-300">
            {/* <!-- Sidebar Header --> */}
            <header class="p-4 border-b border-gray-300 flex flex-col bg-[#FAC800] text-white">
              <h1 class="text-2xl font-semibold mb-3">Chat</h1>
              <form>
                <label
                  for="default-search"
                  class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search"
                  />
                </div>
              </form>
            </header>

            {/* <!-- Contact List --> */}
            <div class="contactList overflow-y-auto h-screen px-3 pt-3 mb-9 pb-72 bg-[#FFFFFF]">
              <div class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                <div class="w-12 h-12 bg-gray-300 rounded-full mr-3">
                  <img
                    src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                    alt="User Avatar"
                    class="w-12 h-12 rounded-full"
                  />
                </div>
                <div class="flex-1 truncate ...">
                  <h2 class="text-lg font-semibold">Alice</h2>
                  <p class="text-gray-600">Hoorayy!!</p>
                </div>
              </div>

              <div class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                <div class="w-12 h-12 bg-gray-300 rounded-full mr-3">
                  <img
                    src="https://placehold.co/200x/ad922e/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                    alt="User Avatar"
                    class="w-12 h-12 rounded-full"
                  />
                </div>
                <div class="flex-1 truncate ...">
                  <h2 class="text-lg font-semibold">Martin</h2>
                  <p class="text-gray-600">
                    That pizza place was amazing! We should go again sometime.
                    🍕
                  </p>
                </div>
              </div>

              <div class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                <div class="w-12 h-12 bg-gray-300 rounded-full mr-3">
                  <img
                    src="https://placehold.co/200x/2e83ad/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                    alt="User Avatar"
                    class="w-12 h-12 rounded-full"
                  />
                </div>
                <div class="flex-1 truncate ...">
                  <h2 class="text-lg font-semibold">Charlie</h2>
                  <p class="text-gray-600">
                    Hey, do you have any recommendations for a good movie to
                    watch?
                  </p>
                </div>
              </div>

              <div class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                <div class="w-12 h-12 bg-gray-300 rounded-full mr-3">
                  <img
                    src="https://placehold.co/200x/c2ebff/0f0b14.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                    alt="User Avatar"
                    class="w-12 h-12 rounded-full"
                  />
                </div>
                <div class="flex-1 truncate ...">
                  <h2 class="text-lg font-semibold">David</h2>
                  <p class="text-gray-600">
                    I just finished reading a great book! It was so captivating.
                  </p>
                </div>
              </div>

              <div class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                <div class="w-12 h-12 bg-gray-300 rounded-full mr-3">
                  <img
                    src="https://placehold.co/200x/e7c2ff/7315d1.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                    alt="User Avatar"
                    class="w-12 h-12 rounded-full"
                  />
                </div>
                <div class="flex-1 truncate ...">
                  <h2 class="text-lg font-semibold">Ella</h2>
                  <p class="text-gray-600">
                    What's the plan for this weekend? Anything fun?
                  </p>
                </div>
              </div>

              <div class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                <div class="w-12 h-12 bg-gray-300 rounded-full mr-3">
                  <img
                    src="https://placehold.co/200x/ffc2e2/ffdbdb.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                    alt="User Avatar"
                    class="w-12 h-12 rounded-full"
                  />
                </div>
                <div class="flex-1 truncate ...">
                  <h2 class="text-lg font-semibold">Fiona</h2>
                  <p class="text-gray-600">
                    I heard there's a new exhibit at the art museum. Interested?
                  </p>
                </div>
              </div>

              <div class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                <div class="w-12 h-12 bg-gray-300 rounded-full mr-3">
                  <img
                    src="https://placehold.co/200x/f83f3f/4f4f4f.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                    alt="User Avatar"
                    class="w-12 h-12 rounded-full"
                  />
                </div>
                <div class="flex-1 truncate ...">
                  <h2 class="text-lg font-semibold">George</h2>
                  <p class="text-gray-600">
                    I tried that new cafe downtown. The coffee was fantastic!
                  </p>
                </div>
              </div>

              <div class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                <div class="w-12 h-12 bg-gray-300 rounded-full mr-3">
                  <img
                    src="https://placehold.co/200x/dddddd/999999.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                    alt="User Avatar"
                    class="w-12 h-12 rounded-full"
                  />
                </div>
                <div class="flex-1 truncate ...">
                  <h2 class="text-lg font-semibold">Hannah</h2>
                  <p class="text-gray-600">
                    I'm planning a hiking trip next month. Want to join?
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Main Chat Area --> */}
          <div class="mainChatArea flex-1 hidden md:block">
            <div class="flex flex-col justify-between"></div>
            {/* <!-- Chat Header --> */}
            <div class="p-4 flex justify-start items-center text-2xl font-semibold">
              <button class="backButton md:hidden pe-5">
                <i class="fa-solid fa-arrow-left"></i>
              </button>
              <div class="w-12 h-12 bg-gray-300 rounded-full mr-3">
                <img
                  src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                  alt="User Avatar"
                  class="w-12 h-12 rounded-full"
                />
              </div>
              <div>
                <header class="text-gray-700">
                  <h1>Alice</h1>
                </header>
              </div>
            </div>

            {/* <!-- Chat Messages --> */}
            <div class="h-screen overflow-y-auto p-4 pb-72 bg-[#E3E5E0]">
              {/* <!-- Incoming Message --> */}
              <div class="flex mb-4 cursor-pointer">
                <div class="flex max-w-96 bg-[#FFFFFF] rounded-lg p-3 gap-3">
                  <p class="text-gray-700">Hey Bob, how's it going?</p>
                </div>
              </div>

              {/* <!-- Outgoing Message --> */}
              <div class="flex justify-end mb-4 cursor-pointer">
                <div class="flex max-w-96 bg-[#000054] text-white rounded-lg p-3 gap-3">
                  <p>Absolutely! Can't wait for our pizza date. 🍕</p>
                </div>
              </div>
            </div>

            {/* <!-- Chat Input --> */}
            <footer class="bg-white border-t border-gray-300 p-4 absolute bottom-0 md:w-3/4 w-full">
              <div class="flex items-center">
                <input
                  type="text"
                  placeholder="Type a message..."
                  class="w-full p-2 rounded-md border border-gray-400 focus:outline-none"
                />
                <button class="bg-[#FAC800] text-white px-4 py-2 rounded-md ml-2 font-semibold">
                  Send
                </button>
              </div>
            </footer>
          </div>

          {/* Manage Order */}
        </div>
      </section>
    </>
  );
}
