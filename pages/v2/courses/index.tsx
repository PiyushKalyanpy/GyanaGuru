import { NextPageWithLayout } from "../../page";
import { PrimaryLayoutWithSidebar } from "@/components/layouts/exporter";
import { SidebarItem } from "../../../util/types";

const Courses: NextPageWithLayout = () => {
  return (
    <section className="w-full h-screen bg-white">Welcome to courses</section>
  );
};

export default Courses;

Courses.getLayout = (page) => {
  return <PrimaryLayoutWithSidebar>{page}</PrimaryLayoutWithSidebar>;
};
