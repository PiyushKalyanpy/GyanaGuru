"use client"

import { UserAuth } from "@/context/authContext";
import { useRouter, redirect } from "next/navigation";

const Admin = () => {
    const { currentUser } = UserAuth()
    const router = useRouter()
    if (currentUser && !currentUser.isInstructor) {
        redirect("/dashboard")
    }
    return (
        <div className="bg-zinc-100 w-full h-full ">
            <CourseAddition />
        </div>
    );
}

const CourseAddition = () => {
    return (
        <div className="bg-white rounded-2xl w-full h-full">

        </div>
    )
}

export default Admin;