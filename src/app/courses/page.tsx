"use client";
import CoursesMain from "@/components/courses/CourseMain";
import FilterSidebar from "@/components/courses/FilterSidebar";
import HomeNav from "@/components/navbar/HomeNav";
import { useSearchParams } from "next/navigation";

const Courses = () => {
  return (
    <main className="flex flex-col gap-4 ">
      <HomeNav />
      <section className="flex w-screen h-full pt-8 border-t ">
        <FilterSidebar />
        <CoursesMain />
      </section>
    </main>
  );
};

export default Courses;
