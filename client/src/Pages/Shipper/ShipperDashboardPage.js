import '../../css/mangeorder.css'
import React from "react";
import { Tabs } from 'flowbite-react';

import AllTableComponent from '../../Components/VMOAllTableComponentShipper';
import ConfirmTableComponent from '../../Components/VMOConfirmTableComponentShipper';
import UnpaidTableComponentShipper from '../../Components/VMOUnpaidTableComponentShipper';




export default function ManageOrderPage(){
    return <>
        <main className="max-w-full px-4 sm:px-6 lg:px-8 bg-gray-100 mb-10 pb-5 w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <div className="flex items-center py-10">
                <div className="flex flex-row items-center">
                    <input type="text" name="search" placeholder="Search orders here.... "
                    className="rounded-md w-full border border-slate-400 pl-4 pr-20 py-2 text-md hover:border-black"/>
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
                <Component/>
            </div>   
        </main>
    </>
}

    {/* <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
            <li class="me-2" role="presentation">
                <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
            </li>
            <li class="me-2" role="presentation">
                <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dashboard</button>
            </li>
            <li class="me-2" role="presentation">
                <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
            </li>
            <li role="presentation">
                <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Contacts</button>
            </li>
        </ul>
    </div>
    <div id="default-tab-content">
        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <div className='border border-gray my-1 py-32'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='w-[100px] h-[80px]'>
                        <img src={require("../Components/images/noorder.png")}
                        alt="No Order image" className='w-full h-full'/>
                    </div>
                    <p className="capitalize text-md text-gray-900 font-light my-2">no orders found</p>
                </div>
            </div> 
        </div>
        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
            <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
        </div>
        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
            <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
        </div>
        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
            <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
        </div>
    </div> */}



function Component(){
    return (
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
                            alt="No Order image" className='w-full h-full'/>
                        </div>
                        <p className="capitalize text-md text-gray-900 font-light my-2">no orders found</p>
                    </div>
                </div>  
            </Tabs.Item>
        </Tabs>
    )
}






