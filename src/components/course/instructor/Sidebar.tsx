"use client";
import { instructorCourseSidebarLinks } from "@/constants";
import { courseStore } from "@/lib/store/course.store";
import Link from "next/link";

const Sidebar = () => {
  const courseDetails = courseStore((state: any) => state.courseDetails);
  return (
    <aside className="w-1/6 bg-gray-50 min-h-screen p-4 flex items-start   flex-col ">
      <ul className="flex flex-col gap-8 ">
        {instructorCourseSidebarLinks &&
          instructorCourseSidebarLinks.map((data) => {
            return (
              <li key={data.title} className="flex flex-col gap-4 ">
                <h3 className="text-xl font-semibold">{data.title}</h3>
                <ul className="flex flex-col gap-2">
                  {data.links &&
                    data.links.map((link) => {
                      return (
                        <li
                          key={link.path}
                          className="flex gap-2 hover:underline transition duration-300 cursor-pointer"
                        >
                          <Link href={link.path}>
                            <label htmlFor="a" className="checkmark">
                              {link.label}
                            </label>
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </li>
            );
          })}
      </ul>

      <p className="w-full overflow-x-scroll">
        {
          // JSON.stringify(courseDetails)
        }
      </p>
    </aside>
  );
};

export default Sidebar;
