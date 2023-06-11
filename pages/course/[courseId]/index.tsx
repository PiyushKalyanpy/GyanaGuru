import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { CourseContext } from "../../../context/CourseContext";
import PlaylistCard from "@/Components/CoursesComponents/PlaylistCard";
import { Topbar } from "@/Components/components";

const PlaylistPages = () => {
  const router = useRouter();
  const { courseId } = router.query;
  const { playlist } = useContext(CourseContext);
  const curretPlaylist = playlist.filter(
    (item: any) => item.categoryId === courseId
  );

  return (
    <div className="flex flex-col bg-zinc-200 dark:bg-zinc-900 h-screen ">
      <Topbar />
      {curretPlaylist.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-2xl font-medium text-zinc-500">
            No Playlist Found
          </h1>
        </div>
      ) : null}
      <div className="flex flex-wrap lg:grid lg:grid-cols-4 gap-4 p-4">
        {curretPlaylist.length > 0
          ? curretPlaylist.map((item: any) => {
              return <PlaylistCard playlist={item} key={item.id} />;
            })
          : null}
      </div>
    </div>
  );
};

export default PlaylistPages;
