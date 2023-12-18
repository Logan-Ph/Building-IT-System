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

import AddImageHomePage from "../../Components/AddImageHomePageCarousel";
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
export default function VendorEditStore() {
  const [openModal, setOpenModal] = useState(false);
  
  return (
    <>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />
      <div className=" flex">

        <div class=" max-w-8xl mb-10 pb-5 lg:md:w-full w-5/6 ">

          <div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-gray-100 mb-10 px-4">
            <h1 class="font-bold  lg:pl-5 text-black lg:md:text-2xl text-lg pt-10 ">
              Shop Decoration
            </h1>
            <h1 class="font-medium  lg:md:pt-1 lg:pl-5 text-gray-500 text-xs lg:md:text-base mb-3">
              Upload real, high resolution, clear product images.
            </h1>

            <label for="cover-photo" class="block text-lg font-bold leading-6 text-gray-900 mt-10 lg:pl-10 mb-6 ">Cover Image</label>
            <div
              class="flex flex-wrap justify-center gap-16 pb-20 ">


              <div className="flex flex-col justify-center items-center">
                <img src="https://static.vecteezy.com/system/resources/previews/002/282/929/non_2x/red-and-gold-rectangle-long-banner-design-free-vector.jpg" className="h-64 w-[550px] mb-6"></img>

                <Button onClick={() => setOpenModal(true)}>Update Image</Button>
                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                  <Modal.Header>Update Image</Modal.Header>
                  <Modal.Body>
                    < AddImageHomePage />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => setOpenModal(false)}>Accept</Button>


                    <Button color="gray" onClick={() => setOpenModal(false)}>
                      Decline
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>

            <label for="cover-photo" class="block text-lg font-bold leading-6 text-gray-900 mt-10 lg:pl-10 mb-6 ">Carousel Images</label>
            <div
              class="flex flex-wrap justify-center gap-16 pb-20 ">


              <div className="flex flex-col justify-center items-center">
                <img src="https://static.vecteezy.com/system/resources/previews/002/282/929/non_2x/red-and-gold-rectangle-long-banner-design-free-vector.jpg" className="h-64 w-[550px] mb-6"></img>

                <Button onClick={() => setOpenModal(true)}>Update Image</Button>
                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                  <Modal.Header>Update Image</Modal.Header>
                  <Modal.Body>
                    < AddImageHomePage />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => setOpenModal(false)}>Accept</Button>


                    <Button color="gray" onClick={() => setOpenModal(false)}>
                      Decline
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>


              <div className="flex flex-col justify-center items-center">
                <img src="https://cdn11.bigcommerce.com/s-nuizsgwrav/images/stencil/790x790/uploaded_images/creative-ways-to-use-large-custom-banners.jpg?t=1620403256" className="h-64 w-[550px] mb-6"></img>
                <Button onClick={() => setOpenModal(true)}>Update Image</Button>
                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                  <Modal.Header>Update Image</Modal.Header>
                  <Modal.Body>
                    < AddImageHomePage />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => setOpenModal(false)}>Accept</Button>


                    <Button color="gray" onClick={() => setOpenModal(false)}>
                      Decline
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>

              <div className="flex flex-col  justify-center items-center">
                <img src="https://cdn11.bigcommerce.com/s-nuizsgwrav/images/stencil/790x790/uploaded_images/creative-ways-to-use-large-custom-banners.jpg?t=1620403256" className="h-64 w-[550px] mb-6"></img>
                <Button onClick={() => setOpenModal(true)}>Update Image</Button>
                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                  <Modal.Header>Update Image</Modal.Header>
                  <Modal.Body>
                    < AddImageHomePage />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => setOpenModal(false)}>Accept</Button>


                    <Button color="gray" onClick={() => setOpenModal(false)}>
                      Decline
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>

            </div>


          </div>
        </div>
      </div>






    </>
  );
}