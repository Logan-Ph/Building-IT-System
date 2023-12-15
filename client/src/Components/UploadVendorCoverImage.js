import { useSearchBox } from "react-instantsearch";
import { useContext, useState, useEffect, useCallback } from 'react'

export default function UploadVendorCoverImage({ vendor, activeTab, vendorImage }) {
  const { refine } = useSearchBox();
  const [file, setFile] = useState('');
  const handleFileChange = (event) => {
    event.preventDefault()
    setFile(event.target.files[0]);
  };

  const getTabClass = (tabName) => {
    return `border-b-2 px-2 py-3 duration-700 transition ${activeTab === tabName ? 'border-black' : 'border-transparent hover:border-black'
      }`;
  };
  return (
    <>
      {/* Profile Section */}

      <div class="md:container mx-auto">
        
        <section class="container w-full mx-auto items-center py-4">
                <div class="max-w-full mx-auto items-center">
                  <div class="px-4 py-6">
                    <div id="image-preview" class="max-w-full h-48 p-6 mb-4 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer">
                      <input id="upload" onChange={handleFileChange} type="file" class="hidden" accept="image/*" required/>
                      <label for="upload" class="cursor-pointer">
                        {file && (
                          <div>
                            <h2 class="font-normal text-sm text-gray-600 md:px-6 " >Image Preview:</h2>
                            <img
                              src={URL.createObjectURL(file)}
                              alt="Preview"
                              style={{ maxWidth: '100%' }}
                            />
                            <p class="font-normal text-sm text-gray-400 md:px-6">File Name: {file.name}</p>
                          </div>
                        )}
                        {!file && (
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-gray-700 mx-auto mb-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                          </svg>
                          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload picture</h5>
                          <p class="font-normal text-sm text-gray-400 md:px-6">You should choose photo size with <b class="text-gray-600">height {">"} 950px</b> and <b class="text-gray-600">width {"<"} 300px</b></p>
                          <p class="font-normal text-sm text-gray-400 md:px-6">and must be in <b class="text-gray-600">JPG, PNG, or GIF</b> format.</p>
                          <span id="filename" class="text-gray-500 bg-gray-200 z-50"></span>
                        </div>)}
                      </label>
                    </div>
                  </div>
                </div>
        </section>

        <div class="md:flex my-3 md:justify-between px-4 md:px-0">
          <div class="flex items-center gap-4">
            <img src={(vendorImage) ? `data:image/jpeg;base64,${vendorImage}` : require("../Components/images/defaultUserImage.png")} className="vendor-avatar md:w- rounded-full" alt="" />

            <div class="font-medium">
              <div class="text-2xl">{vendor && vendor.businessName}</div>
              <div class="text-base text-gray-500 mb-2">
                <span class="border-r border-black pr-3">1,8 followers</span>
                <span class="pl-2">69 products</span>
              </div>
              <div>
                <button
                  type="button"
                  class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                >
                  <i class="fa-regular fa-plus"></i> Follow
                </button>
                <button
                  type="button"
                  class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                >
                  <i class="fa-regular fa-comment-dots"></i> Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vendor Nav */}
      <div class="md:container mx-auto my-2 sticky top-0 border-b bg-white">
        <div class="px-4 py-2 mx-auto md:flex md:justify-between">
          <div class="md:order-last drop-shadow-md mt-2">
            <form>
              <div class="relative">
                {activeTab === "PRODUCTS" &&
                  <>
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        class="w-4 h-4 text-gray-500 dark:text-gray-400"
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
                      class="block w-full py-4 px-8 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                      placeholder={`Search in ${vendor && vendor.businessName}`}
                      onChange={(e) => refine(e.target.value)}
                    />
                  </>}
              </div>
            </form>
          </div>

          <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm py-3">
              <li className={getTabClass('HOME')}>
                <a href={(vendor) ? `/vendor/${vendor._id}/home` : ""}

                  class="text-gray-900hover:underline text-sm font-light md:text-lg"
                  aria-current="page"
                >
                  HOME
                </a>
              </li>
              <li className={getTabClass('PRODUCTS')}>
                <a
                  href={(vendor) ? `/vendor/${vendor._id}/product` : ""}
                  class="text-gray-900hover:underline text-sm md:text-lg font-light"
                >
                  PRODUCTS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
