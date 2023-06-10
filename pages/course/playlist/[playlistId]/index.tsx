import { CourseContext } from "@/context/CourseContext";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

const VideosPage = () => {
  const router = useRouter();
  const { playlistId } = router.query;
  const { playlist, getVideos, videos } = useContext(CourseContext);
  const curretPlaylist = playlist.filter((item: any) => item.id === playlistId);

  useEffect(() => {
    // getVideos(playlistId);
  }, [getVideos, playlistId]);

  return <div>{playlistId}sdf</div>;
};

export default VideosPage;
