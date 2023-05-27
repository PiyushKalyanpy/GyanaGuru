"use client";
import type { RootState } from "@/GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import {
  LandingNav,
  HeroSection,
  LandingThreeGrid,
  OurServices,
  WhyChooseUs,
  LandingThreeSecond,
  LandingContact,
  LandingFooter,
} from "../Components/components";
import { useEffect, useState } from "react";
import Head from "next/head";
import { setCookie } from "cookies-next";
import { useContext } from "react";
import Image from "next/image";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const router = useRouter();
  const [showNav, setShowNav] = useState(true);

  // useEffect(() => {
  //   let prevScrollpos = window.pageYOffset;

  //   // const handleScroll = () => {
  //   //   const currentScrollPos = window.pageYOffset;
  //   //   setShowNav(prevScrollpos > currentScrollPos);
  //   //   prevScrollpos = currentScrollPos;
  //   // };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    setCookie("login", false);
  });

  const handleClick = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <Head>
        <title>GyanaGuru</title>

        <meta
          name="description"
          content="The Gyana Guru website is an online learning platform that provides access to high-quality educational resources in a wide range of subjects. It offers a vast library of courses, interactive quizzes and exercises, gamification elements, and social features to encourage active participation and collaboration among learners."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
        <Head>
          <script src="https://www.youtube.com/iframe_api" async></script>
        </Head>
      </Head>

      <main className="hidden lg:block h-fit w-screen overflow-hidden gap-y-10 dark:bg-neutral-950">


        <div className="fixed right-0 top-40 z-10">
        <ConnectWithMe/>

        </div>

        <div className="fixed z-40 w-full transition ">
          <LandingNav />
          {showNav && <MessageComponnent />}
        </div>
        <HeroSection />
        <LandingThreeGrid />
        <OurServices />
        <WhyChooseUs />
        <div></div>
        <LandingThreeSecond />
        <LandingContact />
        <LandingFooter />
      </main>
      <div className="text-2xl lg:hidden">
        Not For MOBILE SCREENS , Please Check on Laptop or Desktop
      </div>
    </>
  );
}
const MessageComponnent = () => {
  return (
    <div className="left-0 z-40 w-full p-4 transition bg-gray-100 dark:bg-neutral-900/70 backdrop-blur-2xl">
      <div className="overflow-hidden marquee">
        <span className="flex flex-row space-x-2 text-xl text-black font-archivo dark:text-zinc-100">
          <a
            className="text-blue-600 dark:text-blue-400 "
            href="https://github.com/PiyushKalyanpy/GyanaGuru"
            target="_blank"
          >
            Join us &nbsp;
          </a>
          in developing our open source project on GitHub by reporting issues,
          submitting bug fixes, or adding new features to the ongoing
          development.
        </span>
      </div>
    </div>
  );
};

const ConnectWithMe = () => {
  return (
    <div className="flex items-center h-fit bg-gray-200/40 backdrop-blur-sm border-2 border-zinc-100 w-fit  px-2 py-2  rounded-tl-full rounded-bl-full pr-10 translate-x-40 hover:translate-x-6  transition">
      {/* linkedin connect button with icon  */}
      <div className="flex flex-row m-auto items-center space-x-4">
      <Image className="rounded-full" alt="LinkedIn" width="60" height="60" src="https://avatars.githubusercontent.com/u/79275157?v=4"/>
        <div onClick={() => 
    // go to linked in page
    window.location.href="https://www.linkedin.com/in/piyush-kalyan/"
    } className="cursor-pointer" >
        <span className="flex flex-row w-fit gap-2 bg-[#2885e0] p-2 text-white font-medium rounded-full">
          <div>
          <LinkedInIcon/>
          </div>
          <a  href="https://www.linkedin.com/in/piyush-kalyan/">Linked In</a>
        </span>
   
        </div>

      </div>
    </div>
  )
}

const LinkedInIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match " width="24" height="24" focusable="false">
  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
</svg>
  )
}