import { HomeSidebar } from "../Components/components";


const Settings = () => {
  return (
    <div className="grid grid-cols-12 w-full h-screen bg-white">
      <div className="col-span-2">
        <HomeSidebar pageNumber={4} />
      </div>
      <div className="bg-zinc-100 col-span-10" >
Settings
</div>
    </div>
  );
};

export default Settings;
