"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  VideoIcon,
  ClockIcon,
  StarIcon,
  StarFilledIcon,
} from "@radix-ui/react-icons";

const CourseCard = ({ course }: any) => {
  const {
    _id,
    courseId,
    title,
    description,
    thumbnail,
    is_paid,
    price,
    instructor,
    total_modules,
    total_time,
    ratings,
  } = course || {};
  const router = useRouter();
  const navigate = () => {
    router.push("/courses/topic?id=" + _id);
  };
  return (
    <div
      onClick={navigate}
      className="relative h-full p-3 text-sm transition-all border border-gray-200 cursor-pointer hover:shadow-2xl rounded-2xl hover:scale-105 hover:shadow-gray-100 "
    >
      <Image
        src={thumbnail && thumbnail}
        alt="course"
        width={300}
        height={300}
        className="object-cover w-full h-40 rounded-2xl"
      />
      <p className="absolute flex items-center gap-2 px-2 py-1 text-white rounded-full shadow-sm bg-black/40 shadow-gray-100 backdrop-blur-sm left-6 itleems-center top-6">
        <span className="">
          {" "}
          {ratings && ratings.average_rating} &#40;
          {ratings && ratings.rating_count}&#41;{" "}
        </span>
        <StarFilledIcon />
      </p>
      <div className="flex flex-col gap-2 py-4 ">
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-gray-500">
          by{" "}
          <span className="font-medium text-gray-950">
            {" "}
            {instructor && instructor.name}
          </span>
        </p>

        {/* time and lessons */}
        <div className="flex gap-4 text-gray-600">
          <div className="flex items-center gap-2 ">
            <VideoIcon />
            <span>{total_modules} lessons</span>
          </div>
          <div className="flex items-center gap-2 ">
            <ClockIcon />
            <span>{total_time} hours</span>
          </div>
        </div>
        {/* ratings and price */}

        <div className="flex justify-between">
          <span className="text-xl font-bold">
            {is_paid ? (
              <span className="text-indigo-500">₹ {price}</span>
            ) : (
              <span className="font-bold text-green-700">Free</span>
            )}
          </span>
        </div>

        {/* progress : if enrolled
        <div className="flex items-center gap-2 text-indigo-600">
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-indigo-500 rounded-full"
              style={{ width: "90%" }}
            ></div>
          </div>
          28%
        </div> */}
      </div>
    </div>
  );
};

export default CourseCard;
