import CourseCard from "./CourseCard";
import { useState } from "react";

const CourseCardList = ({ heading, data }: any) => {
  return (
    <div className="flex flex-col ">
      <h1 className="font-archivo text-xl ">{heading}</h1>
      <div className="relative">
      <div
        id="scrollable-container"
        className=" scrollable-container flex snap-x flex-nowrap transition   overflow-x-scroll "
      >
        {data.courseList.map((item: any, index: any) => {
          return <CourseCard key={index} item={item} />;
        })}
      </div>
        <div className="absolute right-0  top-0 bg-gradient-to-r from-10% from-transparent to-white to-90% w-40 h-full"></div>
        <div className="absolute left-0  top-0 bg-gradient-to-r from-white  w-6 h-full"></div>

      </div>
    </div>
  );
};

export default CourseCardList;
