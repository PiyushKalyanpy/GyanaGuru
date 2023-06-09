import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import Image from "next/image";
import LogoWithName from "./LogoWithName";
import { LogoutFromGoogleAuth } from "@/database/firebase";

const HomeSidebar = ({ pageNumber }: any) => {
  const router = useRouter();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (pageNumber == 0) return;
    setActive(pageNumber);
  }, [pageNumber]);

  const logOut = () => {
    LogoutFromGoogleAuth();
    setActive(4);
    setCookie("login", false);
    router.push("/login");
  };

  return (
    <div className="flex flex-col justify-between h-full py-8 overflow-hidden bg-white dark:bg-zinc-950 ">
      <div
        onClick={() => router.push("/")}
        className="flex justify-center cursor-pointer h-fit "
      >
        <div className="flex items-center gap-4 p-2 drop-shadow-2xl bg-white cursor-pointer rounded-xl h-fit">
          
        <Image src="./color_logo.svg" width={40} height={40} alt="logo" />
        <h1 className="text-xl font-semibold font-archivo ">GyanaGuru</h1>
        </div>
      </div>

      {/* Menu icons  */}
      <div className="flex flex-col gap-4 px-4">
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
            router.push("/course");
          }}
        />

        <SidebarItem
          icon="users-people"
          Icon={ProfileIcon}
          text="Profile"
          active={3 == active}
          onClick={() => {
            setActive(3);
            router.push("/profile");
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
          Icon={HelpSupportIcon}
          text="Help and Support"
          active={5 == active}
          onClick={() => {
            setActive(5);
            router.push("/help-and-support");
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
      <div className="flex flex-col items-center w-3/4 p-4 mx-auto rounded-lg bg-zinc-50 ">
        <div className="flex mb-3 text-base font-normal leading-tight tracking-normal text-center font-inter">
          <span className="text-sm font-normal font-inter text-zinc-600">
            Upgrade to Pro and unlock exclusive features to enhance your
            learning experience today!
          </span>
        </div>
        <div className="flex flex-row items-center justify-center p-2 text-white rounded-md bg-zinc-900">
          <button>Upgrade</button>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ text, Icon, active, onClick, className }: any) => {
  return (
    <div
      className={`flex items-center flex-row  pl-4 gap-4 w-full h-10 cursor-pointer    ${
        active ? "" : ""
      }`}
      onClick={onClick}
    >
      <span
        className={`material-icons-outlined   ${
          active ? "material-icons-round text-black dark:text-white " : "text-zinc-500 dark:text-zinc-300"
        }`}
      >
        <Icon />
      </span>
      {/* <h3 className={"font-medium ml-2 text-zinc-900"}>{text}</h3> */}
      <h3
        className={` ml-2  font-inter ${
          active ? "text-black font-medium dark:text-white" : "text-zinc-600 dark:text-zinc-400"
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

const ProfileIcon = () => {
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
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
  );
};
const HelpSupportIcon = () => {
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
        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
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
