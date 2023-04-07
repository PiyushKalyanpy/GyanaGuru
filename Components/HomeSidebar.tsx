import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {LogoWithName} from "./components";

const HomeSidebar = ({ pageNumber = 1 }: any) => {
  const router = useRouter();
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(pageNumber);
  }, [pageNumber]);

  return (
    <div className="flex  flex-col p-4 w-full h-screen justify-between ">
      <LogoWithName  width={40} height={40}/>
      <div className="flex flex-col space-y-4">
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

      <div className="flex flex-col space-y-4">
      <SidebarItem
        icon="logout"
        text="Logout"
        active={4 == active}
        onClick={() => {
          setActive(4);

          router.push("/login");
        }}  
      />
      </div>

     
    </div>
  );
};

const SidebarItem = ({ text, icon, active, onClick, className }: any) => {
  return (
    <div
      className={`flex w-full items-center p-4 cursor-pointer text-zinc-500 ${
        active ? "bg-zinc-100 rounded-lg " : ""
      }`}
      onClick={onClick}
    >
      <span
        className={`material-icons-outlined stroke-2  ${
          active ? "material-icons-round text-zinc-800" : ""
        }`}
      >
        {" "}
        {icon}{" "}
      </span>
      <h3 className="font-medium ml-2 text-zinc-700">{text}</h3>
    </div>
  );
};

export default HomeSidebar;
