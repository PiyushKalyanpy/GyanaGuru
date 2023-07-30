"use client"
import { UserAuth } from "@/context/authContext";
import Image from "next/image";
import { useState } from "react";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "@/data/online/firebase";

const Profile = () => {
    const { currentUser } = UserAuth()
    const [editProfile, setEditProfile] = useState(false)

    return (
        <div className="w-full">
            <button onClick={() => setEditProfile(!editProfile)} className="fixed z-10 px-4 py-2 top-4 right-4 text-white bg-violet-600 rounded-md">Edit</button>
            {currentUser && (
                <div className="flex flex-col items-center justify-center w-full p-4 space-y-4  ">
                    <ProfileCard {...currentUser} />
                    {
                        editProfile && <ProfileForm {...currentUser} />
                    }
                </div>
            )}
        </div>
    );
}


const ProfileCard = ( currentUser : any) => {
    const { photoURL, name, role, bio } = currentUser
    console.log(currentUser)
    return (
        <div className="relative w-full p-4 border rounded-2xl ">

            <div className="flex ">
                <div>
                    <Image
                        src={photoURL}
                        alt="profile"
                        width={100}
                        height={100}
                        className="rounded-full"
                    />
                </div>
                <div className="flex flex-col p-4 space-y-2">
                    <div className="flex flex-wrap gap-2">
                        <h3 className="text-2xl font-bold">{name}</h3>
                        <span className="px-2 py-1 rounded-full text-violet-600 bg-violet-100">{role}</span>
                    </div>
                    <h3>{bio ? bio : "create bio "}</h3>
                </div>
            </div>
        </div>
    )
}



const ProfileForm = (currentUser: any) => {

    const [userProfile, setUserProfile] = useState({
        name: "",
        bio: "",
    })
    const { updateCurrentUser } = UserAuth()

    const updateUserProfile = async (e: any) => {
        e.preventDefault()
        if (currentUser.uid && userProfile.name && userProfile.bio) {
            await updateDoc(doc(db, "users", currentUser.uid), {
                name: userProfile.name,
                bio: userProfile.bio
            }).then(() => {
                alert("profile updated")
                updateCurrentUser()
            })
        }

    }


    return (
        <div className=" w-full p-4 border rounded-2xl  space-y-4">
            <h1 className="font-semibold">Edit profile</h1>
            <form className="flex flex-col gap-4">
                <div className="flex flex-col space-y-2">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name"
                        value={userProfile.name}
                        onChange={(e) => setUserProfile({ ...userProfile, name: e.target.value })}
                        className="p-2 border rounded-md" />
                </div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="bio">Bio</label>
                    <input name="bio" id="bio" maxLength={30}
                        value={userProfile.bio}
                        onChange={(e) => setUserProfile({ ...userProfile, bio: e.target.value })}
                        className="p-2 border rounded-md" />
                </div>
                <div className="flex flex-col space-y-2">
                    <button onClick={updateUserProfile} className="p-2 text-white bg-violet-600 rounded-md">Save</button>
                </div>
            </form>
        </div>
    )
}

export default Profile;