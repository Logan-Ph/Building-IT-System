import '../../css/profile.css'
import axios from 'axios'
import { useState, useCallback, useContext, useEffect } from 'react'
import { UserContext } from '../../Context/UserContext';
import { ToastContainer, toast } from 'react-toastify'
import { UserImageContext } from '../../Context/UserImageContext';
import { Navigate } from 'react-router';


export default function UserProfile() {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const [activeTab, setActiveTab] = useState("profile")
    const { userImage, setUserImage } = useContext(UserImageContext)
    const dropdownItems = ['All', 'Waiting For Payment', 'Processing', 'Being Delivered', 'Completed', 'Cancelled']

    const [error, setError] = useState('')
    const [msg, setMsg] = useState('')
    const { user, setUser } = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(true)

    const handleSidebarToggle = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
        setActiveDropdown(null); // Hide dropdown when sidebar is toggled
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleDropdownToggle = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    useEffect(() => {
        error && notify(error)
        msg && success(msg)
    }, [error, msg]);

    const notify = (error) => {
        toast.error(error, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            pauseOnHover: false,
            theme: "light",
        });
    }

    const success = (success) => {
        toast.success(success, {
            position: "top-center",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            pauseOnHover: false,
            theme: "light",
        });
    }

    const fetchUser = useCallback(async () => {
        try {
            const res = await axios.get("http://localhost:4000/login/success", { withCredentials: true });
            setUser(res.data.user);
            setUserImage(res.data.userImage)
            setIsLoading(false);
        } catch (er) {
            setIsLoading(false);
        }
    }, [setUser])

    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')
    const [name, setName] = useState('')
    const email = user && user.email;
    const [file, setFile] = useState();

    const handleFileChange = (event) => {
        event.preventDefault()
        setFile(event.target.files[0]);
    };

    const data = {
        email: email,
        name: name,
        phoneNumber: phoneNumber,
        address: address,
        file: file,
    }

    async function axiosPostData() {
        try {
            await axios.post('http://localhost:4000/update-user', data, { withCredentials: true, headers: { 'Content-Type': 'multipart/form-data' } })
                .then(res => {
                    setMsg(res.data)
                    setError('')
                })
                .catch(er => { setError(er.response.data); setMsg() });
        } catch (error) {
            console.error('Failed to update.', error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosPostData();
        if (error) {
            notify(error);
        }
    }

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    if (isLoading) {
        return <div>Loading....</div>
    }

    return (
        <>
            {!user && <Navigate to={'/login'} replace />}
            <ToastContainer
                position="top-center"
                autoClose={10000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
            />
            <body className="font-outfit">
                {/* <!-- SIDEBAR --> */}
                <div className={`absolute left-0 top-24 transition-all overflow-hidden w-64 bg-white border-r border-gray-200 bottom-0 ${isSidebarCollapsed ? 'sidebar-collapse' : ''} z-40`} id="sidebar">
                    <span href="#" className="p-4 flex items-center gap-4 hover:bg-blue-50" onClick={handleSidebarToggle}>
                        <img src={(userImage) ? `data:image/jpeg;base64,${userImage}` : require("../../Components/images/defaultUserImage.png")} className="w-16 aspect-square object-cover rounded" alt="" />
                        <div className="whitespace-nowrap sidebar-user-profile">
                            <span className="py-1 px-2 rounded-full bg-yellow-500 text-white text-sm font-medium">Golden Membership</span>
                        </div>
                    </span>
                    <div className="py-4">
                        <span className="text-sm text-gray-500 uppercase ml-4 inline-block mb-2 sidebar-menu-title">Menu</span>
                        <ul className="sidebar-menu">
                            <li>
                                <span href="#" className="active">
                                    <i className='bx bx-user-circle sidebar-menu-icon' ></i>
                                    Account
                                </span>
                            </li>
                            <li>
                                <span href="#" onClick={() => handleDropdownToggle(0)}>
                                    <i className='bx bx-receipt sidebar-menu-icon'></i>
                                    Order
                                </span>
                                <ul className={`sidebar-dropdown ${activeDropdown === 0 ? '' : 'hidden'} ml-4 border-l border-blue-600`}>
                                    {dropdownItems.map((item, index) => (
                                        <li key={index} className={index === 0 ? 'active' : ''}>
                                            <span href="#">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li>
                                <span href="#">
                                    <i className='bx bx-bell sidebar-menu-icon'></i>
                                    Notifications
                                </span>
                            </li>
                            <li>
                                <span href="#">
                                    <i className='bx bx-heart sidebar-menu-icon' ></i>
                                    Wishlist
                                </span>
                            </li>
                            <li>
                                <span href="#">
                                    <i className='bx bx-question-mark sidebar-menu-icon' ></i>
                                    Help
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <!-- SIDEBAR --> */}

                {/* <!-- MAIN --> */}
                <div className="pl-0 md:pl-64 transition-all" id="main">
                    <div className="p-4">
                        <div className="flex items-center gap-4 mt-4">
                            <img src={(userImage) ? `data:image/jpeg;base64,${userImage}` : require("../../Components/images/defaultUserImage.png")} className="w-28 h-28 object-cover rounded-full" alt="" />
                            <div>
                                <h2 className="text-2xl font-semibold mb-2">{user && user.name}</h2>
                                <span className="text-lg text-gray-500">{user && user.email}</span>
                            </div>
                            <button onClick={handleSubmit} className="py-2 px-4 rounded bg-blue-600 sm:flex items-center gap-2 text-white hover:bg-blue-700 ml-auto">
                                <i className='bx bx-edit-alt' ></i>
                                Save changes
                            </button>
                        </div>
                        <div className="mt-4">
                            <div className="flex items-center gap-8 tab-indicator border-b border-gray-200">
                                <span onClick={() => handleTabClick("profile")} className={activeTab === "profile" ? "active" : ""}>Profile</span>
                                <span onClick={() => handleTabClick("changepassword")} className={activeTab === "changepassword" ? "active" : ""}>Password</span>
                                <span onClick={() => handleTabClick("notisetting")} className={activeTab === "notisetting" ? "active" : ""}>Notifications</span>
                            </div>
                            {activeTab === "profile" && <div className="tab-content mt-4" id="profile">
                                <div className="border-b border-gray-900/10 pb-12">
                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                        <div className="col-span-full">
                                            <label for="photo" className="block text-sm font-medium leading-6 text-gray-900">Avatar picture</label>
                                            <div className="mt-2 flex items-center gap-x-3">
                                                <input type="file" id="photo" name="photo" onChange={handleFileChange} accept="image/*" />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label for="name" className="block text-sm font-medium leading-6 text-gray-900">Full name</label>
                                            <div className="mt-2">
                                                <input onChange={(e) => setName(e.target.value)} placeholder={user && user.name} type="name" name="name" id="name" autocomplete="name" className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-4">
                                            <label for="street-address" className="block text-sm font-medium leading-6 text-gray-900">Address</label>
                                            <div className="mt-2">
                                                <input onChange={(e) => setAddress(e.target.value)} placeholder={user && user.address} type="text" name="street-address" id="street-address" autocomplete="street-address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-4">
                                            <label for="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900">Phone number</label>
                                            <div className="mt-2">
                                                <input onChange={(e) => setPhoneNumber(e.target.value)} placeholder={user && user.phoneNumber} id="phoneNumber" name="phoneNumber" type="phoneNumber" autocomplete="phoneNumber" className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>}

                            {activeTab === "changepassword" && <div className="tab-content mt-4" id="changepassword">
                                <h2 className="text-2xl font-semibold">My Password</h2>
                                <div className="border-b border-gray-900/10 pb-12">
                                    <h2 className="text-base font-semibold leading-7 text-gray-900">Set Password</h2>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">For your account's security, do not share your password with anyone else</p>

                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div className="sm:col-span-4">
                                            <label for="newPassword" className="block text-sm font-medium leading-6 text-gray-900">New password</label>
                                            <div className="mt-2">
                                                <input id="newPassword" name="newPassword" type="password" autocomplete="new-password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-4">
                                            <label for="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">Confirm password</label>
                                            <div className="mt-2">
                                                <input id="confirmPassword" name="confirmPassword" type="password" autocomplete="new-password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-4">
                                            <button type="submit" className="mt-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Confirm</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            }
                            {activeTab === "notisetting" && <div className="tab-content mt-4" id="notisetting">
                                <h2 className="text-2xl font-semibold">Notification Settings</h2>
                                <div className="border-b border-gray-900/10 pb-12">
                                    <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">We'll always let you know about important changes, but you pick what else you want to hear about.</p>
                                    <div className=" space-y-10">
                                        <fieldset>
                                            <div className="mt-6 space-y-6">
                                                <div className="relative flex gap-x-3">
                                                    <div className="flex h-6 items-center">
                                                        <input id="comments" name="comments" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
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
                                                        <input id="comments" name="comments" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
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
                                                        <input id="comments" name="comments" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
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
                                                        <input id="candidates" name="candidates" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
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
                                                        <input id="offers" name="offers" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
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
                                                        <input id="offers" name="offers" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
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
                            }
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}