"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Sidebar from "@/components/course/instructor/Sidebar";
import { courseStore } from "@/lib/store/createCourse.store";
import Basic_Details from "@/components/course/instructor/Basic_Details";
import Pricing from "@/components/course/instructor/Pricing";
import AddImage from "@/components/course/instructor/AddImages";
import Curriculum from "@/components/course/instructor/Curriculum";

const InstructorCourse = () => {
  const router = useRouter();
  const pageName = useSearchParams().get("page");
  const courseData = courseStore;

  return (
    <div className="flex w-full min-h-screen">
      <Sidebar />
      <main className="w-full p-4">
        {pageName === "basic_details" ? (
          <Basic_Details />
        ) : pageName === "pricing" ? (
          <Pricing />
        ) : pageName === "images" ? (
          <AddImage />
        ) : pageName === "modules" ? (
          <Curriculum />
        ) : (
          <h1>ss</h1>
        )}
      </main>
    </div>
  );
};

export default InstructorCourse;
