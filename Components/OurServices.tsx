import Image from "next/image";
import CourseData from "../data/course_categories.json";
import { useEffect } from "react";
const OurServices = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".transform");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            "translate-y-0",
            "opacity-100",
            "translate-x-0"
          );
        }
      });
    });

    elements.forEach((element) => {
      observer.observe(element);
    });
  }, []);

  return (
    <div id="ourservices" className="relative  px-20">
      <Image
        className="absolute -top-20 -z-20 right-0 w-full"
        src="/images/strings.svg"
        alt="Picture of the author"
        width={900}
        height={500}
      />

      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-4xl font-semibold font-archivo text-slate-900 p-4 my-20">{`Our Services`}</h1>

        <div className="grid grid-cols-6  gap-8 w-full items-center">
          <div className="col-span-2 flex items-center">
            <Image
              className="m-auto -z-20 select-none"
              src="/images/ourservices.png"
              alt="Picture of the author"
              width={400}
              height={400}
            />
          </div>
          <div className="col-span-4 flex flex-col p-10 space-y-8 mx-auto z-10">
            <div>
              <h2 className="text-3xl  font-archivo text-slate-900 ">{`Sucess doesn't have to be hard`}</h2>
              <h2 className="text-3xl font-bold font-archivo text-slate-900 ">{`We make it easy.`}</h2>
            </div>
            <h2 className="text-xl font-archivo text-zinc-700 ">{`Get all types of courses`}</h2>
            <div className="flex flex-wrap w-full gap-4 ">
              {CourseData.slice(0, 6).map((course, index) => {
                return (
                  <CourseCard key={index} courseName={course.categoryName} />
                );
              })}
              <CourseCard courseName="many more..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CourseCard = ({ courseName }: any) => {
  return (
    <div className="">
      <h4 className="font-inter">{courseName}</h4>
    </div>
  );
};

export default OurServices;
