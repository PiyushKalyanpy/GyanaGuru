import { useRouter } from 'next/router';
import { useContext } from 'react';
import { CourseContext } from '../../context/CourseContext';
import YouTube from 'react-youtube';

const VideoPlayer = () => {
  const router = useRouter();
  const { courseId } = router.query;
  const { videos } = useContext(CourseContext);
  const video = videos.find((video: any) => video && video.id === courseId);
  const {
    name,
    description,
    createdBy,
    likes,
    viewCount,
    duration,
    imageUrl,
    url,
  } = video || {};
  const videoYTId = url?.split('v=')[1];

  const opts = {
    height: '100%',
    width: '100%',

    playerVars: {
      autoplay: 1,
    },
  };

  const handleReady = (event: any) => {
    // Perform any actions when the YouTube player is ready
    // For example, event.target.playVideo();
  };

  return video ? (
    <div className="h-screen">
      <div className="w-screen h-full p-4 overflow-y-scroll bg-zinc-200 dark:bg-zinc-900">
        {/* top bar with title and buttons */}
        <div className="flex">
          <div className="flex items-center px-4 pt-4 space-x-4 bg-zinc-100 dark:bg-zinc-800 w-fit rounded-t-4xl">
            <span
              onClick={() => router.back()}
              className="p-4 text-sm bg-white rounded-full cursor-pointer dark:bg-zinc-900 dark:text-white material-icons text-zinc-600"
            >
              arrow_back_ios_new
            </span>
            <h1 className="px-4 pr-8 text-xl font-archivo">
              {/* {curretPlaylist && curretPlaylist[0].name} */}
              {name}
            </h1>
          </div>
          <div className="w-20 bg-zinc-100 dark:bg-zinc-800">
            <div className="w-full h-full bg-zinc-200 dark:bg-zinc-900 rounded-bl-4xl"></div>
          </div>
        </div>
        {/* video content with comment + notes */}
        <div className="flex flex-col w-full h-full bg-zinc-100 dark:bg-zinc-800 rounded-bl-2xl rounded-r-3xl">
          {/* video section */}
          <div className="flex flex-col h-full p-4 md:w-full lg:w-3/4 ">
            <div className="flex w-full overflow-hidden h-3/4 rounded-3xl bg-zinc-200">
              <YouTube
                videoId={videoYTId}
                opts={opts}
                onReady={handleReady}
                className="w-full h-full"
                onPause={e => {
                  console.log(e);
                  e.target.currentTime = 33;
                }}
              />
            </div>
            {/* comment section */}
            <div className="flex  w-full h-1/4 rounded-xl ">
              <div className="flex flex-col w-full overflow-y-scroll ">
                {/* <Commets /> */}
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center">
                    <img
                      src={imageUrl}
                      alt="Video Thumbnail"
                      className="w-12 h-12 rounded-full object-cover mr-2"
                    />
                    <p className="text-gray-600">{createdBy}</p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6 mr-1 text-gray-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                    <p className="text-gray-600">{likes}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6 ml-4 mr-1 text-gray-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    <p className="text-gray-600">{viewCount}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6 ml-4 mr-1 text-gray-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <p className="text-gray-600">{duration}</p>
                  </div>
                </div>
                <p className="text-gray-500">{description}</p>
              </div>
            </div>
          </div>
          {/* course content */}
          <div className="w-1/4 h-full p-4 space-y-10 md:hidden lg:grid grid-row-2 ">
            <div className="flex flex-col space-y-2">
              <h3 className="text-md font-inter text-zinc-500">
                Course Content
              </h3>
              <div className="flex w-full h-1/2 ">
                <div className="flex w-full h-full ">
                  {/* <CourseContent /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full h-screen">
      <YouTube
        videoId={'92bkNXvnpmg'}
        opts={opts}
        onReady={handleReady}
        className="w-full h-full"
        onPause={e => {
          console.log(e.target.playerInfo.currentTime);
          console.log(e.target.playerInfo);
        }}
      />
    </div>
  );
};

export default VideoPlayer;
