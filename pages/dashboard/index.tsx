import { NextPageWithLayout } from "@/util/page";
import CustomRedirectButton from "@/components/util/CustomRedirectButton";
import { PrimaryLayoutWithSidebar } from "@/components/layouts/exporter";

const Dashboard: NextPageWithLayout = () => {
  return (
    <section className="w-full h-screen bg-white grid">
      This is the home page ui design for the dashboard

      <CustomRedirectButton title="Explore courses" src="/courses" />
    </section>
  );
};
export default Dashboard;
Dashboard.getLayout = (page) => {
  return <PrimaryLayoutWithSidebar>{page}</PrimaryLayoutWithSidebar>;
};
