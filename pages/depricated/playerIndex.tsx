import { CourseContext } from "@/context/CourseContext";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import YouTube, { YouTubeProps } from "react-youtube";
import Commets from "@/components/depricated/VideoPlayer/Commets";
import CourseContent from "@/components/depricated/CoursesComponents/CourseContent";

const VideosPage = () => {
  const router = useRouter();
  const { playlistId } = router.query;
  const { playlist, getVideos, videos } = useContext(CourseContext);
  const curretPlaylist = playlist.filter((item: any) => item.id === playlistId);
  useEffect(() => {
    // getVideos(playlistId);
  }, [getVideos, playlistId]);

  return (
    <div className="w-screen h-screen p-4 overflow-y-scroll bg-zinc-200 dark:bg-zinc-900">
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
            Web Development course with Next JS and Firebase
          </h1>
        </div>
        <div className="w-20 bg-zinc-100 dark:bg-zinc-800">
          <div className="w-full h-full bg-zinc-200 dark:bg-zinc-900 rounded-bl-4xl"></div>
        </div>
      </div>
      {/* video content with comment + notes */}
      <div className="flex w-full h-full bg-zinc-100 dark:bg-zinc-800 rounded-bl-2xl rounded-r-3xl">
        {/* video section */}
        <div className="flex flex-col h-full p-4 md:w-full lg:w-3/4 ">
          <div className="flex w-full overflow-hidden h-3/4 rounded-3xl bg-zinc-200">
          </div>
          {/* comment section */}
          <div className="flex w-full h-1/4 rounded-xl ">
            <div className="flex w-full overflow-y-scroll ">
              <Commets />
            </div>
          </div>
        </div>
        {/* course content */}
        <div className="w-1/4 h-full p-4 space-y-10 md:hidden lg:grid grid-row-2 ">
          <div className="flex flex-col space-y-2">
            <h3 className="text-md font-inter text-zinc-500">Course Content</h3>
            <div className="flex w-full h-1/2 ">
              <div className="flex w-full h-full ">
                <CourseContent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosPage;
