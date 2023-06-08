import {
  Topbar,
  HomeSidebar,
  Banner,
  CourseCardList,
} from "../../Components/components";
import CourseData from "../../data/course_list.json";
import React, { useEffect, useRef } from "react";

const Courses = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    container.addEventListener("mousedown", (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });

    container.addEventListener("mouseleave", () => {
      isDown = false;
    });

    container.addEventListener("mouseup", () => {
      isDown = false;
    });

    container.addEventListener("mousemove", (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 3;
      container.scrollLeft = scrollLeft - walk;
    });
  }, []);

  return (
    <div className="grid w-screen h-screen grid-cols-12 overflow-hidden">
      {/* sidebar div */}
      <div className="col-span-2">
        <HomeSidebar pageNumber={2} />
      </div>
      {/* main content div */}
      <div className="flex flex-col col-span-10 h-full gap-8 bg-zinc-100 p-6 ">
      <Topbar/>
      </div>
    </div>
  );
};

const Categories = ({ data }: any) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-row w-3/4 overflow-y-scroll bg-white/20 p-4it h-f ">
      <div
        ref={containerRef}
        className="flex gap-4 my-6 overflow-y-visible scrollable-container snap-x flex-nowrap"
        style={{ scrollBehavior: "smooth" }}
      >
        {data &&
          data.map((item: any, index: any) => {
            return (
              <div
                key={index}
                className="flex items-center flex-auto gap-4 p-4 transition bg-gray-100 select-none snap-start rounded-xl shrink-0 w-fit hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-200 font-archivo hover:text-white active:bg-violet-600 active:shadow-lg active:shadow-violet-200 active:text-white"
              >
                <p>{item.name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Courses;
