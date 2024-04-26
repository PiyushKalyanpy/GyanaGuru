"use client";
import CourseCard from "@/components/courses/CourseCard";
import CourseViewNavItem from "@/components/courses/CourseViewNavItem";
import { myCoursesNavItems } from "@/data/data";
import { useState } from "react";

const MyCourses = () => {
  const items = [];
  const [active, setActive] = useState("all");
  const updateActive = (item: string) => {
    setActive(item);
  };

  return (
    <main className="flex flex-col gap-8 p-4">
      {/* filter bar */}
      <section>
        <div className="flex flex-row border-b">
          <ul className="flex gap-4 ">
            {myCoursesNavItems.map((courseNavItem) => {
              return (
                <CourseViewNavItem
                  key={courseNavItem.id}
                  {...courseNavItem}
                  activeItem={active}
                  onClick={updateActive}
                />
              );
            })}
          </ul>
        </div>
      </section>
      {/* contents  */}
      <section className="flex gap-4 p- 4">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </section>
    </main>
  );
};

export default MyCourses;
