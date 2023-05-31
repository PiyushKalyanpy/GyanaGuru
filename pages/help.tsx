import { HomeSidebar } from "../Components/components";

const Help = () => {
  return (
    <div className="grid grid-cols-12 w-full h-screen bg-white">
      <div className="col-span-2">
        <HomeSidebar pageNumber={5} />
      </div>
      Help and support
    </div>
  );
};

export default Help;
