"use client"
import { UserAuth } from "@/context/authContext";
import { useState } from "react";
import dynamic from "next/dynamic"
const BecomeAnInstructor = dynamic(() => import("./components/BecomeAnInstructor"), { ssr: false })
const ProfileCard = dynamic(() => import("./components/ProfileCard"), { ssr: false })
const ProfileForm = dynamic(() => import("./components/ProfileForm"), { ssr: false })


const Profile = () => {
    const { currentUser } = UserAuth()
    const [editProfile, setEditProfile] = useState(false)

    const toggleEdit = () => {
        console.log("toggle edit")
        setEditProfile(!editProfile)
    }

    return (
        <div className="relative w-full bg-zinc-100">
            
            {currentUser && (
                <div className="flex flex-col items-center justify-center w-full p-4 space-y-4  ">
                    <ProfileCard {...currentUser} toggleEdit={toggleEdit} />
                    {
                        editProfile && <ProfileForm {...currentUser} />
                    }
                    <BecomeAnInstructor />
                </div>
            )}
        </div>
    );
}


export default Profile;