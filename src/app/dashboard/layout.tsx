"use client"
import { UserAuth } from "@/context/authContext"
import Sidebar from "./sidebar/Sidebar"
import { useState } from "react"
import SidebarData from "./sidebar/SidebarItemData"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const { currentUser, isLoading } = UserAuth()

    // if (isLoading) {
    //     return (
    //         <div className="flex items-center w-screen h-screen ">
    //             <div className="flex m-auto  scale-150">
    //                 <span className="material-symbols-outlined animate-spin">refresh</span>
    //             </div>
    //         </div>
    //     )
    // }

    return (
        <section className="flex flex-col min-h-screen bg-white md:flex-row">
            <nav className=" md:w-1/3  lg:w-1/5">
                <div className="flex w-full p-4 border-b md:hidden ">
                    <span onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="material-symbols-outlined">menu</span>
                </div>
                <div className={`${isSidebarOpen ? "flex " : "hidden"} md:flex  `} >
                    <Sidebar showInstructor sidebarItemData={SidebarData} />
                </div>
            </nav>
            {children}
        </section>
    )
}