import { HomeSidebar } from "../Components/components";
import { RightSideBar } from "../Components/components";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 w-full h-screen bg-white">
      <div className="col-span-1">
        <HomeSidebar pageNumber={1} />
      </div>
      <div className="col-start-4 col-end-12">
        <RightSideBar />
       </div>
      <div className="flex col-span-7 w-full h-full ">
        {/* button to contribute to new dashboard design */}
        <button
          className="flex m-auto shadow-xl shadow-violet-200  text-white bg-violet-500  rounded-full p-4 hover:bg-violet-600"
          onClick={() => {
            window.open(
              "https://github.com/PiyushKalyanpy/GyanaGuru/issues/48",
              "_blank"
            );
          }}
        >
          🤝 Contribute to new dashboard design
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

