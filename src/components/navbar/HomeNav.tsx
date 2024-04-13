"use client";
import Image from "next/image";
import Link from "next/link";

const HomeNav = () => {
  return (
    <header className="z-20 fixed flex flex-row w-full justify-between z-10">
      {/* logo link */}
      <Image
        src="/images/beta_logo.svg"
        alt="12"
        width={100}
        height={100}
        className="object-cover w-64 h-full -mx-4 select-none full cursor-pointer "
      />

      {/* nav */}
      <nav className=" flex items-center content-center  px-8 py-2">
        <div className="flex flex-row items-center gap-4">
          {/* links */}
          <ul className="flex items-center gap-4 px-4 rounded-2xl align-items-center h-fit backdrop-blur-md	 bg-indigo-100/10">
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
              href="/what's-new"
            >
              Courses
            </Link>
            <Link
              className="p-2 transition hover:text-indigo-400"
              href="/what's-new"
            >
              Features
            </Link>
            <Link
              className="p-2 transition hover:text-indigo-400"
              href="/what's-new"
            >
              FAQ's
            </Link>
          </ul>
          {/* login */}
          <button className="px-4 py-2 border border-white cursor-pointer rounded-xl h-fit">
            Log In
          </button>
        </div>
      </nav>
    </header>
  );
};

export default HomeNav;
