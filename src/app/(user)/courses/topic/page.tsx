"use client";
import Link from "next/link";
import Image from "next/image";
import HomeNav from "@/components/navbar/HomeNav";
import { useEffect, useState } from "react";
import { GlobeIcon, VideoIcon } from "@radix-ui/react-icons";
import TagItem from "@/components/landing/sub_components/TagItem";
import {
  courses,
  courseVideoNavItems,
  courseContent,
  learings,
} from "@/database/data/data";
import Testimonials from "@/components/generic/Testimonials";
import CourseViewNavItem from "@/components/courses/CourseViewNavItem";
import { useSearchParams } from "next/navigation";
import axios from "axios";

const Topic = () => {
  const searchParams = useSearchParams();
  const courseId = searchParams.get("id");
  const [course, setCourse] = useState({});
  const commaFormated = (number: number) => {
    return Intl.NumberFormat().format(number);
  };
  const activeItem = "about";
  const [active, setActive] = useState(activeItem);
  const updateActive = (item: string) => {
    setActive(item);
  };
  useEffect(() => {
    const getCourse = () => {
      console.log(course);
      if (course) {
        console.log("fetching courses ⬇️");
        const data = axios.get(`/api/course/${courseId}`);
        data.then((res) => {
          console.log(res);
          setCourse(res.data);
        });
      }
    };
    getCourse();
  }, []);

  const {
    title,
    headline,
    description,
    logo,
    thumbnail,
    is_paid,
    price,
    price_detail,
    language,
    instructor,
    total_enrolled,
    skills,
    ratings,
    total_modules,
    total_time,
    url,
  } = (course && course!.data) || {};

  return (
    <main className="w-screen h-screen overflow-x-hidden overflow-y-scroll ">
      <HomeNav />
      <section className="flex h-screen px-40 overflow-x-hidden overflow-y-scroll">
        {/* main information */}
        <section className="w-3/4 ">
          {/* main header Info */}
          <div className="flex flex-col w-full gap-4 py-20 h-3/4 ">
            <Image
              src={thumbnail}
              alt="course"
              width={300}
              height={300}
              className="object-contain w-40 h-16 rounded"
            />
            <h1 className="text-3xl font-semibold ">{title}</h1>
            <h3 className="">{headline}</h3>

            {/* language, lessons, time, caption */}
            <div className="flex flex-row gap-4 text-gray-700 ">
              <div className="flex items-center gap-2 ">
                <GlobeIcon /> <span>English</span>
              </div>
              <div className="flex items-center gap-2 ">
                <VideoIcon />
                <span>{total_modules} modules</span>
              </div>
            </div>

            {/* ratings */}
            <div className="flex items-center gap-2 ">
              {/* <span className="font-semibold">{ratings.average_rating}</span> */}
              <span className="text-yellow-500 material-icons">star</span>
              <span>&#40;{ratings && ratings.rating_count} ratings&#41; </span>
            </div>
            <div className="flex flex-col gap-2 my-4">
              {/* instructors */}
              <div className="flex gap-2 ">
                <Image
                  src={instructor && instructor.image}
                  alt="course"
                  width={300}
                  height={300}
                  className="object-contain w-12 h-12 rounded-full"
                />
                <div className="flex flex-col ">
                  <h3 className="text-xl ">{instructor && instructor.name}</h3>
                  <h4 className="text-sm ">
                    {instructor && instructor.designation}
                  </h4>
                </div>
              </div>
              {/* Total enrolled */}
              <div>{commaFormated(total_enrolled)} already enrolled</div>
            </div>
          </div>
          {/* other information */}
          <div className="w-full pb-20">
            {/* nav header */}
            <div className="flex flex-row border-b">
              <ul className="flex gap-4 ">
                {/* {courseVideoNavItems.map((courseNavItem) => {
                  return (
                    <CourseViewNavItem
                      key={courseNavItem.id}
                      {...courseNavItem}
                      activeItem={active}
                      onClick={updateActive}
                    />
                  );
                })} */}
              </ul>
            </div>
            {/* information  */}
            <div className="flex w-full pr-10 overflow-hidden">
              <div className="flex flex-col gap-12">
                {/* description */}
                <div className="flex flex-col gap-4 mt-4">
                  <h3 className="text-xl font-bold">Description </h3>
                  <p className="">{description}</p>
                </div>
                {/* what you will learn */}
                {/* <div className="flex flex-col gap-4 p-4 border rounded-2xl">
                  <h3 className="text-xl font-bold">What you'll learn </h3>
                  <ul className="grid w-full grid-cols-2">
                    {learings.map((learings) => {
                      return (
                        <li
                          key={learings}
                          className="flex items-start gap-2 p-2 "
                        >
                          <span className="material-icons-outlined">check</span>
                          <span>{learings}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div> */}

                {/* skills  */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold">Skills </h3>
                  <ul className="flex flex-wrap gap-2">
                    {skills &&
                      skills.map((skill: string) => (
                        <TagItem key={skill} item={skill} />
                      ))}
                  </ul>
                </div>
                {/* course content  */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold">Course Content </h3>
                  <ul className="flex flex-wrap gap-2 p-4 overflow-hidden border rounded-xl ">
                    {courseContent &&
                      courseContent.map((module) => (
                        <div key={module.module_index} className="w-full">
                          <div className="flex items-center justify-between p-2 underline">
                            <h2 className="text-xl font-bold">
                              {module.module_name}
                            </h2>
                            <p className="text-sm ">3 minutes</p>
                          </div>
                          <div className="w-full p-4">
                            {module.chapters.map((chapter) => (
                              <div
                                key={chapter.chapter_index}
                                className="flex justify-between w-full mb-2"
                              >
                                <p className="">{chapter.chapter_name}</p>
                                <span>{chapter.content_length}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                  </ul>
                </div>
                {/* testimonial  */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold">Testimonials </h3>
                  <ul className="flex grid flex-row grid-cols-3 gap-4 ">
                    {skills &&
                      skills.map((skill: string) => (
                        <Testimonials key={skill} item={skill} />
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* sidebar */}
        <aside className="relative flex-col gap-4 overflow-hidden bg-gray-100top-10 rounded-2xl h-fit">
          <div className="fixed p-4 border border-gray-200 rounded-3xl">
            <Image
              src={thumbnail}
              alt="course"
              width={300}
              height={300}
              className="object-cover w-96 aspect-video rounded-2xl"
            />
            <div className="flex flex-col gap-2 ">
              <h5 className="mt-10 text-2xl font-bold text-green-700">
                {is_paid ? price : "Free"}
              </h5>
              <Link
                href="/learn"
                className="px-4 py-3 text-white bg-black rounded-2xl"
              >
                Enroll for {price}
              </Link>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default Topic;
