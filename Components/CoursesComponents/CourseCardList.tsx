import CourseCard from "./CourseCard";
import { useState } from "react";

const CourseCardList = ({ heading, data }: any) => {
  return (
    <div className="flex flex-col ">
      <h1 className="font-archivo text-xl ">{heading}</h1>
      <div
        id="scrollable-container"
        className="scrollable-container flex snap-x flex-nowrap transition   overflow-x-scroll "
      >
        {data.courseList.map((item: any, index: any) => {
          return <CourseCard key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default CourseCardList;
