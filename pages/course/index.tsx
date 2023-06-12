import CategoryCard from "@/Components/CoursesComponents/CategoryCard";
import PlaylistCard from "@/Components/CoursesComponents/PlaylistCard";
import Topbar from "@/Components/CoursesComponents/Topbar";
import { HomeSidebar } from "@/Components/components";
import { CourseContext } from "@/context/CourseContext";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  doc,
  setDoc,
  limit,
} from "firebase/firestore";
import { db } from "@/database/firebase";

const Course = () => {
  const { categories, playlist } = useContext(CourseContext);

  const [selectedPlaylist, setSelectedPlaylist] = useState(true); // true for popular and false for latest
  const popularPlaylist =
    playlist &&
    playlist
      ?.sort((a: any, b: any) => {
        return b.rating - a.rating;
      })
      .slice(0, 4);

  return (
    <div className="grid w-full h-screen grid-cols-12 bg-zinc-100 dark:bg-zinc-900">
      <div className="col-span-2 ">
        <HomeSidebar pageNumber={2} />
      </div>
      <div className="h-full col-span-10 space-y-10 overflow-y-scroll ">
        <Topbar />
        {/* div with categories */}
        <div className="flex flex-col justify-start">
          <h1 className="pl-4 font-medium  font-inter text-zinc-500">
            Categories
          </h1>
          <div className="flex flex-row gap-6 p-4">
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
          <h1 className="pl-4 font-medium  font-inter text-zinc-500">
            Playlists
          </h1>
          <div className="flex flex-row gap-6 p-4 lg:grid lg:grid-cols-4 h-fit ">
            {/* div for popular and latest */}
            {/* <div className="flex flex-col justify-around space-y-4">
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
            {popularPlaylist &&
              popularPlaylist.map((playlist: any) => (
                <PlaylistCard key={playlist.id} playlist={playlist} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
