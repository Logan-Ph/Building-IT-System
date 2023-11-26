export default function UserProfile() {
    return (
      <>
        <body className="font-outfit">

            {/* <!-- NAVBAR --> */}
            <nav className="h-16 py-1 px-4 bg-white shadow-md sticky top-0 left-0 z-50">
                <div className="flex items-center h-full gap-12">

                    {/* <!-- Add this Toggle-bar to the nav-bar when completed --> */}
                    <i className='bx bx-menu text-2xl cursor-pointer toggle-sidebar'></i>
                    
                </div>
            </nav>
            {/* <!-- NAVBAR --> */}

            {/* <!-- SIDEBAR --> */}
            <div className="fixed top-16 transition-all overflow-hidden left-0 w-64 bg-white border-r border-gray-200 bottom-0 sidebar-collapse z-40" id="sidebar">

                <a href="#" className="p-4 flex items-center gap-4 hover:bg-blue-50">
                    <img src="https://www.newsnationnow.com/wp-content/uploads/sites/108/2022/07/Cat.jpg?w=2560&h=1440&crop=1" className="w-16 aspect-square object-cover rounded" alt="">
                    <div className="whitespace-nowrap sidebar-user-profile">
                        <h3 className="text-lg font-semibold mb-1">Ninh Pho</h3>
                        <span className="py-1 px-2 rounded-full bg-yellow-500 text-white text-sm font-medium">Golden Membership</span>
                    </div>
                </a>
                <div className="py-4">
                    <span className="text-sm text-gray-500 uppercase ml-4 inline-block mb-2 sidebar-menu-title">Menu</span>
                    <ul className="sidebar-menu">
                        <li>
                            <a href="#" className="active">
                                <i className='bx bx-user-circle sidebar-menu-icon' ></i>
                                Account
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className='bx bx-receipt sidebar-menu-icon'></i>                        
                                Order
                            </a>
                            <ul className="sidebar-dropdown hidden ml-4 border-l border-blue-600">
                                <li>
                                    <a href="#">All</a>
                                </li>
                                <li>
                                    <a href="#">Waiting For Payment</a>
                                </li>
                                <li>
                                    <a href="#">Processing</a>
                                </li>
                                <li>
                                    <a href="#">Being Delivered</a>
                                </li>
                                <li>
                                    <a href="#">Completed</a>
                                </li>
                                <li>
                                    <a href="#">Cancelled</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                <i className='bx bx-bell sidebar-menu-icon'></i>
                                Notifications
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className='bx bx-heart sidebar-menu-icon' ></i>
                                Wishlist
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className='bx bx-question-mark sidebar-menu-icon' ></i>
                                Help
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <!-- SIDEBAR --> */}

            {/* <!-- MAIN --> */}
            <div className="pl-0 md:pl-64 transition-all" id="main">
                <div className="p-4">
                    <div className="flex items-center gap-4 mt-4">
                        <img src="https://www.newsnationnow.com/wp-content/uploads/sites/108/2022/07/Cat.jpg?w=2560&h=1440&crop=1" className="w-28 h-28 object-cover rounded-full" alt="">
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Ninh Pho</h2>
                            <span className="text-lg text-gray-500">_ninhcute2023_</span>
                        </div>
                        <a href="#" className="py-2 px-4 rounded bg-blue-600 sm:flex items-center gap-2 text-white hover:bg-blue-700 ml-auto hidden">
                            <i className='bx bx-edit-alt' ></i>
                            Save changes
                        </a>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center gap-8 tab-indicator border-b border-gray-200">
                            <span data-toggle="tab" data-target="#profile" className="active">Profile</span>
                            <span data-toggle="tab" data-target="#addresses">Addresses</span>
                            <span data-toggle="tab" data-target="#changepassword">Password</span>
                            <span data-toggle="tab" data-target="#notisetting">Notifications</span>
                        </div>
                        <div className="tab-content mt-4" id="profile">
                            <h2 className="text-2xl font-semibold">My Profile</h2>
                            <div className="border-b border-gray-900/10 pb-12">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">Manage and protect your account
                                </p>
                        
                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                
                                <div className="col-span-full">
                                        <label for="photo" className="block text-sm font-medium leading-6 text-gray-900">Avatar picture</label>
                                        <div className="mt-2 flex items-center gap-x-3">
                                        <input type="file" id="fileUpload" name="photo" accept="image/*" style="display: none;" />
                                        <svg onclick="document.getElementById('fileUpload').click()" className="h-12 w-12 text-gray-300 cursor-pointer" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                                        </svg>
                                        <button type="button" onclick="document.getElementById('fileUpload').click()" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Change</button>
                                        </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label for="username" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">rBuy.com/</span>
                                        <input type="text" name="username" id="username" autocomplete="username" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith">
                                        </div>
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label for="first-name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                                    <div className="mt-2">
                                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    </div>
                                </div>
                        
                                <div className="sm:col-span-3">
                                    <label for="last-name" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                                    <div className="mt-2">
                                    <input type="text" name="last-name" id="last-name" autocomplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    </div>
                                </div>
                        
                                <div className="sm:col-span-4">
                                    <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                    <div className="mt-2">
                                    <input id="email" name="email" type="email" autocomplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Phone number</label>
                                    <div className="mt-2">
                                    <input id="phone" name="phone" type="phone" autocomplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    </div>
                                </div>
                        
                                <div className="sm:col-span-3">
                                    <label for="country" className="block text-sm font-medium leading-6 text-gray-900">Sex</label>
                                    <div className="mt-2">
                                    <select id="country" name="country" autocomplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label for="dob" className="block text-sm font-medium leading-6 text-gray-900">Date of Birth</label>
                                    <div className="mt-2">
                                    <input id="dob" name="dob" type="date" autocomplete="bday" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                    </div>
                                </div>
                                
                                </div>
                            </div>
                                
                        </div>

                        <div className="tab-content mt-4 hidden" id="addresses">
                            <h2 className="text-2xl font-semibold">My Addresses</h2>
                            <div className="border-b border-gray-900/10 pb-12">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
                        
                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        
                                <div className="sm:col-span-3">
                                    <label for="country" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
                                    <div className="mt-2">
                                    <select id="country" name="country" autocomplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                        <option>Vietnam</option>
                                        <option>Australia</option>
                                        <option>United States</option>
                                    </select>
                                    </div>
                                </div>
                        
                                <div className="col-span-full">
                                    <label for="street-address" className="block text-sm font-medium leading-6 text-gray-900">Street address</label>
                                    <div className="mt-2">
                                    <input type="text" name="street-address" id="street-address" autocomplete="street-address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    </div>
                                </div>
                        
                                <div className="sm:col-span-2 sm:col-start-1">
                                    <label for="city" className="block text-sm font-medium leading-6 text-gray-900">City</label>
                                    <div className="mt-2">
                                    <input type="text" name="city" id="city" autocomplete="address-level2" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    </div>
                                </div>
                        
                                <div className="sm:col-span-2">
                                    <label for="region" className="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
                                    <div className="mt-2">
                                    <input type="text" name="region" id="region" autocomplete="address-level1" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    </div>
                                </div>
                        
                                <div className="sm:col-span-2">
                                    <label for="postal-code" className="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                                    <div className="mt-2">
                                    <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    </div>
                                </div>
                                </div>
                            </div>
                            
                        </div>

                        <div className="tab-content mt-4 hidden" id="changepassword">
                            <h2 className="text-2xl font-semibold">My Password</h2>
                            <div className="border-b border-gray-900/10 pb-12">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Set Password</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">For your account's security, do not share your password with anyone else</p>
                        
                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-4">
                                    <label for="newPassword" className="block text-sm font-medium leading-6 text-gray-900">New password</label>
                                    <div className="mt-2">
                                        <input id="newPassword" name="newPassword" type="password" autocomplete="new-password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    </div>
                                    </div>
                                
                                    <div className="sm:col-span-4">
                                    <label for="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">Confirm password</label>
                                    <div className="mt-2">
                                        <input id="confirmPassword" name="confirmPassword" type="password" autocomplete="new-password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    </div>
                                    </div>
                                
                                    <div className="sm:col-span-4">
                                    <button type="submit" className="mt-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Confirm</button>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>


                        <div className="tab-content mt-4" id="notisetting">
                            <h2 className="text-2xl font-semibold">Notification Settings</h2>
                            <div className="border-b border-gray-900/10 pb-12">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">We'll always let you know about important changes, but you pick what else you want to hear about.</p>
                        
                                <div className=" space-y-10">
                                <fieldset>
                                    <div className="mt-6 space-y-6">
                                        <div className="relative flex gap-x-3">
                                            <div className="flex h-6 items-center">
                                            <input id="comments" name="comments" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                            </div>
                                            <div className="text-sm leading-6">
                                            <label for="comments" className="font-medium text-gray-900">Sending Email</label>
                                            <p className="text-gray-500">
                                                Receive ads, promotions, offers and news via email.                                   
                                            </p>
                                            </div>
                                        </div>
                                        <div className="relative flex gap-x-3">
                                        <div className="flex h-6 items-center">
                                        <input id="comments" name="comments" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                        </div>
                                        <div className="text-sm leading-6">
                                        <label for="comments" className="font-medium text-gray-900">Order Updates</label>
                                        <p className="text-gray-500">
                                            Notify when there are updates on my orders, including payment-related updates.
                                        </p>
                                        </div>
                                    </div>
                                    <div className="relative flex gap-x-3">
                                        <div className="flex h-6 items-center">
                                        <input id="comments" name="comments" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                        </div>
                                        <div className="text-sm leading-6">
                                        <label for="comments" className="font-medium text-gray-900">Order Updates</label>
                                        <p className="text-gray-500">
                                            Notify when there are updates on my orders, including payment-related updates.
                                        </p>
                                        </div>
                                    </div>
                                    <div className="relative flex gap-x-3">
                                        <div className="flex h-6 items-center">
                                        <input id="candidates" name="candidates" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                        </div>
                                        <div className="text-sm leading-6">
                                        <label for="candidates" className="font-medium text-gray-900">Listing Updates</label>
                                        <p className="text-gray-500">
                                            Notify when my listing as a seller becomes sold out, deleted or suspended.
                                        </p>
                                        </div>
                                    </div>
                                    <div className="relative flex gap-x-3">
                                        <div className="flex h-6 items-center">
                                        <input id="offers" name="offers" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                        </div>
                                        <div className="text-sm leading-6">
                                        <label for="offers" className="font-medium text-gray-900">Promotions</label>
                                        <p className="text-gray-500">
                                            Send me news on exclusive offers and deals
                                        </p>
                                        </div>
                                    </div>
                                    <div className="relative flex gap-x-3">
                                        <div className="flex h-6 items-center">
                                        <input id="offers" name="offers" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                        </div>
                                        <div className="text-sm leading-6">
                                        <label for="offers" className="font-medium text-gray-900">Personalised Content</label>
                                        <p className="text-gray-500">
                                            Send me personalised updates. (e.g. your birthday gift).
                                        </p>
                                        </div>
                                    </div>
                                    </div>
                                </fieldset>
                                
                                </div>
                            </div>   
                        </div>
                        


                    </div>          
                </div>    
            </div>
            {/* <!-- MAIN --> */}


            <script src=""></script>
        </body>
      </>
    );
}