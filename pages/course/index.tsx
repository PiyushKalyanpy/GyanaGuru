import CategoryCard from "@/Components/CoursesComponents/CategoryCard";
import Topbar from "@/Components/CoursesComponents/Topbar";
import { HomeSidebar } from "@/Components/components";
import { CourseContext } from "@/context/CourseContext";
import { useContext } from "react";

const Course = () => {
  const { categories } = useContext(CourseContext);

  return (
    <div className="grid grid-cols-12 w-full h-screen bg-zinc-100 dark:bg-zinc-900">
      <div className="col-span-2">
        <HomeSidebar pageNumber={2} />
      </div>
      <div className=" col-span-10">
        <Topbar />
        {/* div with categories */}
        <div className="flex flex-row justify-between items-center p-4">
          <h1 className="text-2xl font-inter font-bold">Categories</h1>
        </div>
        <div className="flex flex-row  p-4 gap-6">
          {categories &&
            categories.map((category: any) => (
              <CategoryCard
                key={category.id}
                imageUrl={category.imageUrl}
                title={category.name}
                id={category.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
