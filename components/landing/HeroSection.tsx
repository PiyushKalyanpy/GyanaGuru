import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const HeroSection = () => {
  const router = useRouter();

  useEffect(() => {
    const elements = document.querySelectorAll('.transform');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            'translate-y-0',
            'opacity-100',
            'translate-x-0'
          );
          entry.target.classList.remove(
            'translate-x-full',
            'opacity-0',
            '-translate-x-full'
          );
        } else {
          entry.target.classList.remove(
            'translate-y-0',
            'opacity-100',
            'translate-x-0'
          );
          entry.target.classList.add(
            'translate-x-full',
            'opacity-0',
            '-translate-x-full'
          );
        }
      });
    });

    elements.forEach((element) => {
      observer.observe(element);
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full mt-40 p-12 px-4 space-y-10 bg-white dark:bg-neutral-950 ">
      <div className="flex flex-col space-y-10 items-center transition duration-500 ease-in-out transform -translate-x-full opacity-0 lg:flex-row lg:items-center lg:space-x-8 lg:justify-between lg:px-20">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold text-black lg:text-6xl font-archivo dark:text-zinc-50 leading-snug space-y-10">
           <h2>
           Empower Yourself Through Knowledge with&nbsp;
            <span className="text-zinc-600 underline">Gyanaguru</span>
           </h2>
          </h1>
          <div className="flex flex-col items-center mt-4 text-center lg:flex-row lg:mt-10 ">
            <h2 className="text-2xl lg:text-2xl text-zinc-600 dark:text-zinc-50">
              Personalized learning for
            </h2>
            <div className="flex items-center space-x-4 mt-2 text-center lg:mt-0">
              <h2 className="text-black font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600 lg:text-8xl font-archivo dark:text-zinc-50">
                Free
              </h2>
            </div>
          </div>
        </div>
        <div
          onClick={() => router.push('/courses')}
          className="relative flex items-center justify-center w-fit p-4 text-white duration-700 ease-out bg-black border-2 border-black rounded-full cursor-pointer h-fit dark:bg-zinc-50 hover:scale-110"
        >
          <h4 className="flex items-center text-xl font-archivo dark:text-zinc-800">
            <span className="hidden lg:block">Explore Courses</span>
            <span className="lg:hidden">Get Started</span>
            <span className="material-icons text-white">north_east</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
