import Topbar from "@/Components/CoursesComponents/Topbar";
import { HomeSidebar } from "@/Components/components";

const Course = () => {
  return (
    <div className="grid grid-cols-12 w-full h-screen bg-white">
      <div className="col-span-2">
        <HomeSidebar pageNumber={2} />
      </div>
      <div className="bg-zinc-100 col-span-10">
        <Topbar />
      </div>
    </div>
  );
};

export default Course;
