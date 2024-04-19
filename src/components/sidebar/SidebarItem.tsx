"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarItem = ({ item }: any) => {
  const pathname = usePathname();

  return (
    <div className="w-full">
      <Link
        className={` w-full gap-2 items-center flex rounded-xl hover:bg-zinc-100 transition text-zinc-800 p-2 ${
          pathname == item.path && "bg-zinc-200/60 font-semibold text-zinc-800"
        }`}
        href={item.path}
      >
        {item.icon}
        <p>{item.title}</p>
      </Link>
    </div>
  );
};

export default SidebarItem;
