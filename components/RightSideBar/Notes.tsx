import React from "react";
import Image from "next/image";
type Notes = {
  heading: any;
  courseLink: any;
  day: any;
  time: any;
  date: any;
};

const Notes = (props: Notes) => {
  return (
    <div>
      <div className="flex flex-col dark:bg-zinc-800">
        <div className="shadow w-full border-l-4 border-zinc-300 p-2 mb-4">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between mb-2">
              <h1 
                className="text-sm font-bold"
                // A11Y
                role="heading" 
                aria-label={`Note titled ${props.heading}`} 
              >
                {props.heading}
              </h1>
              <input type="checkbox" className="rounded-full" />
            </div>
            <div className="border-b-[1px] border-zinc-300 p-2 mb-2">
              <div className="dark:bg-zinc-800 bg-[#F2F2F2] rounded-md flex gap-2">
                <Image src="./logo.svg" alt="logo" width={15} height={15} role="img" aria-label="logo"/>
                <h4 
                  className="text-sm underline cursor-pointer"
                  // A11Y
                  role="link" 
                  aria-label="Course Link" 
                >
                  {props.courseLink}
                </h4>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-6" role="article">
            <h3 
              className="text-xs text-zinc-500"
              // A11Y
              role="heading" 
              aria-label={`Course created on ${props.date}`}
            >
              {props.day}, {props.date}
            </h3>
            <ul 
              className="list-disc text-zinc-500"
              // A11Y
              role="definition" 
              aria-label={`Time taken is ${props.time}`}
            >
              <li className="text-xs">{props.time}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
