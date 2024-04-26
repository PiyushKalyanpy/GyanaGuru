import Sidebar from "@/components/sidebar/Sidebar";

const DashbaordLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex w-screen h-screen overflow-x-hidden ">
      <Sidebar />
      <main className="w-full h-full bg-zinc-100 ">{children}</main>
    </div>
  );
};

export default DashbaordLayout;
