
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const DashboardPage = () => {
  // const session = getServerSession();
  // if (!session) {
  //   redirect("/");
  // }
  return <div>dashbaord</div>;
};

export default DashboardPage;
