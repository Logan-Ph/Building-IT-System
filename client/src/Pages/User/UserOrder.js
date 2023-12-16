import UserSidebar from '../../Components/UserSidebar';

export default function UserOrder() {
    return (
        <>
        <UserSidebar></UserSidebar> 
        <div className="pl-0 md:pl-64 transition-all" id="main">

            <div className='pl-8 mt-6 p-5'>
                <h1 class="font-bold text-black text-3xl">
                    My Orders
                </h1>
            </div> 

            <div className="max-w-8xl px-4 sm:px-6 lg:px-8 m-2 pb-2 w-full mx-auto">
                <div className="flex items-center py-10">
                    <div className="flex flex-row items-center">
                        <input type="text" name="search" placeholder="Search by name, id, ...  " 
                            className="rounded-md w-full border border-slate-400 pl-4 pr-20 py-2 text-md hover:border-black"  />
                    </div>
                    <div className='flex items-center ml-2'>
                        <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 md:px-2 md:py-2 border border-blue-600 rounded-lg" >
                            Search
                        </button>
                        <button className="bg-transparent hover:bg-[#E61E2A] text-[#E61E2A] font-semibold hover:text-white py-2 px-4 border border-[#E61E2A] hover:border-transparent rounded-lg ml-2">
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        

            <div class="text-md font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul class="flex flex-wrap -mb-px">
                    <li class="me-2">
                        <a href="#" class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">All</a>
                    </li>
                    <li class="me-2">
                        <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Waitting for Payment</a>
                    </li>
                    <li class="me-2">
                        <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Being Delivered</a>
                    </li>
                    <li class="me-2">
                        <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Completed</a>
                    </li>
                    <li class="me-2">
                        <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Cancelled</a>
                    </li>
                </ul>
            </div>

        <div class="flex flex-col justify-center dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">

            <div class="my-4 md:mt-6 flex flex-col">
                <div class="p-6 bg-white divide-y">
                    <div className='flex items-center mb-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package-check"><path d="m16 16 2 2 4-4"/><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"/><path d="m7.5 4.27 9 5.15"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" x2="12" y1="22" y2="12"/></svg>
                        <h1 class="pl-2 text-lg font-bold">Completed</h1>
                    </div>
                    <div class="flex items-center space-x-4 mb-4">
                        <img src="https://lemonsquare.com.ph/main/wp-content/uploads/2022/07/milkie-biscuit-chocolate-banner.webp" alt="Product" class="w-32 h-32"></img>
                        <div>
                            <h2 class="font-bold">Milkie Biscuit Chocolate</h2>
                            <p>x1</p>
                            <p>52.600 đ</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4 mb-4">
                        <img src="https://lemonsquare.com.ph/main/wp-content/uploads/2022/07/whatta-tops-chocolahat-banner.webp" alt="Product" class="w-32 h-32"></img>
                        <div>
                            <h2 class="font-bold">Whatta Tops Cupcakes</h2>
                            <p>x1</p>
                            <p>56.800 đ</p>
                        </div>
                    </div>
                    <div class="flex flex-col justify-between items-end h-full">
                        <p class="text-lg font-bold">Total: 261.380 đ</p>
                        <div>
                            <button class="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded mr-2">Buy Again</button>
                            <button class="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded">More Details</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="my-4 md:mt-6 flex flex-col w-full">
                <div class="p-6 bg-white divide-y">
                    <div className='flex items-center mb-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ban"><circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/></svg>
                        <h1 class="pl-2 text-lg font-bold">Cancelled</h1>
                    </div>
                    <div class="flex items-center space-x-4 mb-4">
                        <img src="https://lemonsquare.com.ph/main/wp-content/uploads/2022/07/milkie-biscuit-chocolate-banner.webp" alt="Product" class="w-32 h-32"></img>
                        <div>
                            <h2 class="font-bold">Milkie Biscuit Chocolate</h2>
                            <p>x1</p>
                            <p>52.600 đ</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4 mb-4">
                        <img src="https://lemonsquare.com.ph/main/wp-content/uploads/2022/07/whatta-tops-chocolahat-banner.webp" alt="Product" class="w-32 h-32"></img>
                        <div>
                            <h2 class="font-bold">Whatta Tops Cupcakes</h2>
                            <p>x1</p>
                            <p>56.800 đ</p>
                        </div>
                    </div>
                    <div class="flex flex-col justify-between items-end h-full">
                        <p class="text-lg font-bold">Total: 261.380 đ</p>
                        <div>
                            <button class="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded mr-2">Buy Again</button>
                            <button class="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded">More Details</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="my-4 md:mt-6 flex flex-col w-full">
                <div class="p-6 bg-white divide-y">
                    <div className='flex items-center mb-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-truck"><path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/><path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2"/><circle cx="7" cy="18" r="2"/><path d="M15 18H9"/><circle cx="17" cy="18" r="2"/></svg>
                        <h1 class="pl-2 text-lg font-bold">Delivering</h1>
                    </div>
                    <div class="flex items-center space-x-4 mb-4">
                        <img src="https://lemonsquare.com.ph/main/wp-content/uploads/2022/07/milkie-biscuit-chocolate-banner.webp" alt="Product" class="w-32 h-32"></img>
                        <div>
                            <h2 class="font-bold">Milkie Biscuit Chocolate</h2>
                            <p>x1</p>
                            <p>52.600 đ</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4 mb-4">
                        <img src="https://lemonsquare.com.ph/main/wp-content/uploads/2022/07/whatta-tops-chocolahat-banner.webp" alt="Product" class="w-32 h-32"></img>
                        <div>
                            <h2 class="font-bold">Whatta Tops Cupcakes</h2>
                            <p>x1</p>
                            <p>56.800 đ</p>
                        </div>
                    </div>
                    <div class="flex flex-col justify-between items-end h-full">
                        <p class="text-lg font-bold">Total: 261.380 đ</p>
                        <div>
                            <button class="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded">More Details</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
         
    </div>
</>
)
}