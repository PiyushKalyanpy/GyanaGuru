import Link from "next/link";
import DashboardSidebarItem from "./DashboardSidebarItem";
import React, { useState } from "react";
import { DarkModeToggle } from "@/components/components";
import { motion, AnimatePresence } from "framer-motion";

export interface IDashboardSidebar {}

enum SidebarItem {
  Dashboard = "dashboard",
  Settings = "settings",
  Courses = "courses",
  Profile = "profile",
}

const DashboardSidebar: React.FC<IDashboardSidebar> = () => {
  const [selectedItem, setSelectedItem] = useState<SidebarItem | null>(null);
  const [sidebarExpanded, setSidebarExpanded] = useState<boolean>(false);

  const handleClick = (selectedItem: any) => {
    setSelectedItem(selectedItem);
    setSidebarExpanded(false);
  };

  return (
    <div>
      {/* navbar for desktop */}
      <div className="hidden md:hidden w-64 h-fit lg:block">
        <Navbar
          selectedItem={selectedItem}
          handleClick={(e: any) => handleClick(e)}
        />
        <DarkModeToggle />
      </div>

      {/* navbar for mobile  */}
      <div className="flex flex-col lg:hidden bg-zinc-100 w-screen justify-between p-4">
        <div className="">
          <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
            <span className="material-icons-outlined">
              {sidebarExpanded ? "close" : "menu"}
            </span>
          </button>
        </div>
        {/* sidebar */}
        {sidebarExpanded && (
          <aside>
            <Navbar
              selectedItem={selectedItem}
              handleClick={(e: any) => handleClick(e)}
            />
          </aside>
        )}
      </div>
    </div>
  );
};

const Navbar = ({ selectedItem, handleClick }: any) => {
  const sidebarItems = [
    {
      href: "/v2/dashboard",
      icon: "dashboard",
      label: "Dashboard",
      selected: selectedItem === SidebarItem.Dashboard,
      onItemClick: () => handleClick(SidebarItem.Dashboard),
    },
    {
      href: "/v2/settings",
      icon: "settings",
      badge: "2",
      label: "Settings",
      selected: selectedItem === SidebarItem.Settings,
      onItemClick: () => handleClick(SidebarItem.Settings),
    },
    {
      href: "/v2/courses",
      icon: "book",
      badge: "2",
      label: "Courses",
      selected: selectedItem === SidebarItem.Courses,
      onItemClick: () => handleClick(SidebarItem.Courses),
    },
    {
      href: "/profile",
      icon: "person",
      label: "Profile",
      selected: selectedItem === SidebarItem.Profile,
      onItemClick: () => handleClick(SidebarItem.Profile),
    },
    {
      href: "/login",
      icon: "logout",
      label: "Logout",
    },
  ];

  return (
    <nav className="flex flex-col gap-4 h-fit w-64 bg-white">
      {sidebarItems.map((item, index) => (
        <DashboardSidebarItem
          key={index}
          href={item.href}
          icon={item.icon}
          badge={item.badge}
          label={item.label}
          selected={item.selected}
          onItemClick={item.onItemClick}
        />
      ))}
    </nav>
  );
};

export default DashboardSidebar;
