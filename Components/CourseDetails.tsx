import Image from "next/image";

const CourseDetails = ({ courseDetail }: any) => {
  const {
    courseCategory,
    courseName,
    courseDescription,
    courseImage,
    youtubeThumbnail,
    rating,
    numberOfPersonRated,
  } = courseDetail;
  return (
    <div
      className={`relative w-full h-full items-end rounded-3xl overflow-hidden bg-cover  p-8`}
    >
      <div className="relative h-96 w-full">
        <Image
          layout="fill"
          className="object-cover w-full rounded-3xl"
          src={youtubeThumbnail}
          alt="courseImage"
        />
      </div>
      <div className="   w-full">
        <div className="flex flex-row items-center px-4 py-2 w-full  justify-between">
          <div className="  text-black w-10/12">
            <div className="flex flex-col w-full space-y-2">
              <h2 className="truncate overflow-hidden text-lg font-medium font-archivo ">
                {courseName}
              </h2>
            </div>

            <div className="flex items-center space-x-4 ">
              <div className="flex flex-row">
                <span className="material-icons text-yellow-400">star</span>
                <div className="flex items-center text-md font-inter">
                  <span>{rating}</span>
                  <span className="material-icons">·</span>
                  <span>{numberOfPersonRated}</span>
                  <span>&nbsp; ratings</span>
                </div>
              </div>

              <h6 className="text-white/80">{courseCategory}</h6>
            </div>
          </div>
          <div className="text-white p-4 px-2 hover:bg-white/30 transition rounded-full h-fit w-fit">
            <span className="material-icons w-fit h-fit">arrow_forward</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
