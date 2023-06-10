import CategoryCard from "@/Components/CoursesComponents/CategoryCard";
import PlaylistCard from "@/Components/CoursesComponents/PlaylistCard";
import Topbar from "@/Components/CoursesComponents/Topbar";
import { HomeSidebar } from "@/Components/components";
import { CourseContext } from "@/context/CourseContext";
import { useContext } from "react";
import { useState } from "react";

const Course = () => {
  const { categories, playlist } = useContext(CourseContext);
  const [selectedPlaylist, setSelectedPlaylist] = useState(true); // true for popular and false for latest

  return (
    <div className="grid grid-cols-12 w-full h-screen bg-zinc-100 dark:bg-zinc-900">
      <div className="col-span-2">
        <HomeSidebar pageNumber={2} />
      </div>
      <div className=" col-span-10 space-y-10">
        <Topbar />
        {/* div with categories */}
        <div className="flex flex-col justify-start">
          <h1 className=" font-inter font-medium text-zinc-500 pl-4">
            Categories
          </h1>
          <div className="flex flex-row  p-4 gap-6">
            {categories &&
              categories.map((category: any) => (
                <CategoryCard
                  key={category.id}
                  imageUrl={category.imageUrl}
                  title={category.name}
                  id={category.id}
                />
              ))}
          </div>
        </div>
        {/* diffent playlist section  */}
        <div className="flex flex-col justify-start">
          <h1 className=" font-inter font-medium text-zinc-500 pl-4">
            Playlists
          </h1>
          <div className="flex flex-row  p-4 gap-6 h-fit ">
            {/* div for popular and latest */}
            {/* <div className="flex flex-col space-y-4  justify-around">
              <button
                onClick={() => setSelectedPlaylist(true)}
                className={`p-4 px-10 w-full  rounded-2xl ${
                  selectedPlaylist ? "bg-black text-white dark:bg-white dark:text-black " : "bg-zinc-200 dark:bg-zinc-800 "
                }`}
              >
                Popular
              </button>
              <button
                onClick={() => setSelectedPlaylist(false)}
                className={` p-4 px-10 w-full rounded-2xl ${
                  selectedPlaylist ? "bg-zinc-200 dark:bg-zinc-800  " : "bg-black text-white dark:bg-white dark:text-black"
                }`}
              >
                Latest
              </button>
            </div> */}
            {/* playlist cards */}
            {playlist &&
              playlist.map((playlist: any) => (
                <PlaylistCard key={playlist.id} playlist={playlist} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
