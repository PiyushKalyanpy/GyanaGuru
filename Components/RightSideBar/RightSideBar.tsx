import React from "react";
import Image from "next/image";
import Calendar from "./Calendar";
import Notes from "./Notes";

type Props = {};

const RightSideBar = (props: Props) => {
  const imageUrl = "https://avatars.githubusercontent.com/u/79275157?s=90&v=4";
  return (
    <div className="fixed top-0 flex flex-col w-fit h-screen p-4 bg-white ">
      <div className="w-full max-w-sm p-4 mb-12">
        <div className="flex flex-row items-center">
          <div className="relative w-12 h-12 overflow-hidden rounded-full">
            <Image src={imageUrl} alt="Profile Image" width={48} height={48} />
          </div>
          <div className="flex flex-col pl-4">
            <h5 className="mb-1 text-xl font-medium text-gray-900 ">
              User Name
            </h5>
            <span className="text-sm text-gray-500 ">Learner</span>
          </div>
        </div>
      </div>
      <Calendar />
      <div className="flex flex-row justify-between mb-4">
        <h1 className="font-bold">Notes</h1>
        <button className="bg-[#F0F4F8] rounded-lg text-[#45B8EC] text-xs p-2 ">
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
