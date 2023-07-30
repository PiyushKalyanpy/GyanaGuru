"use client"

import { UserAuth } from "@/context/authContext";
import { useRouter, redirect } from "next/navigation";

const Admin = () => {
    const { currentUser } = UserAuth()
    const router = useRouter()
    if (currentUser && currentUser.role != "admin") {
        redirect("/dashboard")
    }
    return (
        <div>
            this is admin page
        </div>
    );
}

export default Admin;