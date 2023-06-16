import React from "react";

interface IndividualDate {
  date: number;
  day: string;
  isTodayDate: boolean;
}

const IndividualDate = (props: IndividualDate) => {
  return (
    <div>
      <div
        className={`flex flex-col rounded-sm p-2 cursor-pointer ${
          props.isTodayDate
            ? "hover:ring-1 hover:ring-blue-500 hover:bg-white dark:hover:bg-black "
            : ""
        }`}
      >
        <h1 className="font-bold mb-4">{props.date}</h1>
        <p className="text-gray-500 text-xs">{props.day}</p>
      </div>
    </div>
  );
};

export default IndividualDate;
