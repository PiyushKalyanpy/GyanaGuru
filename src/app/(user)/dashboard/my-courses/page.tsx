"use client";
import CourseCard from "@/components/courses/CourseCard";
import CourseViewNavItem from "@/components/courses/CourseViewNavItem";
import { myCoursesNavItems } from "@/database/data/data";
import { useEffect, useState } from "react";
import axios from "axios";

const MyCourses = () => {
  const [active, setActive] = useState("all");
  const updateActive = (item: string) => {
    setActive(item);
  };
  const [courses, setCourses] = useState([]);

  const getAllCourses = async () => {
    const res = await axios.get("/api/course");
    console.log(res);
    return res.data;
  };

  useEffect(() => {
    const getCourses = async () => {
      if (courses.length === 0) {
        console.log("fetching courses ⬇️");
        try {
          const res = await getAllCourses();
          setCourses(res.data);
        } catch (error) {
          console.error("Error fetching courses:", error);
        }
      }
    };

    getCourses();
    
  }, [courses]);

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
      <section className="grid grid-cols-3 gap-4 p- 4">
        {courses &&
          courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
      </section>
    </main>
  );
};

export default MyCourses;
