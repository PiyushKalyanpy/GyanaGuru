// components/FAQ.js

import { useState } from "react";
import { DarkModeToggle } from "../../Components/components";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqData = [
    {
      question: "Question 1",
      answer: "Answer 1",
    },
    {
      question: "Question 2",
      answer: "Answer 2",
    },
    // Add more questions and answers as needed
  ];

  return (
    <div className="w-1/2 mx-auto">
      {/* div - showing attention needed */}
      <div>
        <div className="absolute right-20">
          <DarkModeToggle />
        </div>
        <div className="flex items-center justify-center w-full h-12 my-10 bg-red-100 border border-red-500 rounded-full shadow-xl  shadow-red-100">
          <div className="flex items-center justify-center w-4 h-4 bg-red-500 rounded-full"></div>
          <div className="ml-2 text-xs font-semibold text-red-500 uppercase">
            Attention needed
          </div>
        </div>
        {/* message for contributors  */}
        <div className="my-10 text-center">
          <h1 className="text-3xl font-semibold">Message For Contributors</h1>
          <p className="mt-2 text-gray-600 dark:text-zinc-200">
            You can contribute to the FAQ section by adding questions and
            answers to the faq.json file and by designing the FAQ page which
            will take inputs for questions and answers from the faq.json file. (
            when you make new FAQ design pls make a right sidebar that will show
            the current information written below )
          </p>
        </div>
      </div>

      {/* faq message  */}
      <div className="my-10 text-center">
        <h1 className="text-3xl font-semibold">Frequently Asked Questions</h1>
        <p className="mt-2 text-gray-600 dark:text-zinc-200">
          For now we will show the FAQ for contributors
        </p>

        {/* points lsit */}
        <div className="mt-4">
          <ul className="space-y-6 list-disc list-inside">
            <li>
              Create the faq.json file: Inside the data directory, create a new
              file called faq.json and add the questions and answers (for new
              contributors )
            </li>
            <li>
              The file should include the common problems faced by Contributors
              like firebase key errors or git commands or anything that
              contributors need to know about.
            </li>
            <li>
              Please ensure that your questions and answers are concise, clear,
              and easy to understand for both experienced and new contributors.{" "}
            </li>
            <li className="mt-10 text-gray-400 dark:text-zinc-200">
              Thank you for your cooperation in making our FAQ section
              comprehensive and user-friendly. Your contributions will greatly
              assist both current and future contributors in navigating the
              project smoothly.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
