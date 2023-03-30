import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const HomeSidebar = ({pageNumber=1} : any) => {
  const router = useRouter();
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(pageNumber);   
  }, [pageNumber])
  

  return (
    <div className="p-4 w-full">
      <SidebarItem
        icon="home"
        text="Dashboard"
        active={1 == active}
        onClick={() => {
          setActive(1);
            router.push("/dashboard");
        }}
      />
      <SidebarItem
        icon="play_lesson"
        text="Courses"
        active={2 == active}
        onClick={() => {
          setActive(2);
          router.push("/course");
        }}
      />

      <SidebarItem
        icon="settings"
        text="Settings"
        active={3 == active}
        onClick={() => {
          setActive(3);
            router.push("/settings");
        }}
      />
    </div>
  );
};

const SidebarItem = ({ text, icon, active, onClick }: any) => {
  return (
    <div
      className={`flex w-full items-center p-4 cursor-pointer text-slate-500 ${
        active ? " bg-violet-100 rounded-lg  text-violet-700 " : ""
      }`}
      onClick={onClick}
    >
      <span
        className={`material-icons-outlined stroke-2  ${
          active ? "material-icons-round" : ""
        }`}
      >
        {" "}
        {icon}{" "}
      </span>
      <h3 className="font-medium ml-2">{text}</h3>
    </div>
  );
};

export default HomeSidebar;
