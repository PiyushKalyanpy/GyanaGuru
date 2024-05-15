"use client";
import { AvatarIcon, CardStackIcon } from "@radix-ui/react-icons";
import SidebarItem from "@/components/sidebar/SidebarItem";
import { usePathname, useSearchParams } from "next/navigation";
import AddCourse from "@/components/admin/AddCourse";

const Admin = async() => {
  const pathname = await usePathname();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  return (
    <div className="flex w-full h-full ">
      <aside className="flex flex-col w-1/4 p-4 border-r ">
        {AdminSidebarItems.map((item) => (
          <SidebarItem key={item.title} item={item} />
        ))}
      </aside>
      <main className="flex flex-col w-3/4">
        {tab === "add-course" && <AddCourse />}
      </main>
    </div>
  );
};

const AdminSidebarItems = [
  {
    title: "Courses",
    path: "/admin?tab=add-course",
    icon: <CardStackIcon />,
  },
  {
    title: "Users",
    path: "/admin?tab=users",
    icon: <AvatarIcon />,
  },
];

export default Admin;
