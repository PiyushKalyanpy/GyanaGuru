"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import axios from "axios";

const SidebarItem = ({ item }: any) => {
  const pathname = usePathname();
  const handleClick = () => {
    if (item.title == "Logout") {
      axios.get("/api/auth/logout").then(() => {
        window.location.href = "/";
      });
    }
  };
  return (
    <div className="w-full" onClick={handleClick}>
      <Link
        className={` w-full gap-2 items-center flex rounded-xl hover:bg-gray-100 transition text-gray-800 p-2 ${
          pathname == item.path && "bg-gray-200/60  text-gray-950"
        }`}
        href={item.path}
      >
        {item.icon}
        <p className="hidden lg:block">{item.title}</p>
      </Link>
    </div>
  );
};

export default SidebarItem;
