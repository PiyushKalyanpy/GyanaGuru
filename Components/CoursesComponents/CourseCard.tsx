import Image from "next/image";
import { useRouter } from "next/router";

const CourseCard = ({ item }: any) => {
  const router = useRouter();
  const handleCardClick = () => {
    router.push(`/courses/${item.youtubeId}`);
  };
  const courseData = {
    tagTitle: "Web Development",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2bG9wbWVudCUyMGNvdXJzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    courseTitle: "Web development Bootcamp with MERN stack",
    duration: "2 hr 23 m",
    lectures: "12 lectures",
    ratingCount: 4,
    voteCount: 34,
  };
  return (
    <div onClick={() => handleCardClick()} className="flex select-none flex-auto gap-4 p-4 m-4 transition bg-white snap-start rounded-3xl hover:bg-gray-100 shrink-0 w-fit">
      {/* course image */}
      <div className="relative w-32 h-full p-6 rounded-3xl ">
        <Image
          src={courseData.thumbnailUrl}
          layout="fill"
          objectFit="cover"
          alt="Course Thumbnail"
          className="rounded-xl "
        />
      </div>

      {/* course data */}
      <div className="flex flex-col w-64 space-y-6">
        {/* tag */}
        <CourseTag tagTitle={courseData.tagTitle} />
        {/* Title and sub tags */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-medium font-archivo">
            {courseData.courseTitle}
          </h3>
          <div className="flex flex-row space-x-8">
            <CourseSubTag Icon={<DurationIcon />} text={courseData.duration} />
            <CourseSubTag Icon={<CourseIcon />} text={courseData.lectures} />
          </div>
        </div>
        <div className="flex items-center justify-between pt-2 border-t-2 ">
            
        <Rating
          ratingCount={courseData.ratingCount}
          voteCount={courseData.voteCount}
        />
        <span className="text-blue-500 material-icons">chevron_right</span>
        </div>
      </div>
    </div>
  );
};

const CourseTag = ({ tagTitle }: any) => {
  return (
    <>
      <div className="flex flex-row items-center px-2 py-1 space-x-2 rounded-lg bg-violet-100 w-fit">
        {/* tag */}
        <div className="flex w-3 h-3 rounded-full bg-violet-400" />
        {/* tag title */}
        <p className="text-sm text-violet-600">{tagTitle}</p>
      </div>
    </>
  );
};
const CourseSubTag = ({ Icon, text }: any) => {
  return (
    <div className="flex flex-row space-x-4 text-gray-600">
      {/* <span className="text-xs material-icons">{iconClass}</span> */}
      {Icon}
      <h4 className="text-sm font-inter"> {text}</h4>
    </div>
  );
};

const Rating = ({ ratingCount, voteCount }: any) => {
  return (
    <div className="flex flex-row space-x-2 ">
      <div className="flex text-yellow-400 ">
        <FullStarIcon/>
        <FullStarIcon/>
        <FullStarIcon/>
        <FullStarIcon/>
        <FullStarIcon/>
      </div>

      <p>·</p>
      <p className="text-sm font-inter">{voteCount} &nbsp; votes</p>
    </div>
  );
};

const DurationIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const CourseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M5.625 3.75a2.625 2.625 0 100 5.25h12.75a2.625 2.625 0 000-5.25H5.625zM3.75 11.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zM3 15.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM3.75 18.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" />
    </svg>
  );
};

const FullStarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default CourseCard;
