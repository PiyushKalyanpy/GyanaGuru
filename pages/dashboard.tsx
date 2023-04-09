import { HomeSidebar } from "../Components/components";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 w-full h-screen bg-white">
      <div className="col-span-1">
        <HomeSidebar pageNumber={1} />
      </div>
    </div>
  );
};

export default Dashboard;

// basic template
{/* <div className="grid grid-cols-12 w-full h-screen bg-white">
  <div className="col-span-2  border-r border-zinc-200">
    <HomeSidebar />
  </div>
</div>; */}
