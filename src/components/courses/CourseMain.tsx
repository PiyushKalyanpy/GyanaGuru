import TagItem from "../landing/sub_components/TagItem";
import CourseCard from "./CourseCard";
import { useState, useEffect } from "react";
import axios from "axios";

const CoursesMain = () => {
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
    <main className="flex flex-col w-3/4 gap-4">
      <div className="flex items-center justify-between w-full pr-40 h-fit">
        <h3 className="text-xl font-medium">
          23 results for "UI UX designing"
        </h3>
        <div>
          <span>Sort by</span>
        </div>
      </div>

      <section className="grid grid-cols-3 gap-4 p- 4">
        {courses &&
          courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
      </section>
    </main>
  );
};

export default CoursesMain;
