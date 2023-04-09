import { Topbar, HomeSidebar, Banner, CourseCardList } from "../../Components/components";
import CourseData from "../../data/course_list.json";

const Courses = () => {
  return (
    <div className="grid grid-cols-12 w-full h-screen bg-gray-100 overflow-hidden">
      {/* sidebar div */}
      <div className="col-span-1 bg-white flex items-center ">
        <HomeSidebar pageNumber={2} />
      </div>
      {/* main div */}
      <div className="col-span-11 flex flex-col ">
        {/* topbar here */}
        <Topbar />
        {/* div for Main content */}
        <div className="flex w-full h-full  ">
          {/* main */}
          <div className="flex flex-col space-y-8 w-3/4 bg-gray-100 p-4">
            {/* banner  */}
            <Banner/>
            <CourseCardList heading="Popular Courses" data={CourseData} />
          </div>
          {/* right sidebar */}
          <div className="flex w-1/4 bg-gray-200 rounded-3xl p-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
