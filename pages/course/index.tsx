import { HomeSidebar } from "../../Components/components";

const Courses = () => {
  return (
    <div className="grid grid-cols-12 w-full h-screen bg-white">
      <div className="col-span-2  border-r border-zinc-200">
        <HomeSidebar pageNumber={2} />
      </div>
    </div>
  );
};

export default Courses;
