import {
  Topbar,
  HomeSidebar,
  Banner,
  CourseCardList,
} from "../../Components/components";
import CourseData from "../../data/course_list.json";

const Courses = () => {
  return (
    <div className="grid w-full h-screen grid-cols-12 overflow-hidden">
      {/* sidebar div */}
      <div className="flex items-center col-span-1 overflow-hidden bg-white ">
        <HomeSidebar pageNumber={2} />
      </div>
      {/* main div */}
      <div className="flex flex-col col-span-11 ">
        {/* topbar here */}
        <Topbar />
        {/* div for Main content */}
        <div className="flex w-full h-full overflow-y-scroll">
          {/* main */}
          <div className="flex flex-col w-3/4 p-4 space-y-8 h-screen pb-40 bg-white overflow-y-scroll">
            {/* banner  */}
            <Banner/>
            <CourseCardList heading="Popular Courses" data={CourseData} />
            <CourseCardList heading="Web Development" data={CourseData} />
            <CourseCardList heading="Web Development" data={CourseData} />
          </div>
          {/* right sidebar */}
          <div className="flex w-1/4 p-4 rounded-3xl">
            <div className="flex w-full p-4 bg-gray-50 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
