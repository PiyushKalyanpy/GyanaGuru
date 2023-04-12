"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import type { RootState } from "@/GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../GlobalRedux/Features/Counter/counterSlice";
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
import Head from 'next/head';
import Script from 'next/script';

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const router = useRouter();
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowNav(prevScrollpos > currentScrollPos);
      prevScrollpos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(showNav);

  const handleClick = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <Head>
        <title>GyanaGuru</title>

        <meta name="description" content="The Gyana Guru website is an online learning platform that provides access to high-quality educational resources in a wide range of subjects. It offers a vast library of courses, interactive quizzes and exercises, gamification elements, and social features to encourage active participation and collaboration among learners." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
        <Head>
        <script src="https://www.youtube.com/iframe_api" async></script>
      </Head>

      </Head>

      <main className="hidden lg:block h-fit gap-y-10 ">
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
    <div className="left-0 z-40 w-full p-4 transition bg-gray-100 ">
      <div className="overflow-hidden marquee">
        <span className="flex flex-row space-x-2 text-xl text-black font-archivo">
          <a className="text-blue-600 " href="https://github.com/PiyushKalyanpy/GyanaGuru" target="_blank">Join us &nbsp;</a>
          in developing our open source project on GitHub by reporting issues,
          submitting bug fixes, or adding new features to the ongoing
          development.
        </span>
      </div>
    </div>
  );
};
