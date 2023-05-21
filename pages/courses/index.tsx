import {
  Topbar,
  HomeSidebar,
  Banner,
  CourseCardList,
} from "../../Components/components";
import CourseData from "../../data/course_list.json";
import React, { useContext, useEffect, useRef } from "react";


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
    <div>
      <div className="grid w-full h-screen grid-cols-12 overflow-hidden">
        {/* sidebar div */}
        <div className="flex items-center col-span-1 overflow-hidden bg-white ">
          <HomeSidebar pageNumber={2} />
        </div>
        {/* main div */}
        <div className="flex flex-col col-span-11 ">
          {/* topbar here */}
          <Topbar />

          <Categories  />
          {/* div for Main content */}
          <div className="flex w-full h-full overflow-y-scroll">
            {/* main */}
            <div className="flex flex-col w-3/4 h-screen p-4 pb-40 space-y-8 overflow-y-scroll bg-white">
              {/* banner  */}
              <Banner />

              {/* <CourseCardList heading="Popular Courses" data={CourseData} /> */}
              {/* <CourseCardList heading="Web Development" data={CourseData} /> */}
              {/* <CourseCardList heading="Web Development" data={CourseData} /> */}
            </div>
            {/* right sidebar */}
            <div className="flex w-1/4 p-4 rounded-3xl">
              <div className="flex w-full p-4 bg-gray-50 rounded-3xl"></div>
            </div>
          </div>
        </div>
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
