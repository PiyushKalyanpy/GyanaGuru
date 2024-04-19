"use client";
import Image from "next/image";
import HomeNav from "@/components/navbar/HomeNav";
import { useState } from "react";
import TagItem from "@/components/landing/sub_components/TagItem";

const Topic = ({ course = courses }: { course: any }) => {
  const commaFormated = (number: number) => {
    return Intl.NumberFormat("en-IN").format(number);
  };
  const activeItem = "about";
  const [active, setActive] = useState(activeItem);

  const updateActive = (item: string) => {
    setActive(item);
  };
  return (
    <main className="w-screen h-screen overflow-x-hidden overflow-y-scroll ">
      <HomeNav />
      <section className="flex h-screen px-40 overflow-x-hidden overflow-y-scroll">
        {/* main information */}
        <section className="w-3/4 ">
          {/* main header Info */}
          <div className="flex flex-col w-full gap-4 py-20 h-3/4 ">
            <Image
              src={course.logo}
              alt="course"
              width={300}
              height={300}
              className="object-contain w-40 h-16 rounded"
            />
            <h1 className="text-3xl font-semibold ">{course.title}</h1>
            <h3 className="">{course.headline}</h3>
            {/* language, lessons, time, caption */}
            <div className="flex flex-row gap-4 text-gray-700 ">
              <div className="flex items-center gap-2 ">
                <span className=" material-icons-outlined">language</span>
                <span>{course.language}</span>
              </div>
              <div className="flex items-center gap-2 ">
                <span className=" material-icons-outlined">play_lesson</span>
                <span>{course.total_modules} modules</span>
              </div>
              <div className="flex items-center gap-2 ">
                <span className=" material-icons-outlined">subtitles</span>
                <span>{course.caption}</span>
              </div>
            </div>

            {/* ratings */}
            <div className="flex items-center gap-2 ">
              <span className="font-semibold">
                {course.ratings.average_rating}
              </span>
              <span className="text-yellow-500 material-icons">star</span>
              <span>&#40;{course.ratings.rating_count} ratings&#41; </span>
            </div>
            <div className="flex flex-col gap-2 my-4">
              {/* instructors */}
              <div className="flex gap-2 ">
                <Image
                  src={course.instructor.image}
                  alt="course"
                  width={300}
                  height={300}
                  className="object-contain w-12 h-12 rounded-full"
                />
                <div className="flex flex-col ">
                  <h3 className="text-xl ">{course.instructor.name}</h3>
                  <h4 className="text-sm ">{course.instructor.designation}</h4>
                </div>
              </div>
              {/* Total enrolled */}
              <div>{commaFormated(course.total_enrolled)} already enrolled</div>
            </div>
          </div>
          {/* other information */}
          <div className="w-full pb-20">
            {/* nav header */}
            <div className="flex flex-row border-b">
              <ul className="flex gap-4 ">
                {courseVideoNavItems.map((courseNavItem) => {
                  return (
                    <CourseViewNavItem
                      {...courseNavItem}
                      activeItem={active}
                      onClick={updateActive}
                    />
                  );
                })}
              </ul>
            </div>
            {/* information  */}
            <div className="flex w-full pr-10 overflow-hidden">
              <div className="flex flex-col gap-12">
                {/* description */}
                <div className="flex flex-col gap-4 mt-4">
                  <h3 className="text-xl font-bold">Description </h3>

                  <p className="">{course.description}</p>
                </div>
                {/* what you will learn */}
                <div className="flex flex-col gap-4 p-4 border rounded-2xl">
                  <h3 className="text-xl font-bold">What you'll learn </h3>
                  <ul className="grid w-full grid-cols-2">
                    {learings.map((learings) => {
                      return (
                        <li className="flex items-start gap-2 p-2 ">
                          <span className="material-icons-outlined">check</span>
                          <span>{learings}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* skills  */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold">Skills </h3>
                  <ul className="flex flex-wrap gap-2">
                    {course.skills.map((skill: string) => (
                      <TagItem item={skill} />
                    ))}
                  </ul>
                </div>
                {/* course content  */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold">Course Content </h3>
                  <ul className="flex flex-wrap gap-2 p-4 overflow-hidden border rounded-xl ">
                    {courseContent.map((module) => (
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
                    {course.skills.map((skill: string) => (
                      <Testimonials item={skill} />
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
              src={course.thumbnail}
              alt="course"
              width={300}
              height={300}
              className="object-cover w-96 aspect-video rounded-2xl"
            />
            <div className="flex flex-col gap-2 ">
              <h5 className="mt-10 text-2xl font-bold text-green-700">
                {course.is_paid ? course.price : "Free"}
              </h5>
              <button className="px-4 py-3 text-white bg-black rounded-2xl">
                Enroll for {course.price}
              </button>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
};

const Testimonials = (item: { item: string }) => {
  return (
    <div className="w-full p-4 border rounded-2xl ">
      <p>
        I think this is one of the best and most explanatory courses I have ever
        taken. I am not even halfway through and still learned tons of new
        things. Angela is a beautiful teacher, and I hope he will do more
        uploads like this one.
      </p>
      <div className="flex gap-2 ">
        <Image
          src=""
          alt="course"
          width={300}
          height={300}
          className="object-contain w-12 h-12 bg-gray-100 rounded-full"
        />
        <div className="flex flex-col ">
          <h3 className="">John</h3>
          <h4 className="">UI UX Designer</h4>
        </div>
      </div>
    </div>
  );
};

const courseContent = [
  {
    module_name:
      "Day 1 - Beginner - Working with Variables in Python to Manage Data",
    content_length: 332,
    module_index: 1,
    chapters: [
      {
        chapter_name: "Introduction to Variables",
        content_length: "4:04",
        preview_link: "",
        chapter_index: 1,
      },
      {
        chapter_name: "Understanding Data Types",
        content_length: "4:04",
        preview_link: "",
        chapter_index: 2,
      },
      {
        chapter_name: "Working with Strings",
        content_length: "4:04",
        preview_link: "",
        chapter_index: 3,
      },
    ],
  },
  {
    module_name:
      "Day 2 - Intermediate - Control Structures and Functions in Python",
    content_length: 418,
    module_index: 2,
    chapters: [
      {
        chapter_name: "Conditional Statements",
        content_length: "5:30",
        preview_link: "",
        chapter_index: 1,
      },
      {
        chapter_name: "Loops: For, While, and Nested Loops",
        content_length: "6:20",
        preview_link: "",
        chapter_index: 2,
      },
      {
        chapter_name: "Functions and their Importance",
        content_length: "7:15",
        preview_link: "",
        chapter_index: 3,
      },
    ],
  },
  {
    module_name:
      "Day 3 - Advanced - File Handling and Error Handling in Python",
    content_length: 524,
    module_index: 3,
    chapters: [
      {
        chapter_name: "Reading and Writing Files",
        content_length: "8:45",
        preview_link: "",
        chapter_index: 1,
      },
      {
        chapter_name: "Working with CSV and JSON Files",
        content_length: "9:12",
        preview_link: "",
        chapter_index: 2,
      },
      {
        chapter_name: "Handling Errors Gracefully",
        content_length: "7:58",
        preview_link: "",
        chapter_index: 3,
      },
    ],
  },
  // Additional modules and chapters can be added here
];

const courseVideoNavItems = [
  {
    itemName: "About",
    id: "about",
  },
  {
    itemName: "Skills",
    id: "skills",
  },
  {
    itemName: "Course Content",
    id: "course_content",
  },
  {
    itemName: "Ratings and Reviews",
    id: "ratings_and_reviews",
  },
  {
    itemName: "Testimonials",
    id: "testimonials",
  },
];

const CourseViewNavItem = ({
  itemName,
  activeItem,
  id,
  onClick,
}: {
  itemName: string;
  activeItem: string;
  id: string;
  onClick: (id: string) => void;
}) => {
  return (
    <li
      onClick={() => onClick(id)}
      className={`${
        activeItem == id
          ? "border-b-2 border-indigo-600 text-indigo-700 bg-gradient-to-t from-indigo-50 to-transparent"
          : ""
      } p-4 cursor-pointer transition duration-200`}
    >
      {itemName}
    </li>
  );
};

const courses = {
  id: "JN(#*UR*(j3j9H8",
  title: "Advanced Python Programming",
  headline:
    "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps  ",
  logo: "/images/bento_education.jpg",
  thumbnail:
    "https://images.unsplash.com/photo-1508161250369-a7ecbdfb67fe?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description:
    "This course will take your Python skills to the next level. You will learn advanced concepts like functional programming, decorators, generators, and more. By the end of this course, you will be able to write clean, efficient, and maintainable Python code.",
  is_paid: false,
  total_modules: 8,
  url: " /course/advanced-python-programming/",
  price: "₹3,499",
  price_detail: {
    amount: 3499.0,
    currency: "INR",
    price_string: "₹3,499",
    currency_symbol: "₹",
  },
  instructor: {
    name: "John Doe",
    designation: "Instructor",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    initials: "JD",
  },
  language: ["English"],
  caption: ["English (IN)"],
  last_updated: "2023-04-17T13:28:10-07:00",
  total_enrolled: 23005423,
  skills: [
    "Functional Programming",
    "Decorators",
    "Generators",
    "Metaprogramming",
    "Concurrency",
    "Data Structures",
    "Web Development",
    "Web Scraping",
  ],
  requirements: [
    "Basic Python programming knowledge",
    "Familiarity with object-oriented programming concepts",
    "Interest in learning advanced Python concepts",
  ],
  categories: ["Python", "Programming"],
  ratings: {
    average_rating: 4.5,
    rating_count: 100,
  },
};

const learings = [
  "Gain skills required to succeed in an entry-level IT job",
  "Learn to perform day-to-day IT support tasks including computer assembly, wireless networking, installing programs, and customer service",
  "Learn how to provide end-to-end customer support, ranging from identifying problems to troubleshooting and debugging ",
  "Learn to use systems including Linux, Domain Name Systems, Command-Line Interface, and Binary Code",
];

export default Topic;
