import { CourseContext } from "@/context/CourseContext";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import YouTube, { YouTubeProps } from "react-youtube";
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
    console.log(currentTime);
    const ytPlayerHeader = document.querySelector(
      ".ytp-chrome-top.ytp-show-cards-title"
    );
    ytPlayerHeader?.remove();
    console.log(ytPlayerHeader);
    ytPlayerHeader?.remove();
  }, [currentTime]);

  return (
    <div className="w-screen h-screen p-4 overflow-y-scroll bg-zinc-200 ">
      <div className="flex">
        <div className="flex items-center px-4 pt-4 space-x-4 bg-zinc-100 w-fit rounded-t-4xl">
          <span
            onClick={() => router.back()}
            className="p-4 text-sm bg-white rounded-full cursor-pointer material-icons text-zinc-600"
          >
            arrow_back_ios_new
          </span>
          <h1 className="px-4 text-xl font-semibold">
            {/* {curretPlaylist && curretPlaylist[0].name} */}
          </h1>
        </div>
        <div className="w-20 bg-zinc-100">
          <div className="w-full h-full bg-zinc-200 rounded-bl-4xl"></div>
        </div>
      </div>
      <div className="flex w-full h-full bg-zinc-100 rounded-bl-2xl rounded-r-3xl">
        {/* video section */}
        <div className="flex flex-col w-3/4 p-4  ">
          {/* videoplayer  */}
          <div className="relative h-3/4 rounded-xl  bg-zinc-200">
            <div className="flex w-full h-full ">
              <p className="flex m-auto text-3xl text-zinc-600">Vdieo Player</p>
              </div> 
            {/* <VideoPlayer videoId="doSFDItcQrk" /> */}
            {/* <VideoPlayer videoId="doSFDItcQrk" /> */}
          </div>
          {/* next videos  */}
          <div className="flex w-full border h-1/4"></div>
        </div>
        {/* sidebar with comment and notes section  */}
        <div className="flex w-1/4 border">
          {/* notes section */}
          {/* comment section */}
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

    const onPlayerStateChange = (event: any) => {
      console.log("player state: " + player.getPlayerState());
    };

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
