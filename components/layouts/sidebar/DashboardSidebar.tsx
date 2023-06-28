import Link from 'next/link'
import DashboardSidebarItem from './DashboardSidebarItem'
import React, { useState, useContext } from 'react'
import { DarkModeToggle } from '@/components/components'
import { UserContext } from '@/context/authContext'

export interface IDashboardSidebar {}

enum SidebarItem {
  Dashboard = 'dashboard',
  Settings = 'settings',
  Courses = 'courses',
  Profile = 'profile',
  Logout = 'logout'
}

const DashboardSidebar: React.FC<IDashboardSidebar> = () => {
  const [selectedItem, setSelectedItem] = useState<SidebarItem | null>(null)
  const [sidebarExpanded, setSidebarExpanded] = useState<boolean>(false)
  const {logout} = useContext(UserContext);

  const handleClick = (selectedItem: any) => {
    if (selectedItem === SidebarItem.Logout) {
      console.log('logout')
      logout()
    }
    console.log(selectedItem)
    setSelectedItem(selectedItem)
    setSidebarExpanded(false)
  }

  return (
    <div>
      {/* navbar for desktop */}
      <div className='hidden md:hidden w-64 h-fit lg:block'>
        <Navbar
          selectedItem={selectedItem}
          handleClick={(e: any) => handleClick(e)}
        />
        <DarkModeToggle />
      </div>

      {/* navbar for mobile  */}
      <div className='flex flex-col lg:hidden bg-zinc-100 w-screen justify-between p-4'>
        <div className=''>
          <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
            <span className='material-icons-outlined'>
              {sidebarExpanded ? 'close' : 'menu'}
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
  )
}

const Navbar = ({ selectedItem, handleClick }: any) => {
  const sidebarItems = [
    {
      href: '/dashboard',
      icon: 'dashboard',
      label: 'Dashboard',
      disabled: true,
      selected: selectedItem === SidebarItem.Dashboard
      // onItemClick: () => handleClick(SidebarItem.Dashboard),
    },
    {
      href: '/v2/settings',
      icon: 'settings',
      disabled: true,
      label: 'Settings',
      selected: selectedItem === SidebarItem.Settings
      // onItemClick: () => handleClick(SidebarItem.Settings),
    },
    {
      href: '/v2/courses',
      icon: 'book',
      badge: '2',
      label: 'Courses',
      selected: selectedItem === SidebarItem.Courses,
      onItemClick: () => handleClick(SidebarItem.Courses)
    },
    {
      href: '/profile',
      icon: 'person',
      label: 'Profile',
      selected: selectedItem === SidebarItem.Profile,
      disabled: true
      // onItemClick: () => handleClick(SidebarItem.Profile),
    },
    {
      href: '/login',
      icon: 'logout',
      label: 'Logout',
      selected: selectedItem === SidebarItem.Logout
    }
  ]

  return (
    <nav className='flex flex-col gap-4 h-fit w-64 bg-white'>
      {sidebarItems.map((item, index) => (
        <DashboardSidebarItem
          key={index}
          href={item.href}
          icon={item.icon}
          badge={item.badge}
          label={item.label}
          selected={item.selected}
          disabled={item.disabled}
          onItemClick={item.onItemClick}
        />
      ))}
    </nav>
  )
}

export default DashboardSidebar
