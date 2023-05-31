import { HomeSidebar } from "../Components/components";
import { RightSideBar } from "../Components/components";

const Dashboard = () => {
  return (
    <div className="grid w-screen h-screen grid-cols-12 overflow-hidden bg-white">
      <div className="col-span-2">
        <HomeSidebar pageNumber={1} />
      </div>

      <div className="flex h-full col-span-7 bg-slate-100 ">
        <button
          className="flex p-4 m-auto text-white rounded-full shadow-xl shadow-violet-200 bg-violet-500 hover:bg-violet-600"
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
      <div className="col-span-3">
        <RightSideBar />
      </div>
    </div>
  );
};

export default Dashboard;
