import Sidebar from "@/components/sidebar/Sidebar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


const DashbaordLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  

  const session =  getServerSession();
  if (!session) {
    redirect("/");
  }
  
  return (
    <div className="flex w-screen h-screen overflow-x-hidden ">
      <Sidebar />
      <main className="w-full h-full ">{children}</main>
    </div>
  );
};

export default DashbaordLayout;
