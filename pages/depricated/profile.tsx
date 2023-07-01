import React, { useContext, useState } from 'react';
import Image from 'next/image';
import { useAuth } from '../../context/AuthContext';
import { showToast } from '@/components/util/Toast';
import { ToastContainer } from 'react-toastify';
import { PrimaryLayout } from '@/components/layouts/exporter';

const ProfileHeader = ({ userDetails }: any) => {
  console.log(userDetails.photoURL);
  return (
    <div className="flex items-center space-x-10">
      <div className="relative">
        <div className="relative w-24 h-24 overflow-hidden rounded-full">
          <Image
            src={userDetails.photoURL}
            alt="Profile Image"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute right-2 bottom-1">
          <button
            onClick={e => {
              e.preventDefault();
            }}
            className="flex w-8 h-8 bg-black rounded-full"
          >
            <span className="flex m-auto text-white material-icons">add</span>
          </button>
        </div>
      </div>
      <div>
        <div className="flex flex-col space-y-1 text-zinc-500">
          <h1 className="text-xl font-bold text-zinc-900">
            {userDetails.name}
          </h1>
          <h2 className="text-lg text-zinc-500">
            {userDetails.username ? `@${userDetails.username}` : null}
          </h2>
        </div>
      </div>
    </div>
  );
};

const ProfileForm = ({ userDetails, setUserDetails, handleSave }: any) => {
  const inputStyles =
    'border-b-2 border-gray-300 py-2 pr-2 dark:bg-white outline-none focus:border-green-600 mb-2 w-full text-black font-archivo ';

  return (
    <form className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-1 text-zinc-500">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={userDetails.name}
          onChange={e =>
            setUserDetails({ ...userDetails, name: e.target.value })
          }
          className={`${inputStyles}`}
        />
      </div>
      <div className="flex flex-col space-y-1 text-zinc-500">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={userDetails.email}
          onChange={e =>
            setUserDetails({ ...userDetails, email: e.target.value })
          }
          className={`text-zinc-500 ${inputStyles}`}
          disabled
        />
      </div>
      <div className="flex flex-col space-y-1 text-zinc-500">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={userDetails.username}
          onChange={e =>
            setUserDetails({ ...userDetails, username: e.target.value })
          }
          className={inputStyles}
        />
      </div>
      <div className="flex flex-col space-y-1 text-zinc-500">
        <label htmlFor="dob">Date of Birth</label>
        <input
          type="date"
          placeholder="Date of Birth"
          name="dob"
          value={userDetails.dob}
          onChange={e =>
            setUserDetails({ ...userDetails, dob: e.target.value })
          }
          className={inputStyles}
        />
      </div>
      <input
        type="submit"
        onClick={handleSave}
        value=" Sign Up"
        className="w-full p-2 text-white bg-black cursor-pointer rounded-xl hover:bg-zinc-900"
      />
    </form>
  );
};

const Profile = () => {
  const { currentUser, addUserToDatabase } = useAuth();

  const [userDetails, setUserDetails] = useState({
    name: currentUser?.name,
    email: currentUser?.email,
    photoURL: currentUser?.photoURL,
    username: currentUser?.username,
    dob: currentUser?.dob,
    lastLogin: currentUser?.metadata?.lastSignInTime || null,
    uid: currentUser?.uid,
    createdAt: currentUser?.metadata?.creationTime || null,
  });

  const checkIfDetailsFilled = () => {
    if (
      userDetails.name &&
      userDetails.email &&
      userDetails.username &&
      userDetails.dob
    ) {
      return true;
    }
    return false;
  };

  const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!checkIfDetailsFilled()) {
      showToast('Please fill all the details', 'error');
      return;
    }
    addUserToDatabase(userDetails);
  };

  return (
    <PrimaryLayout>
      <div className="flex w-screen h-screen p-4 bg-zinc-100">
        <ToastContainer />
        <div className="flex flex-col w-full p-4 m-auto space-y-2 bg-white md:w-1/2 lg:w-1/2 rounded-xl">
          <h1 className="mb-4 text-xl text-center text-zinc-900">
            Update profile
          </h1>
          <ProfileHeader userDetails={userDetails} />
          <div>
            <ProfileForm
              userDetails={userDetails}
              setUserDetails={setUserDetails}
              handleSave={handleSave}
            />
          </div>
        </div>
      </div>
    </PrimaryLayout>
  );
};

export default Profile;
