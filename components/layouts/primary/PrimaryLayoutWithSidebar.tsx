import DashboardSidebar from "../sidebar/DashboardSidebar";
import Head from "next/head";

export interface IPrimaryLayoutWithSidebar {
}

const PrimaryLayoutWithSidebar: React.FC<IPrimaryLayoutWithSidebar> = ({children
}: any) => {
  return (
    <>
      <Head>
        <title>Sidebar</title>
      </Head>
      <main className="flex flex-col  lg:flex-row">
        <DashboardSidebar />
        <div>{children}</div>
      </main>
    </>
  );
};

export default PrimaryLayoutWithSidebar;
