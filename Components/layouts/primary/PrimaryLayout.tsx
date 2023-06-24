import DashboardSidebar from "../sidebar/DashboardSidebar";
import Head from "next/head";

export interface IPrimaryLayout {}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      
      <main>{children}</main>
    </>
  );
};

export default PrimaryLayout;
