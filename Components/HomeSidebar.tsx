import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import Image from "next/image";
import LogoWithName from "./LogoWithName";
import { LogoutFromGoogleAuth } from "@/firebase";

const HomeSidebar = ({ pageNumber = 1 }: any) => {
  const router = useRouter();
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(pageNumber);
  }, [pageNumber]);

  const logOut = () => {
    LogoutFromGoogleAuth();
    setActive(4);
    setCookie("login", false);
    router.push("/login");
  };

  return (
    <div className="flex flex-col justify-between h-full py-8 overflow-hidden border-2  bg-gradient-to-b from-slate-100 to-white">
      <LogoWithName width={40} height={40} />

      {/* Menu icons  */}
      <div className="flex flex-col gap-4 ">
        {/* logo */}

        <SidebarItem
          icon="home"
          Icon={DashboardIcon}
          text="Dashboard"
          active={1 == active}
          onClick={() => {
            setActive(1);
            router.push("/dashboard");
          }}
        />
        <SidebarItem
          icon="play_lesson"
          Icon={CourseIcon}
          text="Courses"
          active={2 == active}
          onClick={() => {
            setActive(2);
            router.push("/courses");
          }}
        />

        <SidebarItem
          icon="users-people"
          Icon={SettingsIcon}
          text="Profile"
          active={3 == active}
          onClick={() => {
            setActive(3);
            router.push("/users");
          }}
        />
        <SidebarItem
          icon="settings"
          Icon={SettingsIcon}
          text="Settings"
          active={4 == active}
          onClick={() => {
            setActive(4);
            router.push("/settings");
          }}
        />
        <SidebarItem
          icon="settings"
          Icon={SettingsIcon}
          text="Help and Support"
          active={5 == active}
          onClick={() => {
            setActive(5);
            router.push("/help");
          }}
        />
        <SidebarItem
          icon="settings"
          Icon={LogoutIcon}
          text="Logout"
          active={6 == active}
          onClick={() => {
            setActive(6);
            logOut();
          }}
        />
      </div>
      {/* bottom part  */}
      <div className="flex flex-col items-center w-3/4 p-4 mx-auto rounded-lg bg-sky-100 ">
        <div className="flex mb-3 text-base font-normal leading-tight tracking-normal text-center font-inter">
          <span className="text-sm font-normal font-inter text-sky-600">
            Upgrade to Pro and unlock exclusive features to enhance your
            learning experience today!
          </span>
        </div>
        <div className="flex flex-row items-center justify-center p-2 text-white rounded-md bg-sky-700">
          <button>Upgrade</button>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ text, Icon, active, onClick, className }: any) => {
  return (
    <div
      className={`flex items-center flex-row px-8  gap-4 w-full h-10 cursor-pointer text-zinc-500 ${
        active ? "border-r-4 border-blue-500" : ""
      }`}
      onClick={onClick}
    >
      <span
        className={`material-icons-outlined stroke-2  ${
          active ? "material-icons-round text-blue-500" : ""
        }`}
      >
        <Icon />
      </span>
      {/* <h3 className={"font-medium ml-2 text-zinc-700"}>{text}</h3> */}
      <h3
        className={`font-medium ml-2 text-base ${
          active ? "text-black font-extrabold" : ""
        }`}
      >
        {text}
      </h3>
    </div>
  );
};
const DashboardIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
      />
    </svg>
  );
};
const AnalyticsIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
      />
    </svg>
  );
};
const SettingsIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
};
const LogoutIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
      />
    </svg>
  );
};
const CourseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
      />
    </svg>
  );
};

export default HomeSidebar;
