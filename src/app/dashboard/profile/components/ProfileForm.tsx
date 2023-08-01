'use client';
import { UserAuth } from '@/context/authContext';
import { useState } from 'react';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '@/data/online/firebase';

const ProfileForm = (currentUser: any) => {
  const [userProfile, setUserProfile] = useState({
    name: '',
    bio: '',
  });
  const { updateCurrentUser } = UserAuth();

  const updateUserProfile = async (e: any) => {
    e.preventDefault();
    if (currentUser.uid && userProfile.name && userProfile.bio) {
      await updateDoc(doc(db, 'users', currentUser.uid), {
        name: userProfile.name,
        bio: userProfile.bio,
      }).then(() => {
        alert('profile updated');
        updateCurrentUser();
      });
    }
  };
  return (
    <div className="w-full p-4 space-y-4 bg-white  rounded-2xl">
      <h1 className="font-semibold">Edit profile</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={userProfile.name}
            onChange={e =>
              setUserProfile({ ...userProfile, name: e.target.value })
            }
            className="p-2 border rounded-md"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="bio">Bio</label>
          <input
            name="bio"
            id="bio"
            maxLength={30}
            value={userProfile.bio}
            onChange={e =>
              setUserProfile({ ...userProfile, bio: e.target.value })
            }
            className="p-2 border rounded-md"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <button
            onClick={updateUserProfile}
            className="p-2 text-white rounded-md bg-black"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
