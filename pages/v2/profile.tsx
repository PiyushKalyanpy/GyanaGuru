import Image from "next/image";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { ImageError } from "next/dist/server/image-optimizer";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  const [userDetails, setUserDetails] = useState({
    name: currentUser?.displayName,
    email: currentUser?.email,
    photoURL: currentUser?.photoURL,
    username: currentUser?.email?.split("@")[0],
    dob: new Date().toISOString().split("T")[0],
    lastLogin: currentUser?.metadata.lastSignInTime,
    uid: currentUser?.uid,
    createdAt: currentUser?.metadata.creationTime,
  });
  console.log(userDetails);
  const inputStyles = "border border-gray-300 p-2 mb-2 w-full rounded-xl";

  return (
    <div className="flex bg-zinc-100 w-screen h-screen p-4">
      <div className="flex flex-col space-y-2 md:w-1/2 lg:w-1/4 bg-white m-auto p-4 rounded-xl">
        <h1
          className="
          text-2xl
          font-bold
          text-center
          mb-4
          text-zinc-900          
         "
        >
          Profile
        </h1>
        <div>
          <form className="flex flex-col space-y-4">
            <div className="flex items-center space-x-10">
              <div className="relative w-fit">
                <div>
                  <Image
                    src={userDetails?.photoURL!}
                    width={100}
                    height={100}
                    alt="profile"
                    className="rounded-full bg-zinc-200"
                  />
                </div>
                <div className="absolute right-2 bottom-1">
                  <button className="flex  bg-black rounded-full w-8 h-8">
                    <span className="flex m-auto material-icons text-white">
                      add
                    </span>
                  </button>
                </div>
              </div>
              <div>
                <div className="flex flex-col space-y-1">
                  <h1 className="text-xl font-bold text-zinc-900">
                    {userDetails.name}
                  </h1>
                  <h2 className="text-lg text-zinc-500">
                    @{userDetails.username}
                  </h2>
                </div>
              </div>
            </div>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={userDetails.name}
              onChange={(e) =>
                setUserDetails({ ...userDetails, name: e.target.value })
              }
              className={`${inputStyles}`}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={userDetails.email}
              onChange={(e) =>
                setUserDetails({ ...userDetails, email: e.target.value })
              }
              className={`text-zinc-500 ${inputStyles}`}
              disabled
            />
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={userDetails.username}
              onChange={(e) =>
                setUserDetails({ ...userDetails, username: e.target.value })
              }
              className={inputStyles}
            />
            <input
              type="date"
              placeholder="Date of Birth"
              name="dob"
              value={userDetails.dob}
              onChange={(e) =>
                setUserDetails({ ...userDetails, dob: e.target.value })
              }
              className={inputStyles}
            />
            <input
              type="submit"
              value="Update"
              className="bg-black text-white p-2 rounded-xl w-full cursor-pointer hover:bg-zinc-900"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
