import { useContext, useState } from "react"
import { UserContext } from '../Context/UserContext'

export default function UserSidebar() {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const [activeTab, setActiveTab] = useState("profile")
    const { user } = useContext(UserContext)
    const dropdownItems = ['All', 'Waiting For Payment', 'Processing', 'Being Delivered', 'Completed', 'Cancelled']

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

    if (user === undefined) {
        return <div>Loading....</div>
    }

    return (
        <>
        {/* <!-- SIDEBAR --> */}
        <div className={`absolute left-0 top-20 md:top-24 transition-all overflow-hidden w-64 bg-white border-r border-gray-200 bottom-0 ${isSidebarCollapsed ? 'sidebar-collapse' : ''} z-40`} id="sidebar">

            <div class="relative p-4 pb-2 flex justify-between items-center">
                <img src="" class="overflow-hidden transition-all w-32" alt=""></img>
                <button class="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-first cursor-pointer toggle-sidebar " onClick={handleSidebarToggle}><path d="m17 18-6-6 6-6"></path>
                    <path d="M7 6v12"></path></svg>
                </button>
            </div>

            <a href="#" className="p-4 flex items-center gap-4 hover:bg-blue-50">
                <span href="#" className="flex items-center gap-4 hover:bg-blue-50" onClick={handleSidebarToggle}>
                <img src={(user.img) ? `data:image/jpeg;base64,${user.img}` : require("../Components/images/defaultUserImage.png")} className="w-16 aspect-square object-cover rounded" alt="" />
                <div className="whitespace-nowrap sidebar-user-profile">
                    <span className="py-1 px-2 rounded-full bg-yellow-500 text-white text-sm font-medium">Golden Membership</span>
                </div>
                </span>
            </a>
            
            <div className="py-4">
                <span className="text-sm text-gray-500 uppercase ml-4 inline-block mb-2 sidebar-menu-title">Menu</span>
                <ul className="sidebar-menu">
                    <li>
                        <a href="/profile" className="active">
                            <i className='bx bx-user-circle sidebar-menu-icon' ></i>
                            Account
                        </a>
                    </li>
                    <li>
                        <a href="/user-order" onClick={() => handleDropdownToggle(0)}>
                            <i className='bx bx-receipt sidebar-menu-icon'></i>
                            Order
                        </a>
                        {/* <ul className={`sidebar-dropdown ${activeDropdown === 0 ? '' : 'hidden'} ml-4 border-l border-blue-600`}>
                            {dropdownItems.map((item, index) => (
                                <li key={index} className={index === 0 ? 'active' : ''}>
                                    <a href="#">{item}</a>
                                </li>
                            ))}
                        </ul> */}
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


        <div className="pl-0 md:pl-64 transition-all" id="main">

            <div class="p-4 flex justify-between items-center visible md:hidden">
                <button class="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-last cursor-pointer toggle-sidebar " onClick={handleSidebarToggle}>
                    <path d="m7 18 6-6-6-6"></path> 
                    <path d="M17 6v12"></path>                           
                    </svg>
                </button>
            </div>
        </div>


        </>
    )      
}