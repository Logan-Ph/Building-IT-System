import { Home, UserCog } from "lucide-react";
import Sidebar, { SidebarItem } from "./Sidebar";
import { FaOpencart } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function AdminSideBar() {
    return (
        <Sidebar>
            <Link to="/admin/dashboard">
                <SidebarItem icon={<Home size={20} />} text="Dashboard" />
            </Link>

            <Link to="/admin/manage-user">
                <SidebarItem icon={<UserCog size={20} />} text="Manage User" />
            </Link>

            <Link to="/admin/manage-product">
                <SidebarItem icon={<FaOpencart size={20} />} text="Manage Product" />
            </Link>
        </Sidebar>)
}