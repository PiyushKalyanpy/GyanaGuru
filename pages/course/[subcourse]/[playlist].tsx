import { useRouter } from "next/router";
import VideoData from "../../../data/video.json";

const Playlist = () => {
  const router = useRouter();
  const { subcourse, playlist } = router.query;
  const onBackClick = () => {
    router.push("/courses");
  };
  const courseDetails = {
    courseTitle:
      "C++ Full Course | C++ Tutorial | Data Structures & Algorithms",
    creatorName: "Apna College",
    platform: "Youtube",
    rating: "5",
    time: "34 min",
    completed: false,
    description: "This is a description of the course",
    tags: ["C++", "Data Structures", "Algorithms"],
    percentage: 83,
    progress: "3/4",
    totalVideos: 4,
    completedVideos: 3,
    totalNotes: 4,
    completedNotes: 3,
    totalQuizzes: 4,
    completedQuizzes: 3,
  };


  return (
    <div className="grid grid-cols-12 w-full h-screen overflow-auto bg-zinc-100">
      <div className="col-span-9 bg-slate-50 h-screen p-8 space-y-8 overflow-y-scroll ">
        <TitleElement
          title="C++ Full Course | C++ Tutorial | Data Structures & Algorithms"
          creatorName="Apna College"  
          platform="Youtube"
          rating="5"
        />

        <div className="relative h-full">
          <iframe
            className="absolute w-full h-3/4 rounded-2xl shadow-lg z-10"
            width="420"
            height="345"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
            src="https://www.youtube.com/embed/U0hlUeNjM0s"
          ></iframe>{" "}
          
        </div>
      </div>
      <div className="col-span-3 bg-slate-100 h-screen p-4 space-y-4">
        <div
          placeholder="Make"
          className="flex flex-col col-span-2 min-h-full bg-white rounded-2xl overflow-hidden border-0 outline-none "
        >
          <div className="flex flex-row justify-between bg-gray-100 border-b border-gray-300 px-4 py-1 text-zinc-600">
            <p>Notes</p>
            <span className="material-icons">open_in_full</span>
          </div>
          <div
            contentEditable="true"
            className="border-0 outline-none h-full p-4"
          ></div>
        </div>
      </div>
    </div>
  );
};

const ExpanIcon = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-4"
      >
        <path
          fillRule="evenodd"
          d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-3.97 3.97a.75.75 0 11-1.06-1.06l3.97-3.97h-2.69a.75.75 0 01-.75-.75zm-12 0A.75.75 0 013.75 3h4.5a.75.75 0 010 1.5H5.56l3.97 3.97a.75.75 0 01-1.06 1.06L4.5 5.56v2.69a.75.75 0 01-1.5 0v-4.5zm11.47 11.78a.75.75 0 111.06-1.06l3.97 3.97v-2.69a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h2.69l-3.97-3.97zm-4.94-1.06a.75.75 0 010 1.06L5.56 19.5h2.69a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

const BackIcon = ({ onClick }: any) => {
  return (
    <div
      className="flex hover:bg-zinc-100 w-12 items-center  h-12 p-2 rounded-full "
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 m-auto"
      >
        <path
          fillRule="evenodd"
          d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

const TitleElement = ({ title, creatorName, platform, rating }: any) => {
  return (
    <>
      <div className="">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-row space-x-2">
            <p className="">by : {creatorName} </p>
            <p className=""> - {platform}</p>
          </div>
          <div className="flex flex-row  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-yellow-500"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>

            <p className="">{rating}/5</p>
          </div>
        </div>
      </div>
    </>
  );
};

const VideoPlayer = ({ currentVideo }: any) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1">
        {/* Video Player */}
        <div className="relative h-0 pb-9/16">
          <video
            className="absolute top-0 left-0 w-full h-full"
            src={currentVideo.url}
            title={currentVideo.title}
          ></video>
        </div>

        {/* make a video player */}

        {/* Video Details */}
        <div className="mt-8 px-4">
          <h2 className="text-2xl font-bold">{currentVideo.title}</h2>
          <p className="text-sm text-gray-600">{currentVideo.description}</p>
          <div className="flex items-center mt-4">
            <p className="text-sm text-gray-600">
              {currentVideo.viewCount} views &#8226; {currentVideo.uploaded}
            </p>
            <img
              className="w-8 h-8 rounded-full mr-2"
              src={currentVideo.thumbnail}
              alt="Channel Profile"
            />
          </div>
          <div className="flex items-center mt-4">
            <button className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
              <span className="ml-1 text-gray-600">
                {currentVideo.likeCount}
              </span>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <span className="ml-1 text-gray-600">
                {currentVideo.dislikeCount}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
