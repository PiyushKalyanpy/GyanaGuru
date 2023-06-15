import { CourseContext } from "@/context/CourseContext";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import YouTube, { YouTubeProps } from "react-youtube";
import Commets from "@/Components/VideoPlayer/Commets";
import CourseContent from "@/Components/CoursesComponents/CourseContent";
// import { VideoPlayer } from "@/components/Utils/VideoPlayer";

const VideosPage = () => {
  const router = useRouter();
  const { playlistId } = router.query;
  const { playlist, getVideos, videos } = useContext(CourseContext);
  const curretPlaylist = playlist.filter((item: any) => item.id === playlistId);
  useEffect(() => {
    // getVideos(playlistId);
  }, [getVideos, playlistId]);

  const [currentTime, setCurrentTime] = useState(0);
  function handleProgress(event: any) {
    setCurrentTime(event.target.getCurrentTime());
  }

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "100%",
    width: "100%",

    playerVars: {
      autoplay: 0,
      // controls:0,
      modestbranding: 0,
      showinfo: 0,
      color: "#0c0",
      autohide: 0,
      iv_load_policy: 3,
      playsinline: 1,
      rel: 0,
      fs: 0,
      start: 0,
      end: 0,
    },
  };
  useEffect(() => {
    const ytPlayerHeader = document.querySelector(
      ".ytp-chrome-top.ytp-show-cards-title"
    );
    ytPlayerHeader?.remove();
    ytPlayerHeader?.remove();
  }, [currentTime]);

  return (
    <div className="w-screen h-screen p-4 bg-zinc-200 overflow-y-scroll">
      {/* top bar with title and buttons */}
      <div className="flex">
        <div className="flex items-center px-4 pt-4 space-x-4 bg-zinc-100 w-fit rounded-t-4xl">
          <span
            onClick={() => router.back()}
            className="p-4 text-sm bg-white rounded-full cursor-pointer material-icons text-zinc-600"
          >
            arrow_back_ios_new
          </span>
          <h1 className="px-4 pr-8 text-xl font-archivo">
            {/* {curretPlaylist && curretPlaylist[0].name} */}
            How to get Placement in 4 months - Apni Kaksha
          </h1>
        </div>
        <div className="w-20 bg-zinc-100">
          <div className="w-full h-full bg-zinc-200 rounded-bl-4xl"></div>
        </div>
      </div>
      {/* video content with comment + notes */}
      <div className="flex w-full bg-zinc-100  rounded-bl-2xl rounded-r-3xl">
        {/* video section */}
        <div className="flex flex-col w-3/4 p-4 h-full overflow-scroll ">
          {/* videoplayer  */}
          <div className="relative h-3/4  overflow-hidden rounded-xl bg-zinc-200">
            <YouTube
              videoId="ESnrn1kAD4E"
              opts={opts}
              className="absolute top-0 left-0 w-full h-full "
              onReady={onPlayerReady}
            />
          </div>
          {/* comment section */}
          <div className="flex w-full rounded-xl h-1/2 ">
            <div className="flex w-full overflow-y-scroll ">
              <Commets />
            </div>
          </div>
          {/* next videos  */}
          <div className="flex w-full border h-1/4"></div>
        </div>
        <div className="grid w-1/4 h-full p-4 grid-row-2 space-y-10 ">
          {/* course content */}
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

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

const VideoPlayer = ({ videoId }: any) => {
  useEffect(() => {
    // This code loads the IFrame Player API code asynchronously.
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag &&
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // This function creates an <iframe> (and YouTube player) after the API code downloads.
    let player: any;

    if (typeof window !== "undefined") {
      window.onYouTubeIframeAPIReady = () => {
        player = new window.YT.Player("player", {
          host: "https://www.youtube.com",
          videoId: "6gb6oyO1Tyg",
          playerVars: {
            enablejsapi: 1,
            playsinline: 1,
            controls: 1,
            start: 0,
            disablekb: 0,
          },
          events: {
            onStateChange: onPlayerStateChange,
          },
        });
      };
    }

    const onPlayerStateChange = (event: any) => {};

    const stopVideo = () => {
      player.stopVideo();
    };

    return () => {
      // Clean up event listeners or other resources if needed
    };
  }, []);

  return (
    <div className="w-full h-full" id="player-size">
      <div id="cropping-div">
        {/* <div id="div-to-crop"> */}
        <div id="player-wrapper">
          <div id="player"></div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default VideosPage;
