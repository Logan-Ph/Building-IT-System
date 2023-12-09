'use client';

import Sidebar from "../../Components/Sidebar";
import { SidebarItem } from "../../Components/Sidebar";
import BarChart from "../../Components/BarChart";
import AdminInsight from "../../Components/AdminInsight";
import ToDoList from "../../Components/ToDoList";
import { Settings, LayoutDashboard, LineChart, ChevronDown } from "lucide-react";
import AddImageHomePage from "../../Components/AddImageHomePageCarousel";
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
export default function DashboardPage() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      {/* <div class="sm:xs:flex sm:xs:flex-col items-center w-16 h-full  text-gray-700 bg-gray-200 rounded lg:md:hidden">

  <div class="flex flex-col items-center mt-3 border-t border-gray-300">
    <a class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300" href="#">
      <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    </a>
    <a class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300" href="#">
      <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </a>
    
    <a class="flex items-center justify-center w-12 h-12 mt-2 bg-gray-300 rounded" href="#">
      <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </a>
    <a class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300" href="#">
      <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>
    </a>
  </div>
  <div class="flex flex-col items-center mt-2 border-t border-gray-300">
    <a class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300" href="#">
      <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    </a>
    <a class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300" href="#">
      <svg class="w-6 h-6 stroke-current"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    </a>
    <a class="relative flex items-center justify-center w-12 h-12 mt-2 hover:bg-gray-300" href="#">
      <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
      <span class="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
    </a>
  </div>
  <a class="flex items-center justify-center w-16 h-16 mt-auto bg-gray-200 hover:bg-gray-300" href="#">
    <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </a>
</div>

<div class="lg:md:flex lg:md:flex-col items-center w-[400px] h-screen mt-4  text-gray-700 bg-gray-200 rounded sm:hidden xs:hidden">
  
  <div class="w-full px-2">
    <div class="flex flex-col items-center w-full mt-3 border-t border-gray-300">
      <a class="flex items-center  w-full h-12 px-10 mt-2 rounded hover:bg-gray-300" href="#">
        <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span class="ml-2 text-lg font-medium">Dasboard</span>
      </a>
      
      <a class="flex items-center w-full h-12 px-10 mt-2 rounded hover:bg-gray-300" href="#">
        <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span class="ml-2 text-lg  font-medium">Search</span>
      </a>
      <a class="flex items-center w-full h-12 px-10 mt-2 bg-gray-300 rounded" href="#">
        <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span class="ml-2 text-lg  font-medium">Insights</span>
      </a>
      <a class="flex items-center w-full h-12 px-10 mt-2 rounded hover:bg-gray-300" href="#">
        <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
        </svg>
        <span class="ml-2 text-lg  font-medium">Docs</span>
      </a>
    </div>
    <div class="flex flex-col items-center w-full mt-2 border-t border-gray-300">
      <a class="flex items-center w-full h-12 px-10 mt-2 rounded hover:bg-gray-300" href="#">
        <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span class="ml-2 text-lg  font-medium">Products</span>
      </a>
      <a class="flex items-center w-full h-12 px-10 mt-2 rounded hover:bg-gray-300" href="#">
        <svg class="w-6 h-6 stroke-current"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
        <span class="ml-2 text-lg  font-medium">Settings</span>
      </a>
      
    </div>
  </div>
  <a class="flex items-center justify-center w-full h-16 mt-auto bg-gray-200 hover:bg-gray-300" href="#">
    <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span class="ml-2 text-lg  font-medium">Account</span>
  </a>
  
</div> */}

      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />
      <div className=" flex">


        <Sidebar>








          <SidebarItem icon={<Settings size={20} />} text="Product"
            subitems={[
              { text: "My Products" },
              { text: "Add Product", href: "https://www.google.com/" },
              { text: "Delete Product" },
              // Add more subitems as needed
            ]} />





          <SidebarItem icon={<Settings size={20} />} text="Order"
            subitems={[
              { text: "My Orders", href: "https://www.google.com/" },
              { text: "Ship Orders" },
              // Add more subitems as needed
            ]} />



          <SidebarItem icon={<Settings size={20} />} text="Dashboard"
            subitems={[
              { text: "Subitem 1", href: "https://www.google.com/" },
              { text: "Subitem 2" },
              // Add more subitems as needed
            ]} />



          <SidebarItem icon={<Settings size={20} />} text="Dashboard"
            subitems={[
              { text: "Subitem 1", href: "https://www.google.com/" },
              { text: "Subitem 2" },
              // Add more subitems as needed
            ]} />


          <SidebarItem icon={<Settings size={20} />} text="Dashboard"
            subitems={[
              { text: "Subitem 1", href: "https://www.google.com/" },
              { text: "Subitem 2" },
              // Add more subitems as needed
            ]} />
        </Sidebar>

        <div class=" max-w-8xl mb-10 pb-5 lg:md:w-full w-5/6 ">



          <div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-gray-100 mb-10 px-4">



            <h1 class="font-bold  lg:pl-5  uppercase text-black lg:md:text-2xl text-lg pt-10 ">
              Upload Images in Homepage
            </h1>
            <h1 class="font-medium  lg:md:pt-1 lg:pl-5 text-gray-500 text-xs lg:md:text-base mb-3">
              Upload real, high resolution, clear product images. You should choose images with 1:1 resolution
            </h1>

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
                  Last Month Incomes
                </h1>
                <BarChart />
              </div>
              <div id="last-users"></div>
            </div>
          </div>
        </div>
      </div>






    </>
  );
}
