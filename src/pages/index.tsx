import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import {
  LandingNav,
  HeroSection,
  LandingThreeGrid,
  OurServices,
  WhyChooseUs,
  LandingThreeSecond,
  LandingContact,
  LandingFooter,
} from '@/components/components';
export default function Home() {
  const [showNav, setShowNav] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();
  useEffect(() => {
    document.cookie = 'reachedDashboard=false';
    let prevScrollPos = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowNav(prevScrollPos > currentScrollPos);
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleClick = () => {
    setShowNav(!showNav);
  };
  return (
    <>
      <Head>
        <title>GyanaGuru - Empower Yourself Through Knowledge</title>
        <meta name="title" content="GyanaGuru - Empower Yourself Through Knowledge" />
        <meta
          name="description"
          content="The Gyana Guru website is an online learning platform that provides access to high-quality educational resources in a wide range of subjects. It offers a vast library of courses, interactive quizzes and exercises, gamification elements, and social features to encourage active participation and collaboration among learners."
        />
        <meta name="language" content="en" />
        <meta name="keywords" content="GyanaGuru, online learning platform, educational resources, wide range of subjects, high-quality courses, interactive quizzes, exercises, gamification elements, social features, active participation, collaboration, learners" />
        <meta name="author" content="Piyush Kalyan" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
        {/* Open Graph meta tags for website preview */}
        <meta property="og:title" content="GyanaGuru - Empower Yourself Through Knowledge" />
        <meta property="og:description" content="Join GyanaGuru and empower yourself through knowledge. Explore a wide range of high-quality educational resources, interactive quizzes, and social features for active learning and collaboration." />
        <meta property="og:image" content="https://gyanaguru.vercel.app/icons/logo128.svg" /> {/* Replace with the actual preview image URL */}
        <meta property="og:url" content="https://gyanaguru.vercel.app" /> {/* Replace with the actual URL of the page */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="GyanaGuru" />
        {/* Twitter meta tags for website preview */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="GyanaGuru - Empower Yourself Through Knowledge" />
        <meta property="twitter:description" content="Join GyanaGuru and empower yourself through knowledge. Explore a wide range of high-quality educational resources, interactive quizzes, and social features for active learning and collaboration." />
        <meta property="twitter:image" content="https://gyanaguru.vercel.app/icons/logo128.svg" /> {/* Replace with the actual preview image URL */}
      </Head>
      {showPopup && (
        <MessagePopup message='already given' setShowPopup={setShowPopup} />
      )}
      <div className='cursor'></div>
      <main className='w-screen overflow-hidden lg:block h-fit gap-y-10 dark:bg-neutral-950'>
        <div className='hidden md:block fixed right-0 z-10 top-40'>
          <ConnectWithMe />
        </div>
        <div className='fixed z-40 w-full transition'>
          <LandingNav />
          {showNav && <MessageComponent />}
        </div>
        <HeroSection />
        {/* <Achivements /> */}
        <LandingThreeGrid />
        <OurServices />
        <WhyChooseUs />
        <LandingThreeSecond />
        <LandingContact />
        <LandingFooter />
      </main>
    </>
  );
}
const MessagePopup = ({ message, setShowPopup } : any) => {
  return (
    <div className='fixed z-50 flex items-center w-full h-screen p-4 bg-black/50 backdrop-blur-sm'>
      <div className='flex flex-col items-center w-full p-8 m-auto space-y-10 bg-white lg:w-1/2 rounded-3xl'>
        <div className='flex flex-col items-center space-y-5'>
          <h1 className='text-2xl font-bold md:text-5xl font-inter dark:text-black'>
            Hey Contributors{' '}
          </h1>
          <h6 className='text-xl text-center lg:text-3xl text-zinc-700'>
            Your contribution matters!
          </h6>
        </div>
        <span className='text-center text-md lg:mx-10 lg:text-xl text-zinc-600'>
          Please <strong>hold off </strong>  on creating new issues or pull requests as we are currently working on the website and will resume normal contributions by 10 July 2023.
        </span>
        <div className='flex flex-col'>
          <button
            onClick={() => setShowPopup(false)}
            className='flex px-4 py-2 text-white bg-black rounded-full lg:text-xl'
          >
            Ok 👍
          </button>
        </div>
      </div>
    </div>
  );
};
const MessageComponent = () => {
  const marqueeRef = useRef(null);
  return (
    <div className='left-0 z-40 w-full py-4 transition bg-gray-100 dark:bg-neutral-900/70 backdrop-blur-2xl'>
      <div className='flex w-fit marquee'>
        <span className='flex w-fit flex-row space-x-2 lg:text-xl text-black font-archivo dark:text-zinc-100'>
          <a
            className='text-blue-600 dark:text-blue-400'
            href='https://github.com/PiyushKalyanpy/GyanaGuru'
            target='_blank'
          >
            Join us &nbsp;
          </a>
          in developing our open source project on GitHub by reporting issues, submitting bug fixes, or adding new features to the ongoing development.
        </span>
      </div>
    </div>
  );
};
const ConnectWithMe = () => {
  return (
    <div className='flex items-center px-2 py-2 pr-10 transition translate-x-40 border-2 rounded-tl-full rounded-bl-full h-fit bg-gray-200/40 backdrop-blur-sm border-zinc-100 w-fit hover:translate-x-6'>
      <div className='flex flex-row items-center m-auto space-x-4'>
        <Image
          className='rounded-full'
          alt='LinkedIn'
          width='60'
          height='60'
          src='https://avatars.githubusercontent.com/u/79275157?v=4'
        />
        <div
          onClick={() =>
            (window.location.href =
              'https://www.linkedin.com/in/piyush-kalyan/')
          }
          className='cursor-pointer'
        >
          <span className='flex flex-row w-fit gap-2 bg-[#2885e0] p-2 text-white font-medium rounded-full'>
            <div>
              <LinkedInIcon />
            </div>
            <a href='https://www.linkedin.com/in/piyush-kalyan/'>Linked In</a>
          </span>
        </div>
      </div>
    </div>
  );
};
const LinkedInIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      data-supported-dps='24x24'
      fill='currentColor'
      className='mercado-match '
      width='24'
      height='24'
      focusable='false'
    >
      <path d='M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z'></path>
    </svg>
  );
};
