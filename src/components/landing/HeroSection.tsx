"use client";
import "./landing.css";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  return (
    <section className="flex flex-col items-center w-full gap-5 hero-section h-lvh place-content-center">
      <h4 className="text-gray-500">TOP PLATFORM FOR ORGANISING EDUCATION</h4>
      <div className="flex flex-col items-center gap-12">
        <h2 className="text-6xl font-bold text-center">
          Improve your Learning <br /> with Gyanaguru
        </h2>
        <div className="flex gap-4 ">
          <button className="px-4 py-3 border border-gray-200 shadow-2xl outline-none cursor-pointer rounded-2xl shadow-gray-200 h-fit">
            How it work's
          </button>
          <button
            onClick={() => router.push("/login")}
            className="px-4 py-3 text-white bg-black shadow-2xl outline-none cursor-pointer shadow-gray-200 rounded-2xl h-fit"
          >
            Get Started for Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
