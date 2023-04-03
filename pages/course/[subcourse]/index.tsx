import { useRouter } from "next/router";
import CourseData from "../../../data/playlist.json";
import { useState, useEffect } from "react";



const SubCourse = () => {
  const router = useRouter();
  const { subcourse } = router.query;
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    const coursesInCategory = CourseData.courses.filter(
      (course) =>
        course.category.toLowerCase() === subcourse?.toString().toLowerCase()
    );
    const data = {
      courses: coursesInCategory,
    };
    setFilteredCourses(data.courses);
  }, [subcourse]);

  const handleCardClick = (course: any) => {
    const courseTitle = course.courseCode.toLowerCase();
    router.push(
 
      `/course/${subcourse}/${courseTitle}`
    );
  };

  return (
    <div>
      sub {subcourse}
      <div className="grid grid-cols-3  gap-8 m-8">
        {filteredCourses.map((course, index) => {
          return (
            <CourseCard
              key={index}
              course={course}
              onClick={() => handleCardClick(course)}
            />
          );
        })}
      </div>
    </div>
  );
};

const CourseCard = ({ course, onClick }: any) => {
  return (
    <div
      onClick={onClick}
      className="bg-white cursor-pointer rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <img
        src={course.imageUrl}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
        <p className="text-gray-700 text-sm mb-2">{course.description}</p>
        <div className="flex items-center mb-2">
          <span className="text-sm text-gray-500 mr-2">{course.creator}</span>
          <span className="text-sm text-gray-500 mr-2">|</span>
          <span className="text-sm text-gray-500">{course.duration}</span>
        </div>
        <div className="flex items-center">
          <span className="text-yellow-500 mr-2">
            <i className="material-icons text-sm align-middle">star</i>
            {course.rating}
          </span>
          <span className="text-gray-500 text-sm mr-2">
            <i className="material-icons text-sm align-middle">
              remove_red_eye
            </i>
            {course.totalViews}
          </span>
          <span className="text-gray-500 text-sm">{course.category}</span>
        </div>
      </div>
    </div>
  );
};

export default SubCourse;
