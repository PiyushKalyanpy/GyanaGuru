"use client";
import AddImage from "@/components/course/instructor/AddImages";
import Basic_Details from "@/components/course/instructor/Basic_Details";
import Curriculum from "@/components/course/instructor/Curriculum";
import Pricing from "@/components/course/instructor/Pricing";
import Sidebar from "@/components/course/instructor/Sidebar";

const InstructorCourse = ({ params, searchParams }: any) => {
  const pageName = searchParams.page;
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
