// import ContributionButton from "@/components/depricated/Utils/ContributionButton";
import { HomeSidebar, RightSideBar } from '@/components/components';
import NumberInfo from "@/components/depricated/Dashboard/NumberInfo";
import { setCookie } from "cookies-next";
import { useEffect } from "react";

const Dashboard = () => {
  const data = [
    // label as subject name and value as time spent in minutes
    { label: "Computer", value: 360 },
    { label: "Maths", value: 120 },
    { label: "Social", value: 240 },
    { label: "English", value: 180 },
    { label: "Science", value: 60 },
    { label: "Hindi", value: 300 },
  ];
  
  useEffect(() => {
    setCookie("reachedDashboard", true);
  }
  , []);

  return (
    <div className="grid w-screen h-screen grid-cols-12 overflow-hidden bg-zinc-100 dark:bg-zinc-900">
      <div className="col-span-2 bg-white shadow-2xl">
        <HomeSidebar pageNumber={1} />
      </div>

      <div className="flex flex-col h-full col-span-7 gap-8 p-6 ">
        <div className="grid w-full grid-cols-3 gap-6 h-1/4">
          <NumberInfo title="Total courses enrolled" number={7} icon="school" />
          <NumberInfo title="Total time spent" number={42} icon="access_time" />
          <NumberInfo title="Performance in %" number={94} icon="trending_up" />
        </div>
        <div className="flex w-full space-x-8  h-3/4">
          <BarChart data={data} title="Time spent " />
        </div>
      </div>
      <div className="col-span-3 ">
        <RightSideBar />
      </div>
    </div>
  );
};

const BarChart = ({
  data,
  title,
}: {
  data: { label: string; value: number }[];
  title: any;
}) => {
  const maxDataValue = Math.max(...data.map((item) => item.value));
  // array of values in decreasing order
  const sortedData = data.sort((a, b) => b.value - a.value);
  // adding a empty value at last
  sortedData.push({ label: "", value: 0 });

  return (
    <div className="flex flex-col w-3/4 h-full gap-8 p-8 bg-white rounded-xl dark:bg-zinc-800">
      <div className="flex items-center justify-between w-full h-fit">
        <p className="text-xl text-black font-inter dark:text-white ">
          {title}
        </p>
        <button className="flex items-center p-2 space-x-4 border-2 border-white rounded-xl ">
          <p className="text-black font-inter text-md dark:text-white ">
            Full stats
          </p>
          {/* icon */}
          <span className="material-icons-outlined ">arrow_forward</span>
        </button>
      </div>
      <div>
        <div className="flex flex-row items-end space-x-3">
          <h4 className="text-6xl font-bold ">122</h4>
          <h6 className="text-2xl font-semibold text-gray-400 dark:text-gray-300">
            mins
          </h6>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">Avg. per day</p>
      </div>
      <div className="flex items-end justify-between w-full h-full p-4">
        {/* div showing the values in sidebar */}
        <div className="flex flex-col justify-center h-full">
          {sortedData.map((item) => (
            <div
              key={item.label}
              className="flex flex-col h-full gap-4 place-content-start w-fit"
            >
              <div className="flex w-fit ">
                <p className="flex text-sm font-inter text-zinc-500 ">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {data.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-end h-full gap-4 w-fit"
          >
            <div
              className="flex w-4 bg-gradient-to-bl from-teal-500 to-cyan-600 rounded-xl "
              style={{ height: `${(item.value / maxDataValue) * 100}%` }}
            />
            <div className="w-fit">
              <p className="text-sm font-inter text-zinc-500 ">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
