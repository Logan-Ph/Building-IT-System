import { Settings, PackageSearch, Home, Store, Shirt } from "lucide-react";
import Sidebar, { SidebarItem } from "./Sidebar";

export default function VendorSidebar() {
    return (<Sidebar>
        <a href="/dashboard">
            <SidebarItem icon={<Home size={20} />} text="Dashboard" />
        </a>

        <SidebarItem icon={<Shirt size={20} />} text="Product"
            subitems={[
                { text: "Add Product", href: "/add-product" },
                { text: "Manage Product", href: "/manage-product" },
                // Add more subitems as needed
            ]} />

        <a href="/manage-order">
            <SidebarItem icon={<PackageSearch size={20} />} text="Orders" />
        </a>

        <SidebarItem icon={<Store size={20} />} text="Shop Management"
            subitems={[
                { text: "Information", href: "/edit-vendor-profile" },
                { text: "Decoration", href: "/edit-store" },
            ]} />
    </Sidebar>)
}