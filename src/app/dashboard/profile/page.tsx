"use client"
import { UserAuth } from "@/context/authContext";
import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import ProfileForm from "./components/ProfileForm";
import BecomeAnInstructor from "./components/BecomeAnInstructor";

const Profile = () => {
    const { currentUser } = UserAuth()
    const [editProfile, setEditProfile] = useState(false)

    const toggleEdit = () => {
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