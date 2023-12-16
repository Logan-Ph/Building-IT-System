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