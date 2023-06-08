import ContributionButton from "@/Components/ContributionButton";
import { HomeSidebar } from "../Components/components";
import { RightSideBar } from "../Components/components";
import NumberInfo from "@/Components/Dashboard/NumberInfo";

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
  return (
    <div className="grid w-screen h-screen grid-cols-12 overflow-hidden bg-white">
      <div className="col-span-2 shadow-2xl bg-white">
        <HomeSidebar pageNumber={1} />
      </div>

      <div className="flex flex-col h-full gap-8 col-span-7 bg-zinc-100 p-6 ">
        <div className="grid grid-cols-3 gap-6 w-full h-1/4">
          <NumberInfo title="Total courses enrolled" number={7} icon="school" />
          <NumberInfo title="Total time spent" number={42} icon="access_time" />
          <NumberInfo title="Performance in %" number={94} icon="trending_up" />
        </div>
        <div className=" flex  space-x-8 w-full h-3/4">
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
    <div className="flex flex-col w-3/4 h-full gap-8 bg-white rounded-xl p-8 shadow-2xl shadow-zinc-200">
      <div className="flex  justify-between w-full h-fit items-center">
        <p className="font-inter text-xl text-black ">{title}</p>
        <button className="flex  space-x-4 items-center border-2 rounded-xl border-black p-2  ">
          <p className="font-inter text-md text-black ">Full stats</p>
          {/* icon */}
          <span className="material-icons-outlined ">arrow_forward</span>
        </button>
      </div>
      <div>
        <div className="flex flex-row  items-end space-x-3">
          <h4 className="font-bold text-6xl ">122</h4>
          <h6 className="font-semibold text-2xl text-gray-400 ">mins</h6>
        </div>
        <p className="text-lg text-gray-600">Avg. per day</p>
      </div>
      <div className="flex justify-between items-end w-full h-full p-4">
        {/* div showing the values in sidebar */}
        <div className="flex flex-col justify-center h-full">
          {
            sortedData.map((item) => (
              <div
                key={item.label}
                className="flex justify-end flex-col h-full w-fit items-center gap-4"
              >
                <div className="w-fit">
                  <p className="font-inter text-sm text-zinc-500 ">{item.value}</p>
                </div>
              </div>
            ))
          }

        </div>

        {data.map((item) => (
          <div
            key={item.label}
            className="flex justify-end flex-col h-full w-fit items-center gap-4"
          >
            <div
              className="flex  bg-gradient-to-bl from-teal-500 to-cyan-600 w-4 rounded-xl "
              style={{ height: `${(item.value / maxDataValue) * 100}%` }}
            />
            <div className="w-fit">
              <p className="font-inter text-sm text-zinc-500 ">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
