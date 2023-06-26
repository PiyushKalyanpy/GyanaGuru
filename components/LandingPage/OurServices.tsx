import Image from 'next/image';
import CourseData from '../../data/course_categories.json';
import React, { useEffect } from 'react';

const OurServices = () => {
  const [showallcourses, setCoursesToShow] = React.useState(false);
  const courselimit = showallcourses ? CourseData.length : 6;
  const coursestoshow = CourseData.slice(0, courselimit);

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
        }
      });
    });

    elements.forEach((element) => {
      observer.observe(element);
    });
  }, []);

  return (
    <div id="ourservices" className="relative  px-20 dark:bg-neutral-950">
      <Image
        className="absolute -top-20  right-0 w-full"
        src="/images/strings.svg"
        alt="Picture of the author"
        width={900}
        height={500}
      />

      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-4xl font-semibold font-archivo text-slate-900 dark:text-zinc-50 p-4 my-20">{`Our Services`}</h1>

        <div className="grid grid-cols-6  gap-8 w-full items-center">
          <div className="col-span-2 flex items-center">
            <Image
              className="m-auto select-none"
              src="/images/ourservices.png"
              alt="Picture of the author"
              width={400}
              height={400}
            />
          </div>
          <div className="col-span-4 flex flex-col p-10 space-y-8 mx-auto z-10">
            <div>
              <h2 className="text-3xl  font-archivo text-slate-900 dark:text-zinc-50">{`Success doesn't have to be hard`}</h2>
              <h2 className="text-3xl font-bold font-archivo text-slate-900 dark:text-zinc-50">{`We make it easy.`}</h2>
            </div>
            <h2 className="text-xl font-archivo text-zinc-700 dark:text-zinc-100">{`Get all types of courses`}</h2>
            <div className="flex flex-wrap w-full gap-4 ">
              {coursestoshow.map((course, index) => {
                return (
                  <CourseCard key={index} courseName={course.categoryName} />
                );
              })}
              <Show
                onclick={() => {
                  setCoursesToShow(!showallcourses);
                }}
                courseName={showallcourses ? 'Show less <' : 'Show more >'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CourseCard = ({ courseName }: any) => {
  return (
    <button className="flex border-2 hover:border-black hover:scale-[1.04] transition border-zinc-200 rounded-full px-4 py-2">
      <h4 className="font-inter">{courseName}</h4>
    </button>
  );
};

const Show = ({ courseName, onclick }: any) => {
  return (
    <div
      onClick={onclick}
      className="font-medium bg-blue-200 border-zinc-200 rounded-full cursor-pointer px-4 py-2 dark:bg-blue-600"
    >
      <h4 className="font-inter">{courseName}</h4>
    </div>
  );
};

export default OurServices;
