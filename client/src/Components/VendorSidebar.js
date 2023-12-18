import { Settings, PackageSearch } from "lucide-react";
import Sidebar, { SidebarItem } from "./Sidebar";
import { Store } from 'lucide-react';

const App = () => {
  return (
    <Store />
  );
};

export default function VendorSidebar() {
    return (<Sidebar>
        <a href="/dashboard">
            <SidebarItem icon={<Settings size={20} />} text="Dashboard" />
        </a>

        <SidebarItem icon={<Settings size={20} />} text="Product"
            subitems={[
                { text: "Add Product", href: "/add-product" },
                { text: "Manage Product", href: "/manage-product" },
                // Add more subitems as needed
            ]} />

        <a href="/manage-order">
            <SidebarItem icon={<PackageSearch size={20} />} text="My Orders" />
        </a>

        <SidebarItem icon={<Store size={20} />} text="Shop Management"
            subitems={[
                { text: "Information", href: "/edit-vendor-profile" },
                { text: "Decoration", href: "/edit-vendor-store" },
            ]} />

        {/* <SidebarItem icon={<Settings size={20} />} text="Dashboard"
            subitems={[
                { text: "Subitem 1", href: "https://www.google.com/" },
                { text: "Subitem 2" },
                // Add more subitems as needed
            ]} /> */}
    </Sidebar>)
}