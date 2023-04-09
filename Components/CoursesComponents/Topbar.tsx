import Image from "next/image";

const Topbar = () => {
  const imageUrl = "https://avatars.githubusercontent.com/u/79275157?s=90&v=4";
  return (
    <div className="flex  w-full h-fit  p-4">
      <div className="flex w-full justify-between">
        {/* Search bar  */}
        <SearchBar />

        {/* Notificaton and profile  */}
        <div className=" flex h-full w-fit gap-4">
          <TopBarButtons iconAvailable={true} />
          <TopBarButtons imageAvailable={true} imageUrl={imageUrl} />
        </div>
      </div>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="flex w-1/4 flex-row h-fit items-center p-1 pl-4 pr-1 font-archivo overflow-hidden rounded-full bg-white">
      <input
        type="text"
        placeholder="Search for courses"
        className=" w-full p-2 font-archivo text-xl outline-none border-0 placeholder:font-archivo placeholder:font-light placeholder:text-zinc-400 "
      />
      <span className="material-icons cursor-pointer hover:bg-zinc-100 active:bg-zinc-200 p-3 rounded-full ">
        search
      </span>
    </div>
  );
};

const TopBarButtons = ({
  iconAvailable = false,
  imageAvailable = false,
  imageUrl = null,
  Icon = null,
  onClick,
}: any) => {
  return (
    <div className="flex items-center h-fit p-1 border hover:ring transition hover:ring-gray-200 rounded-full">
      {iconAvailable ? (
        <div className="flex ">
          <NotificationIcon />
        </div>
      ) : null}
      {imageAvailable ? (
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image src={imageUrl} layout="fill" alt="Profile Image" />s
        </div>
      ) : null}
    </div>
  );
};

const NotificationIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 m-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
      />
    </svg>
  );
};

export default Topbar;
