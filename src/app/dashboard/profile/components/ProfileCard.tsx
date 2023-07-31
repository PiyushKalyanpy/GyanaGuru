'use client'
import Image from "next/image"

const ProfileCard = (currentUser: any, toggleEdit:any, ) => {
    const { photoURL, name, role, bio } = currentUser
    console.log(currentUser)
    return (
        <div className="relative w-full p-4  rounded-2xl bg-white ">
            <button onClick={toggleEdit} className="absolute z-10 px-4 py-2 top-4 right-4 text-white bg-violet-600 rounded-full">Edit</button>
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


export default ProfileCard;