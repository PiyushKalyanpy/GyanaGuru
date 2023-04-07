import { HomeSidebar, CategoryCard, CourseListSidebar } from "../../Components/components";
import CoursesData from "../../data/course_categories.json";

const Courses = () => {
  return (
    <div className="grid grid-cols-12 w-full h-screen bg-white">
      <div className="col-span-2  border-r border-zinc-200">
        <HomeSidebar pageNumber={2} />
      </div>
      <div className="col-span-4  border-r border-zinc-200">
        <CourseListSidebar/>
      </div>
      <div className="col-span-6 bg-gray-100">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 m-8">
          {CoursesData.map((category, index: any) => {
            return (
              <CategoryCard
                key={index}
                imageUrl={category.imageUrl}
                categoryName={category.categoryName}
                onClick={() => {
                  console.log("clicked");
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
