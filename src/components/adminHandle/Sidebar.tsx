import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import Image from "next/image";
import { LogoutFromGoogleAuth } from "@/database/firebase";
import { DarkModeToggle } from "../components";

const Sidebar = ({ pageNumber, active, setActive }: any) => {
  const router = useRouter();

  useEffect(() => {
    if (pageNumber == 0) return;
    setActive(pageNumber);
  }, [pageNumber]);


  return (
    <div className="flex flex-col justify-between h-full py-8 overflow-hidden bg-white dark:bg-zinc-950">
      {/* Menu icons  */}
      <div className="flex flex-col gap-4 px-4">
        {/* <DarkModeToggle/> */}
        <SidebarItem
          Icon={AddIcon}
          text="Add Course"
          active={1 == active}
          onClick={() => {
            setActive(1);
          }}
        />
        
        <SidebarItem
          Icon={UpdateIcon}
          text="Update Course"
          active={2 == active}
          onClick={() => {
            setActive(2);
          }}
        />

        <SidebarItem
          Icon={DeleteIcon}
          text="Delete Course"
          active={3 == active}
          onClick={() => {
            setActive(3);
          }}
        />
        <SidebarItem
          Icon={StudentReportIcon}
          text="Add Design"
          active={4 == active}
          onClick={() => {
            setActive(4);
          }}
        />
        <SidebarItem
          Icon={ManageIcon}
          text="Manage Content"
          active={5 == active}
          onClick={() => {
            setActive(5);
          }}
        />
       
      </div>
    </div>
  );
};

const SidebarItem = ({ text, Icon, active, onClick, className }: any) => {
  return (
    <div
      className={`flex items-center flex-row  pl-4 gap-4 w-full h-10 cursor-pointer  rounded-xl   ${
        active ? "" : ""
      }`}
      onClick={onClick}
    >
      <span
        className={`material-icons-outlined   ${
          active ? "material-icons-round dark:text-white text-black " : "text-zinc-500"
        }`}
      >
        <Icon />
      </span>
      {/* <h3 className={"font-medium ml-2 text-zinc-900"}>{text}</h3> */}
      <h3
        className={` ml-2  font-inter ${
          active ? "dark:text-white text-black font-semibold " : "text-zinc-600"
        }`}
      >
        {text}
      </h3>
    </div>
  );
};
const AddIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

  );
};

const UpdateIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>
  
  );
};
const DeleteIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

  );
};
const StudentReportIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
</svg>

  );
};
const ManageIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
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

export default Sidebar;
