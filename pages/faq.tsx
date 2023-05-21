// components/FAQ.js
import { useState } from 'react'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index:any) => {
    if (activeIndex === index) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
    }
  }

  const faqData = [
    {
      question: 'Question 1',
      answer: 'Answer 1',
    },
    {
      question: 'Question 2',
      answer: 'Answer 2',
    },
    // Add more questions and answers as needed
  ]

  return (
    <div className="max-w-md mx-auto">
        {/* div - showing attention needed */}
       <div>
        <div className=" my-10 rounded-full shadow-xl shadow-red-100 flex items-center justify-center w-full h-12 bg-red-100 border border-red-500">
            <div className="flex items-center justify-center w-4 h-4 bg-red-500 rounded-full"></div>
            <div className="ml-2 text-xs font-semibold text-red-500 uppercase">Attention needed</div>
            </div>
       </div>

       {/* displaying questions */}
      {faqData.map((item, index) => (
        <div
          key={index}
          className="border-b border-gray-200 py-4"
          onClick={() => toggleAccordion(index)}
        >
          <div className="flex items-center justify-between cursor-pointer">
            <h3 className="text-lg font-medium">{item.question}</h3>
            <svg
              className={`w-5 h-5 transition-transform ${
                activeIndex === index ? 'transform rotate-180' : ''
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6.293 8.293a1 1 0 0 1 1.414 0L10 10.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {activeIndex === index && (
            <p className="mt-2 text-gray-600">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  )
}

export default FAQ
