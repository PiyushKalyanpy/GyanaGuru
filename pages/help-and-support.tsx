import { HomeSidebar } from "../components/components";

const Help = () => {
  return (
    <div className="grid w-full h-screen grid-cols-12 bg-white">
      <div className="col-span-2">
        <HomeSidebar pageNumber={5} />
      </div>
      Help and support
    </div>
  );
};

export default Help;
