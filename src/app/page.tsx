"use client";
import Image from "next/image";
import Link from "next/link";
import HomeNav from "@/components/navbar/HomeNav";
import HeroSection from "@/components/landing/HeroSection";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Home() {
  const tl = useRef();
  const container = useRef();
  useGSAP(
    () => {
      gsap.set(".hero-section", { y: 20 });
    },

    { scope: container }
  );

  return (
    <main className="flex text-black flex-col  bg-[#ffffff] w-full h-full min-h-screen gap-8 ">
      {/* background */}
      {/* <Image
        src="/images/hero_bg.png"
        alt="12"
        width={1000}
        height={1000}
        className="absolute object-cover w-full h-full -z-1"
      /> */}
      <HomeNav />
      <main className="z-10 px-40 flex flex-col min-h-screen ">
        <HeroSection />

        {/* pre moulded courses */}
        <section className="   flex flex-col gap-8 bg-[url('D:\gyanaguru\public\images\blur_bg.svg')] ">
          <div className="flex gap-8">
            <div
              id="bento"
              className=" bg-gray-100 h-96 overflow-hidden rounded-3xl flex items-center place-content-center w-3/4 flex-row gap-4 "
            >
              <div className="flex w-1/2 flex-col items-end  h-full gap-4 p-8 ">
                <h5 className="text-3xl  text-gray-800 ">
                  All your learning resorces at one place
                </h5>
                <p className="text-gray-500">
                  Organise and track your learning by importing data from
                  different learning resources.
                </p>
              </div>
              <Image
                src="/images/all_content.svg"
                alt="12"
                width={300}
                height={300}
                className="  -mr-10 p-10 w-1/2"
              />{" "}
            </div>
            <div className="relative h-96 bg-gray-100 rounded-3xl overflow-hidden  flex w-1/4">
              <Image
                src="/images/smiling_girl.jpg"
                alt="12"
                width={500}
                height={500}
                className="  w-full h-full  object-cover"
              />{" "}
              <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-zinc-400 to-transparent  object-cover  items-end flex">
                <div className="p-4  text-white ">
                  <span className="text-2xl">
                    Little progress <br /> each day
                  </span>
                </div>
              </div>
              <div className="absolute border  h-fit flex flex-wrap w-12 gap-2 m-4 ">
                <div className="w-4 h-4 rounded-full bg-white " />
                <div className="w-4 h-4 rounded-full bg-white/50" />
                <div className="w-4 h-4 rounded-full bg-white/60" />
              </div>
            </div>
          </div>
          <div className="  flex gap-8">
            <div className="relative bg-gray-100 h-72 rounded-3xl  overflow-hidden items-center place-content-center  flex w-1/2">
              <Image
                src="/images/connect_bento.svg"
                alt="12"
                width={1000}
                height={1000}
                className=" object-cover w-full h-full -z-1 absolute "
              />
              <h5 className="flex z-10 text-3xl text-gray-600">
                Connect with collaborate
              </h5>
            </div>
            <div className="relative bg-gray-100 flex flex-col gap-2  h-72 rounded-3xl overflow-hidden w-1/2">
              <Image
                src="/images/github_bento.svg"
                alt="12"
                width={1000}
                height={1000}
                className=" object-cover w-full h-full -z-1 absolute "
              />
              <div className="flex flex-col gap-4  m-4">
                <div className="z-10 bg-white/50 backdrop-blur-sm p-4 cursor-pointer rounded-2xl h-fit w-56  list-none flex flex-col ">
                  <h3 className="text-4xl font-medium">130+</h3>
                  <span className="text-gray-500">forks</span>
                </div>
                <div className="z-10 bg-white/50 backdrop-blur-sm p-4 cursor-pointer rounded-2xl h-fit w-56   list-none flex flex-col ">
                  <h3 className="text-4xl font-medium">60+</h3>
                  <span className="text-gray-500">Stars</span>
                </div>
                <div className="z-10 backdrop-blur-sm px-4 py-2 w-56 cursor-pointer rounded-2xl h-fit list-none flex flex-col  ">
                  <span className="text-gray-600">How can i contribute?</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="h-fit my-10 flex items-start place-content-start ">
          <div className="flex gap-10 flex-col items-start place-content-start">
            <h4 className="text-4xl leading-normal text-left">
              Start learning for free with our <br /> best curated courses.
            </h4>
            <p className="text-lg w-3/4">
              Explore our expertly curated selection of free courses, designed
              by combining the best elements from various sources for an
              unbeatable learning experience.
            </p>
            <div className="flex flex-wrap gap-8 list-none px-20 lg:px-40">
              <TagItem item="Data Structures" />
              <TagItem item="Algorithms" />
              <TagItem item="Web Development" />
              <TagItem item="Machine Learning" />
              <TagItem item="Blockchain" />
              <TagItem item="Cloud Computing" />
              <TagItem item="UI UX Designing" />
              <TagItem item="Artificial Intelligence" />
              <TagItem item="more" />
            </div>
          </div>
        </section>

        <section className="h-fit  my-10  w-full  flex flex-row">
          {/* left  */}
          <div className=" flex flex-col gap-4  w-1/2">
            <div className=" flex flex-col gap-4">
              <h6
                className="bg-green-500/20 border border-green-400 px-4 py-1 rounded-full w-fit text-green-400
               "
              >
                Everything is
              </h6>
              <h4 className="text-4xl font-semibold">Built for you</h4>
            </div>
            {/* list of items */}
            <ul className="flex flex-col gap-2 ">
              <li className=" flex p-4 flex-col gap-2 bg-gray-500/10 rounded-xl">
                <h6>Explore Diverse Learning Paths</h6>
                <p>
                  Explore expert-curated courses to kickstart your learning
                  journey
                </p>
              </li>
              <li className=" flex p-4 flex-col gap-2 bg-gray-500/10 rounded-xl">
                <h6>Explore Diverse Learning Paths</h6>
                <p>
                  Create customized courses tailored to your interests and
                  goals.
                </p>
              </li>
              <li className=" flex p-4 flex-col gap-2 bg-gray-500/10 rounded-xl">
                <h6>Explore Diverse Learning Paths</h6>
                <p>
                  Engage in brain games for enhanced skills and cognitive
                  abilities.
                </p>
              </li>
            </ul>
          </div>
          {/* right */}
          <div className="flex w-1/2">hello</div>
        </section>
      </main>
    </main>
  );
}

const TagItem = ({ item }: any) => {
  return (
    <li className="hover:scale-105  transition-all ">
      <Link
        href={`/tags/`}
        className=" px-4 py-2 border border-gray-200 cursor-pointer rounded-2xl h-fit"
      >
        {item}
      </Link>
    </li>
  );
};
