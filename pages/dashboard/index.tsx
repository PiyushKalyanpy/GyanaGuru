import { NextPageWithLayout } from "../../util/page";
import {
  PrimaryLayoutWithSidebar,
  DashboardSidebar,
} from "@/components/layouts/exporter";
import { SidebarItem } from "../../util/types";

const Dashboard: NextPageWithLayout = () => {
  return (
    <section className="w-full h-screen bg-white">
      This is the home page ui design for the dashboard
    </section>
  );
};

export default Dashboard;

Dashboard.getLayout = (page) => {
  return <PrimaryLayoutWithSidebar>{page}</PrimaryLayoutWithSidebar>;
};
