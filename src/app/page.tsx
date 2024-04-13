"use client";
import Image from "next/image";
import Link from "next/link";
import Background from "@/components/Background";
import HomeNav from "@/components/navbar/HomeNav";
import HeroSection from "@/components/landing/HeroSection";

export default function Home() {
  return (
    <main className="flex text-white flex-col  bg-[#050415] w-full h-full min-h-screen gap-8 ">
      {/* background */}
      <Image
        src="/images/hero_bg.png"
        alt="12"
        width={1000}
        height={1000}
        className="absolute object-cover w-full h-full -z-1"
      />
      <HomeNav />
      <main className="z-10 px-40 flex flex-col ">
        <HeroSection />
        {/* pre moulded courses */}
        <section className="h-screen flex items-start place-content-start ">
          <div className="flex gap-10 flex-col items-start place-content-start">
            <h4 className="text-4xl leading-normal text-left">
              Start crafting you ideas with <br /> brillian minds and talents
            </h4>
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
        <section className="h-screen  w-full  flex flex-row">
          {/* left  */}
          <div className=" flex flex-col gap-4  w-1/2">
            <div className=" flex flex-col gap-4">
              <h6 className="bg-green-500/20 border border-green-400 px-4 py-1 rounded-full w-fit text-green-400
               ">
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
        className=" px-4 py-2 border border-white cursor-pointer rounded-2xl h-fit"
      >
        {item}
      </Link>
    </li>
  );
};
