"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const HomeNav = () => {
  const router = useRouter();
  return (
    <header className="fixed z-20 flex flex-row items-center justify-between w-full px-10 ">
      {/* logo link */}
      <Image
        src="/images/beta_logo.svg"
        alt="12"
        width={100}
        height={100}
        className="object-cover w-48 h-full p-2 cursor-pointer select-one bg-white/50 rounded-2xl backdrop-blur-sm full"
      />

      {/* nav */}
      <nav className="flex items-center content-center py-2 ">
        <div className="flex flex-row items-center gap-4">
          {/* links */}
          <ul className="flex items-center gap-4 px-4 shadow-2xl rounded-2xl align-items-center h-fit backdrop-blur-md bg-white/60 shadow-gray-100">
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
          <button
            onClick={() => router.push("/login")}
            className="px-4 py-2 border border-gray-200 cursor-pointer rounded-xl h-fit"
          >
            Log In
          </button>
        </div>
      </nav>
    </header>
  );
};

export default HomeNav;
