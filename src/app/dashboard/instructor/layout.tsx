"use client"
import { UserAuth } from "@/context/authContext"
import { useState } from "react"
import Sidebar from "../sidebar/Sidebar"
import sidebarItemData from "./components/SidebarItemData"

export default function InstructorSidebar({
    children,
}: {
    children: React.ReactNode
}) {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const { currentUser, isLoading } = UserAuth()

  

    return (
        <section className="flex flex-col h-screen bg-zinc-100 w-full md:flex-row p-4 gap-4 ">
            <nav className=" md:w-1/4 bg-white rounded-2xl">
                <div className="flex w-full p-4 border-b md:hidden ">
                    <span onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="material-symbols-outlined">menu</span>
                </div>
                <div className={`${isSidebarOpen ? "flex" : "hidden"} md:flex `} >
                    <Sidebar sidebarItemData={sidebarItemData}/>
                </div>

            </nav>
            {children}
        </section>
    )
}