import CourseCard from "./CourseCard";
import { useState } from "react";

const CourseCardList = ({ heading, data }: any) => {
  return (
    <div className="flex flex-col ">
      <h1 className="text-xl font-archivo ">{heading}</h1>
      <div className="relative">
      <div
        id="scrollable-container"
        className="flex overflow-x-scroll transition  scrollable-container snap-x flex-nowrap"
      >
        {data.courseList.map((item: any, index: any) => {
          return <CourseCard key={index} item={item} />;
        })}
      </div>
        <div className="absolute right-0  top-0 bg-gradient-to-r from-10% from-transparent to-white to-90% w-40 h-full"></div>
        <div className="absolute top-0 left-0 w-6 h-full bg-gradient-to-r from-white"></div>

      </div>
    </div>
  );
};

export default CourseCardList;
