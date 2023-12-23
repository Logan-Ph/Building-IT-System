import { Home, UserCog } from "lucide-react";
import Sidebar, { SidebarItem } from "./Sidebar";
import { FaOpencart } from "react-icons/fa6";

export default function AdminSideBar() {
    return (
        <Sidebar>
            <a href="/admin/dashboard">
                <SidebarItem icon={<Home size={20} />} text="Dashboard" />
            </a>

            <a href="/admin/manage-user">
                <SidebarItem icon={<UserCog size={20} />} text="Manage User" />
            </a>

            <a href="/admin/manage-product">
                <SidebarItem icon={<FaOpencart size={20} />} text="Manage Product" />
            </a>
        </Sidebar>)
}