import TagItem from "../landing/sub_components/TagItem";
import CourseCard from "./CourseCard";

const CoursesMain = () => {
  return (
    <main className="flex flex-col w-3/4 gap-4">
      {/* <div className="flex gap-2 my-2 ">
        {courses.map((course) => {
          return <TagItem key={course} item={course} />;
        })}
      </div> */}
      <div className="flex items-center justify-between w-full pr-40 h-fit">
        <h3 className="text-xl font-medium">
          23 results for "UI UX designing"
        </h3>
        <div>
          <span>Sort by</span>
        </div>
      </div>

      <section className="grid grid-cols-3 gap-8 pr-40 mt-8">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </section>
    </main>
  );
};

const courses = [
  "Data Structures",
  "UI UX Designing",
  "Algorithms",
  "Blockchain",
];

export default CoursesMain;
