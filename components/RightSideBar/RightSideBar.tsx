import React from "react";
import Image from "next/image";
import Calendar from "./Calendar";
import Notes from "./Notes";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

type Props = {};

const RightSideBar = (props: Props) => {
  // getting current user
  const auth = getAuth();
  const [user] = useAuthState(auth);

  const imageUrl = (user && user.photoURL) || "/images/empty_profile.png";
  return (
    <div className="dark:bg-zinc-800 flex w-full top-0 flex-col h-screen p-4 bg-white ">
      <div className="w-full max-w-sm p-4 mb-12">
        <div className="flex flex-row items-center">
          <div className="relative w-12 h-12 overflow-hidden rounded-full">
            <Image
              src={imageUrl}
              alt="Profile Image"
              width={48}
              height={48}
              // A11Y
              role="img"
              aria-label="Profile Image"
            />
          </div>
          <div className="flex flex-col pl-4" aria-label="User name">
            <h5 className="mb-1 text-xl font-medium light:text-zinc-900 ">
              {user && user.displayName}{" "}
            </h5>
            <span role="presentation" className="text-sm light:text-zinc-500 ">
              Learner
            </span>
          </div>
        </div>
      </div>
      <Calendar />
      <div className="flex flex-row justify-between mb-4">
        <h1
          className="font-bold"
          // A11Y
          role="heading"
        >
          Notes
        </h1>
        <button
          className="dark:bg-white dark:text-black bg-black text-white rounded-lg  text-xs p-2 "
          // A11Y
          role="button"
          aria-label="Button to Add note"
        >
          Add Note
        </button>
      </div>
      <Notes
        heading="Completed Hacking video course"
        courseLink="Ethical Hacking full course with..."
        day="Today"
        date="May 22 2023"
        time="04:41"
      />
      <Notes
        heading="Completed Hacking video course"
        courseLink="Ethical Hacking full course with..."
        day="Today"
        date="May 22 2023"
        time="04:41"
      />
      <Notes
        heading="Completed Hacking video course"
        courseLink="Ethical Hacking full course with..."
        day="Today"
        date="May 22 2023"
        time="04:41"
      />
    </div>
  );
};

export default RightSideBar;
