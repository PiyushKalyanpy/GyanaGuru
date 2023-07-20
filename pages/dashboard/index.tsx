import { NextPageWithLayout } from "../../util/page";
import { PrimaryLayoutWithSidebar } from "@/components/layouts/exporter";

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
