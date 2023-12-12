import { Settings, PackageSearch } from "lucide-react";
import Sidebar, { SidebarItem } from "./Sidebar";

export default function UserProfileSidebar() {
    return (<Sidebar>
        <a href="/profile">
            <SidebarItem icon={<Settings size={20} />} text="Account" />
        </a>

        {/* <SidebarItem icon={<Settings size={20} />} text="Order"
            subitems={[
                { text: "Add Product", href: "/add-product" },
                { text: "Manage Product", href: "/manage-product" },
                // Add more subitems as needed
            ]} /> */}

        <a href="/manage-order">
            <SidebarItem icon={<PackageSearch size={20} />} text="My Orders" />
        </a>

        {/* <SidebarItem icon={<Settings size={20} />} text="Dashboard"
            subitems={[
                { text: "Subitem 1", href: "https://www.google.com/" },
                { text: "Subitem 2" },
                // Add more subitems as needed
            ]} /> */}
    </Sidebar>)
}