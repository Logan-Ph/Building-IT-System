'use client';
import Sidebar from "../../Components/Sidebar";
import { SidebarItem } from "../../Components/Sidebar";
import AdminBarChart from "../../Components/AdminBarChart";
import AdminInsight from "../../Components/AdminInsight";


import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import AddImageHomePageBanner from "../../Components/AddImageHomePageBanner";
import AddImageHomePageCarousel from "../../Components/AddImageHomePageCarousel";
import { Settings } from "lucide-react";
export default function DashboardPage() {
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);
  const [openModal5, setOpenModal5] = useState(false);
  return (
    <>


      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />
      <div class=" max-w-full mb-10 pb-5 lg:md:w-full w-5/6 overflow:hidden ">
        <div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-gray-100 mb-10 px-4">
          <h1 class="font-bold  lg:pl-5  uppercase text-black lg:md:text-2xl text-lg pt-10 ">
            Upload Images in Homepage
          </h1>
          <h1 class="font-medium  lg:md:pt-1 lg:pl-5 text-gray-500 text-xs lg:md:text-base mb-3">
            Upload real, high resolution, clear product images. You should choose images with 1:1 resolution
          </h1>
          <h1 class="font-bold  lg:pl-5  uppercase lg:md:text-2xl text-gray-700 text-lg pt-10 ">
            1. Carousel
          </h1>
          <div
            class="flex flex-wrap justify-center lg:gap-16 pb-20 ">
            <div className="flex flex-col justify-center items-center">
              <label for="cover-photo" class="block text-lg font-bold leading-6 text-gray-900 mt-5 lg:pl-10 mb-4 ">Carousel Image #1</label>
              <img src="https://static.vecteezy.com/system/resources/previews/002/282/929/non_2x/red-and-gold-rectangle-long-banner-design-free-vector.jpg" className="h-64 w-[550px] mb-4"></img>

              <Button onClick={() => setOpenModal1(true)}>Update Image</Button>
              <Modal show={openModal1} onClose={() => setOpenModal1(false)}>
                <Modal.Header>Update Image</Modal.Header>
                <Modal.Body>
                  < AddImageHomePageCarousel />
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setOpenModal1(false)}>Accept</Button>
                  <Button color="gray" onClick={() => setOpenModal1(false)}>
                    Decline
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
            <div className="flex flex-col justify-center items-center">
              <label for="cover-photo" class="block text-lg font-bold leading-6 text-gray-900 mt-5 lg:pl-10 mb-4 ">Carousel Image #2</label>
              <img src="https://cdn11.bigcommerce.com/s-nuizsgwrav/images/stencil/790x790/uploaded_images/creative-ways-to-use-large-custom-banners.jpg?t=1620403256" className="h-64 w-[550px] mb-4"></img>
              <Button onClick={() => setOpenModal2(true)}>Update Image</Button>
              <Modal show={openModal2} onClose={() => setOpenModal2(false)}>
                <Modal.Header>Update Image</Modal.Header>
                <Modal.Body>
                  < AddImageHomePageCarousel />
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setOpenModal2(false)}>Accept</Button>
                  <Button color="gray" onClick={() => setOpenModal2(false)}>
                    Decline
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
          <h1 class="font-bold  lg:pl-5  uppercase lg:md:text-2xl text-gray-700 text-lg pt-10 ">
            2. Banner
          </h1>
          <div
            class="flex flex-wrap justify-center lg:gap-16 pb-20 ">
            <div className="flex flex-col justify-center items-center">
              <label for="cover-photo" class="block text-lg font-bold leading-6 text-gray-900 mt-5 lg:pl-10 mb-4 ">Banner Image #1</label>
              <img src="https://treobangron.com.vn/wp-content/uploads/2023/01/banner-shopee.jpg" className="h-64 w-[550px] mb-4"></img>
              <Button onClick={() => setOpenModal4(true)}>Update Image</Button>
              <Modal show={openModal4} onClose={() => setOpenModal4(false)}>
                <Modal.Header>Update Image</Modal.Header>
                <Modal.Body>
                  < AddImageHomePageBanner />
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setOpenModal4(false)}>Accept</Button>
                  <Button color="gray" onClick={() => setOpenModal4(false)}>
                    Decline
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
            <div className="flex flex-col justify-center items-center">
              <label for="cover-photo" class="block text-lg font-bold leading-6 text-gray-900 mt-5 lg:pl-10 mb-4 ">Banner Image #2</label>
              <img src="https://digi.cropro.vn/wp-content/uploads/2022/08/Orange-Red-Flash-Sale-9.9-Promotion-Banner-1024x512.png" className="h-64 w-[550px] mb-4"></img>
              <Button onClick={() => setOpenModal5(true)}>Update Image</Button>
              <Modal show={openModal5} onClose={() => setOpenModal5(false)}>
                <Modal.Header>Update Image</Modal.Header>
                <Modal.Body>
                  < AddImageHomePageBanner />
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setOpenModal5(false)}>Accept</Button>
                  <Button color="gray" onClick={() => setOpenModal5(false)}>
                    Decline
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
        <div class="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-gray-100 mb-10 px-4 pt-10 pb-20">
          <div
            id="content"
            class="">
            <h1 class="font-bold  lg:pl-5 lg:pt-4 uppercase text-black lg:md:text-2xl text-lg">
              Admin Insight
            </h1>
            <h1 class="font-medium  lg:md:pt-1 lg:pl-5 text-gray-500 text-xs lg:md:text-base mb-3">
              Critical business priorities encompass operational efficiency, market dynamics, and customer engagement
            </h1>
            <AdminInsight />
            <div className="mt-4">
              <h1 class="font-bold  lg:pl-5 py-4 uppercase text-black lg:md:text-2xl text-lg">
                Last Month Users
              </h1>
              <AdminBarChart />
            </div>
            <div id="last-users"></div>
          </div>
        </div>
      </div>
    </>
  )
}
