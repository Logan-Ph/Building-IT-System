import AddImageHomePage from "../../Components/AddImageHomePage";
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import UploadVendorCoverImage from "../../Components/UploadVendorCoverImage"

export default function VendorEditStore({ vendor, vendorImage }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      
    <div className="container mx-auto my-8 px-4 rounded-lg bg-white p-4">
        
        <div>
        <h1 class="font-bold  lg:pl-5 text-black lg:md:text-2xl text-lg ">
              Shop Decoration
            </h1>
            <h1 class="font-medium  lg:md:pt-1 lg:pl-5 text-gray-500 text-xs lg:md:text-base mb-3">
            Preview of Shop Hompage
            </h1>
        </div> 

    {/* Upload Cover Image */}
        <UploadVendorCoverImage vendor={vendor} activeTab={"HOME"} vendorImage={vendorImage} />


    {/* Upload Banner */}
    <div className="p-4 border-2 border-gray-400 border-dashed rounded-lg dark:border-gray-700">

        <div className="flex items-center justify-center text-center h-48 mb-4 rounded bg-gray-100 dark:bg-gray-800">
            <button>
                <input type="file" className="hidden" accept="image/*" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-gray-700 mx-auto mb-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload Banner Images</h5>
                <p class="font-normal text-sm text-gray-400 md:px-6">You should choose photo size with <b class="text-gray-600">height {">"} 950px</b> and <b class="text-gray-600">width {"<"} 300px</b></p>
                <p class="font-normal text-sm text-gray-400 md:px-6">and must be in <b class="text-gray-600">JPG, PNG, or GIF</b> format.</p>
                <span id="filename" class="text-gray-500 bg-gray-200 z-50"></span>
            </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center rounded bg-gray-100 h-28 dark:bg-gray-800">
                <button>
                    <input type="file" className="hidden" accept="image/*" />
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-gray-700 mx-auto mb-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                        </svg>
                        
                    </p>
                </button>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-100 h-28 dark:bg-gray-800">
                <button>
                    <input type="file" className="hidden" accept="image/*" />
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-gray-700 mx-auto mb-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                        </svg>
                    </p>
                </button>
            </div>
        </div>
        
    </div>

    </div>

    </>
  );
}
