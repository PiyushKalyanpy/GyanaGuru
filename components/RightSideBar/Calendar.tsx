import React from 'react';
import IndividualDate from './IndividualDate';

type Props = {};
// hover:ring-1 hover:ring-blue-500 hover:bg-white cursor-pointer
const Calendar = (props: Props) => {
  return (
    <div className="mb-6">
      <h1 className="font-bold mb-2">Calendar</h1>
      <div className="dark:bg-zinc-800 w-full bg-[#F0F4F8] rounded-lg px-4 py-2">
        <div className="flex flex-row justify-around gap-2">
          <IndividualDate date={12} day="M" isTodayDate={false} />
          <IndividualDate date={13} day="T" isTodayDate={false} />
          <IndividualDate date={14} day="W" isTodayDate={false} />
          <IndividualDate date={15} day="T" isTodayDate={true} />
          <IndividualDate date={16} day="F" isTodayDate={false} />
          <IndividualDate date={17} day="S" isTodayDate={false} />
          <IndividualDate date={18} day="S" isTodayDate={false} />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
