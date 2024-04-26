import Image from "next/image";
import { useRouter } from "next/navigation";
import { VideoIcon, ClockIcon, StarIcon } from "@radix-ui/react-icons";

const CourseCard = () => {
  const amount = 0;
  const router = useRouter();
  const navigate = () => {
    router.push(
      "/courses/topic?query=" + "Build a free website with WordPress",
    );
  };
  return (
    <div
      onClick={navigate}
      className="relative h-full p-3 text-sm transition-all border border-gray-200 cursor-pointer hover:shadow-2xl rounded-2xl hover:scale-105 hover:shadow-gray-100 "
    >
      <Image
        src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"
        alt="course"
        width={300}
        height={300}
        className="object-cover w-full h-40 rounded-2xl"
      />
      <p className="absolute flex items-center gap-2 px-2 py-1 text-white rounded-full shadow-sm bg-black/40 shadow-gray-100 backdrop-blur-sm left-6 itleems-center top-6">
        <span className=""> 4.5</span>
        <StarIcon />
      </p>
      <div className="flex flex-col gap-2 py-4 ">
        <h4 className="text-lg font-semibold">
          Build a free website with WordPress
        </h4>
        <p className="text-gray-500">
          by{" "}
          <span className="font-medium text-gray-950"> Google brains team</span>
        </p>

        {/* time and lessons */}
        <div className="flex gap-4 text-gray-600">
          <div className="flex items-center gap-2 ">
            <VideoIcon />
            <span>12 lessons</span>
          </div>
          <div className="flex items-center gap-2 ">
            <ClockIcon />
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

        {/* progress : if enrolled */}
        <div className="flex items-center gap-2 text-indigo-600">
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-indigo-500 rounded-full"
              style={{ width: "90%" }}
            ></div>
          </div>
          28%
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
