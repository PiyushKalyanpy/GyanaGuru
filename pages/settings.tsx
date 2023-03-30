import { HomeSidebar } from "../Components/components";


const Settings = () => {
  return (
    <div className="grid grid-cols-12 w-full h-screen bg-white">
      <div className="col-span-2  border-r border-zinc-200">
        <HomeSidebar pageNumber={3} />
      </div>
    </div>
  );
};

export default Settings;
