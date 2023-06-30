import React from "react";

// interface IndividualDate {
//   date: number;
//   day: string;
//   isTodayDate: boolean;
// }

const IndividualDate = ({
  date,
  day,
  isTodayDate,
}: {
  date: number;
  day: string;
  isTodayDate: boolean;
}) => {
  return (
    <div>
      <div
        className={`flex flex-col rounded-sm p-2 cursor-pointer ${
          isTodayDate
            ? "hover:ring-1 hover:ring-blue-500 hover:bg-white dark:hover:bg-black"
            : ""
        }`}
        role="contentinfo"
        aria-label={
          isTodayDate
            ? `Select today's date ${date} and ${day}`
            : `Select ${date} and ${day}`
        }
      >
        <h1 role="presentation" className="font-bold mb-4">
          {date}
        </h1>
        <p role="presentation" className="text-gray-500 text-xs">
          {day}
        </p>
      </div>
    </div>
  );
};

export default IndividualDate;
