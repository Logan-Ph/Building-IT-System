import '../css/mangeorder.css'
import React from "react";
import { Tabs } from 'flowbite-react';
import { Table } from 'flowbite-react';

export default function ManageOrderPage(){
    return <>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-gray-100 ">

            <div className="flex items-center justify-between">
                <div>
                    <div className='flex flex-row my-10'>
                        <div className="flex flex-row items-center justify-around border">
                            <div className="relative text-gray-600">
                                <input className="border-2 border-[#E61E2A] bg-white h-10 pl-5 pr-[500px] rounded-lg text-sm focus:outline-none"
                                type="search" name="search" placeholder="Search orders here"/>
                                <button type="submit" className="searchButton absolute px-2 pt-2 mt-5 mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </button>
                            </div>

                        </div>

                        <div className='mx-10'>
                            <button className="bg-[#E61E2A] hover:bg-[#e61e2bc3] text-white font-bold py-2 px-4 border border-[#E61E2A] rounded-lg">
                                Search
                            </button>

                            <button className="bg-transparent hover:bg-[#E61E2A] text-[#E61E2A] font-semibold hover:text-white py-2 px-4 border border-[#E61E2A] hover:border-transparent rounded-lg ml-5">
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
                {/* <div className='border border-[#E61E2A] rounded-lg px-4 py-6 bg-gray-50'>
                    <h3 className='font-bold text-lg text-[#FAC800] mb-1'>Payment Details</h3>
                    <p className='text-xs text-gray-900'>ORDER # 406-9287050-3565134</p>
                    <div className='flex justify-between items-center pt-10'>
                        <p className='text-sm font-medium'>Payment status</p>
                        <button className="bg-transparent hover:bg-[#E61E2A] text-[#E61E2A] text-sm px-2  font-bold hover:text-white border border-[#E61E2A] hover:border-transparent rounded-lg ml-5">
                            unpaid
                        </button>
                    </div>
                </div> */}
            </div>

            <div>                        
                <Component />

            </div>

            {/* <div className='border border-gray my-1 py-32'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='w-[100px] h-[80px]'>
                        <img src={require("../Components/images/noorder.png")}
                        alt="No Order image" className='w-full h-full'/>
                    </div>
                    <p className="capitalize text-md text-gray-900 font-light my-2">no orders found</p>
                </div>
            </div>     */}


        </main>
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

    </>
}

function Component(){
    return (
        <Tabs aria-label="Tabs with icons" style="underline">
            <Tabs.Item active title="All">
                <div className='border border-gray my-1 py-32'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='w-[100px] h-[80px]'>
                            <img src={require("../Components/images/noorder.png")}
                            alt="No Order image" className='w-full h-full'/>
                        </div>
                        <p className="capitalize text-md text-gray-900 font-light my-2">no orders found</p>
                    </div>
                </div>   
            </Tabs.Item>
            <Tabs.Item title="Unpaid">
                <div className='my-10'>
                    <TableComponent />
                </div>    

            </Tabs.Item>
            <Tabs.Item title="To Ship">
                This is <span className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</span>.
                Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                control the content visibility and styling.
            </Tabs.Item>
            <Tabs.Item title="Shipping">
                This is <span className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</span>.
                Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                control the content visibility and styling.
            </Tabs.Item>
            <Tabs.Item title="Completed">
                This is <span className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</span>.
                Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                control the content visibility and styling.
            </Tabs.Item>
            <Tabs.Item title="Failed Delivery">
                This is <span className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</span>.
                Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                control the content visibility and styling.
            </Tabs.Item>
        </Tabs>
        
    );
}

function TableComponent() {
    return (
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Product name</Table.HeadCell>
            <Table.HeadCell>Order ID</Table.HeadCell>
            <Table.HeadCell>Order Date</Table.HeadCell>
            <Table.HeadCell>Shipping Adress</Table.HeadCell>
            <Table.HeadCell>Contact number</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {'Apple MacBook Pro 17"'}
              </Table.Cell>
              <Table.Cell>#1234</Table.Cell>
              <Table.Cell>22/12/2022</Table.Cell>
              <Table.Cell>104 Pho Quang p2 qTB</Table.Cell>
              <Table.Cell>0977702769</Table.Cell>
              <Table.Cell>
                    <button className="bg-transparent text-[#E61E2A] text-sm px-2 font-bold border border-[#E61E2A] rounded-lg">Unpaid</button>
              </Table.Cell>
              <Table.Cell>
                <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  More
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Microsoft Surface Pro
              </Table.Cell>
              <Table.Cell>#1234</Table.Cell>
              <Table.Cell>22/12/2022</Table.Cell>
              <Table.Cell>104 Pho Quang p2 qTB</Table.Cell>
              <Table.Cell>0977702769</Table.Cell>
              <Table.Cell>
                    <button className="bg-transparent text-[#E61E2A] text-sm px-2 font-bold border border-[#E61E2A] rounded-lg">Unpaid</button>
              </Table.Cell>
              <Table.Cell>
                <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  More
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</Table.Cell>
              <Table.Cell>#1234</Table.Cell>
              <Table.Cell>22/12/2022</Table.Cell>
              <Table.Cell>104 Pho Quang p2 qTB</Table.Cell>
              <Table.Cell>0977702769</Table.Cell>
              <Table.Cell>
                    <button className="bg-transparent text-[#618264] text-sm px-5 font-bold border border-[#618264] rounded-lg">Paid</button>
              </Table.Cell>
              <Table.Cell>
                <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  More
                </a>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }