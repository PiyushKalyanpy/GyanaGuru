import { useRouter } from "next/router";
import LandingFooter from "@/Components/LandingFooter";

const NotFoundPage = () => {
    const router = useRouter();
  const navLinkStyle =
    "font-archivo relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:rounded-full after:duration-500 after:origin-center";
  const handleGoBack = () => {
    router.back();
  };
  const redirectToHome = () => {
    router.push("/");
  };
  return (
    <>
    <div className="sticky top-0 z-20 w-full border-b-2 border-white bg-white/30 backdrop-blur-md">
      <div className="flex flex-row items-center justify-between w-full px-20 py-4 ">
        <div
          className="flex flex-row items-center cursor-pointer"
          onClick={redirectToHome}
        >
          <img src="./logo.svg" alt="logo" />
          <h1 className="text-lg font-semibold font-archivo ">GyanaGuru</h1>
        </div>
        <div
          onClick={handleGoBack}
          className="flex flex-row items-center gap-4 p-1 border-2 border-black rounded-full cursor-pointer"
        >
          <span className="p-2 text-white bg-black rounded-full material-icons -rotate-90">
            arrow_outward
          </span>
          <h4 className="mr-2 font-medium">Go Back</h4>
        </div>
      </div>
    </div>
      <div className="flex items-center justify-center h-[500px] flex-col m-8 text-2xl">
        <h1 className="font-archivo text-6xl m-4">404 - Page Not Found</h1>
        <p>Sorry, there is nothing to see here!</p>
      </div>
      <LandingFooter/>
    </>
  );
};

export default NotFoundPage;