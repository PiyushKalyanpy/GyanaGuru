import Image from "next/image";
import { useRouter } from "next/navigation";

const CourseCard = () => {
  const amount = 0;
  const router = useRouter();
  const navigate = () => {
    router.push(
      "/courses/topic?query=" + "Build a free website with WordPress"
    );
  };
  return (
    <div
      onClick={navigate}
      className="relative h-full text-sm transition-all border border-white cursor-pointer hover:shadow-2xl rounded-2xl hover:scale-105 hover:shadow-gray-100 "
    >
      <Image
        src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"
        alt="course"
        width={300}
        height={300}
        className="object-cover w-full h-40 rounded-2xl"
      />
      <p className="absolute flex items-center gap-2 px-2 py-1 text-white rounded-lg shadow-sm bg-black/40 shadow-gray-100 backdrop-blur-sm left-4 itleems-center top-4">
        <span className=""> 4.5</span>
        <span className="text-sm text-yellow-300 material-icons">star</span>
      </p>
      <div className="flex flex-col gap-2 py-4 ">
        <h4 className="text-lg font-semibold">
          Build a free website with WordPress
        </h4>

        {/* time and lessons */}
        <div className="flex gap-4 text-gray-800">
          <div className="flex items-center gap-2 ">
            <span className="material-icons-outlined">smart_display</span>
            <span>12 lessons</span>
          </div>
          <div className="flex items-center gap-2 ">
            <span className="material-icons-outlined">schedule</span>

            <span>12 hours</span>
          </div>
        </div>
        {/* ratings and price */}

        <div className="flex justify-between">
          <span className="text-xl font-bold">
            {amount > 0 ? (
              <span className="text-indigo-500">₹ {amount}</span>
            ) : (
              <span className="font-bold text-green-700">Free</span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

/*
title 
ratings 
*/
export default CourseCard;