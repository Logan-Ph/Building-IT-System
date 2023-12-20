import '../../css/mangeorder.css'
import React from "react";
import { Tabs } from 'flowbite-react';
import ToDoListShipper from '../../Components/ToDoListShipper';
import AllTableComponent from '../../Components/VMOAllTableComponentShipper';
import ConfirmTableComponent from '../../Components/VMOConfirmTableComponentShipper';
import UnpaidTableComponentShipper from '../../Components/VMOUnpaidTableComponentShipper';




export default function ManageOrderPage() {

    return <>
        <div class="max-w-full mb-10 pb-5 lg:md:w-full w-5/6 overflow:hidden">
            <div
                id="content"
                class="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-gray-100 mb-10 px-4"
            >
                <h1 class="font-bold  lg:pl-5 pt-4 uppercase text-black lg:md:text-2xl text-xl">
                    To Do List
                </h1>
                <h1 class="font-medium  lg:md:pt-1 lg:pl-5 text-gray-500 text-xs lg:md:text-base lg:mb-3">
                    Things your business need to deal with
                </h1>
                <ToDoListShipper />
            </div>


            <div className='shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-gray-100 mb-10 px-4'>
                <div className="flex items-center py-10 px-4">
                    <div className="flex flex-row items-center">
                        <input type="text" name="search" placeholder="Search orders here.... "
                            className="rounded-md w-full border border-slate-400 pl-4 pr-20 py-2 text-md hover:border-black" />
                    </div>
                    <div className='flex items-center ml-2'>
                        <button className="bg-[#E61E2A] hover:bg-[#e61e2bc3] text-white font-bold py-2 px-4 md:px-2 md:py-2 border border-[#E61E2A] rounded-lg">
                            Search
                        </button>
                        <button className="bg-transparent hover:bg-[#E61E2A] text-[#E61E2A] font-semibold hover:text-white py-2 px-4 border border-[#E61E2A] hover:border-transparent rounded-lg ml-2">
                            Reset
                        </button>
                    </div>
                </div>

                <div>
                    <Component />
                </div>
            </div>
        </div>
    </>
}



function Component() {
    return (

        <>

            <div className=' bg-gray-100 mb-10 px-4'>



                <Tabs aria-label="Tabs with icons" style="underline">
                    <Tabs.Item active title="All">
                        <AllTableComponent />
                    </Tabs.Item>
                    <Tabs.Item title="Confirmation">
                        <ConfirmTableComponent />
                    </Tabs.Item>
                    <Tabs.Item title="To Ship">
                        <UnpaidTableComponentShipper />
                    </Tabs.Item>
                    <Tabs.Item title="Shipping">
                        <UnpaidTableComponentShipper />
                    </Tabs.Item>
                    <Tabs.Item title="Completed">
                        <UnpaidTableComponentShipper />
                    </Tabs.Item>
                    <Tabs.Item title="Failed Delivery">
                        <div className='border border-gray my-1 py-32'>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='w-[100px] h-[80px]'>
                                    <img src={require("../../Components/images/noorder.png")}
                                        alt="No Order image" className='w-full h-full' />
                                </div>
                                <p className="capitalize text-md text-gray-900 font-light my-2">no orders found</p>
                            </div>
                        </div>
                    </Tabs.Item>
                </Tabs>
            </div>
        </>
    )
}





