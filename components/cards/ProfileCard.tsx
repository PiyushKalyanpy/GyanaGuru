import React, { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '@/context/AuthContext';
import Image from 'next/image';

const ProfileCard = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  const router = useRouter();

  return (
    currentUser && (
      <div className='flex flex-col bg-zinc-100'>
        <ImageSections
          photoUrl={currentUser.photoURL}
          name={currentUser.name}
          username={currentUser.username}
        />
        <InputForm />
      </div>
    )
  );
};

const ImageSections = ({ photoUrl, username, name }: any) => {
  return (
    <div className='flex flex-wrap'>
      <div className=''>
        <Image
          src={`${photoUrl}`}
          alt='unsplash image'
          width={500}
          height={500}
          className='rounded-full w-40'
        />
      </div>
      {/* username */}
      <div className=''>
        <h1 className='text-2xl font-bold'>{name}</h1>
        <h1 className='text-2xl font-bold'>{username}</h1>
      </div>
    </div>
  );
};

const InputForm = () => {
  const inputStyle = 'border-2 border-gray-300 rounded-lg p-2  w-1/2';
  const inputCardItems = 'flex flex-col space-y-2 w-1/3 shadow-md p-4 rounded-3xl  bg-white';
  return (
    <div>
      <form className='flex flex-col space-y-2'>
        <div className={`${inputCardItems}`}>
          <label className=''>Name</label>
          <input className={`${inputStyle}`} type='text' placeholder='Name' />
          <label className=''>Username</label>
          <input
            className={`${inputStyle}`}
            type='text'
            placeholder='Username'
          />
          <label className=''>Bio</label>
          <input className={`${inputStyle}`} type='text' placeholder='Bio' />
          <label className=''>Website</label>
          <input
            className={`${inputStyle}`}
            type='text'
            placeholder='Website'
          />
        </div>
        <div className={`${inputCardItems}`}>
          <label className=''>Location</label>
          <input
            className={`${inputStyle}`}
            type='text'
            placeholder='Location'
          />
          <label className=''>Birthdate</label>
          <input
            className={`${inputStyle}`}
            type='text'
            placeholder='Birthdate'
          />
          <label className=''>Email</label>
          <input className={`${inputStyle}`} type='text' placeholder='Email' />
          <label className=''>Phone</label>
          <input className={`${inputStyle}`} type='text' placeholder='Phone' />
        </div>
        <div className={`${inputCardItems}`}>
          <label className=''>Gender</label>
          <input className={`${inputStyle}`} type='text' placeholder='Gender' />
          <label className=''>Pronouns</label>
          <input
            className={`${inputStyle}`}
            type='text'
            placeholder='Pronouns'
          />
          <label className=''>Password</label>
          <input
            className={`${inputStyle}`}
            type='text'
            placeholder='Password'
          />
          <label className=''>Confirm Password</label>
          <input
            className={`${inputStyle}`}
            type='text'
            placeholder='Confirm Password'
          />
        </div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Save
        </button>
      </form>
    </div>
  );
};

export default ProfileCard;
