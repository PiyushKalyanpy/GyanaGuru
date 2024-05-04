"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { PersonIcon } from "@radix-ui/react-icons";

const HomeNav = () => {
  const router = useRouter();
  const [courseName, setCourseName] = useState("");

  return (
    <header className="sticky top-0 z-20 flex flex-row items-center justify-between w-full px-10 ">
      {/* logo link */}
      <Link href={"/"}>
        <Image
          priority
          src="/images/beta_logo.svg"
          alt="12"
          width={100}
          height={100}
          className="object-cover w-48 h-full p-2 cursor-pointer select-one bg-white/50 rounded-2xl backdrop-blur-sm full"
        />
      </Link>
      {/* nav */}
      <nav className="flex items-center content-center py-2 ">
        <div className="flex flex-row items-center gap-4">
          {/* links */}
          <ul className="flex items-center gap-4 pr-4 shadow-2xl rounded-2xl align-items-center h-fit backdrop-blur-md bg-white/60 shadow-gray-100">
            {/* input for course search */}
            <div className="flex items-center m-2 bg-white border border-gray-300 place-content-center hover:border-indigo-500 focus:border-indigo-500 active:border-indigo-500 gap-2bg-gray-100 rounded-2xl">
              <input
                type="text"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                className="px-4 py-2 outline-none rounded-2xl placeholder:font-light"
                placeholder="I want to learn"
              />
              <button
                onClick={() => router.push("/login")}
                className="flex items-center px-4 py-2 cursor-pointer rounded-xl h-fit"
              >
                <span className="material-icons-round">search</span>
              </button>
            </div>
            <Link
              className="flex items-center gap-2 p-2 transition hover:text-indigo-400"
              href="/what's-new"
            >
              <span>What&apos;s new</span>
              <Image
                src="/images/glowing_star.svg"
                alt="12"
                width={40}
                height={40}
                className="object-cover w-8 h-8 "
              />
            </Link>
            <Link
              className="p-2 transition hover:text-indigo-400"
              href="/courses"
            >
              Courses
            </Link>
          </ul>
          {/* login */}
        </div>
      </nav>{" "}
      <div className="flex gap-4">
        <button
          onClick={() => router.push("/login")}
          className="flex items-center px-4 py-2 border border-gray-200 cursor-pointer rounded-xl"
        >
          Log In
        </button>
        <button
          onClick={() => router.push("/cart")}
          className="flex items-center px-4 py-2 border border-gray-200 cursor-pointer rounded-xl"
        >
          <span className="material-symbols-outlined">shopping_cart</span>
        </button>
        <button
          onClick={() => router.push("/dashboard")}
          className="flex items-center px-4 py-2 border border-gray-200 cursor-pointer rounded-xl"
        >
          <PersonIcon />{" "}
        </button>
      </div>
    </header>
  );
};

export default HomeNav;
