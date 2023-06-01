import { useRouter } from "next/router";
import { LandingNav, LandingFooter } from "@/Components/components";

const NotFoundPage = () => {
  return (
    <>
      <LandingNav pageNotFound={true} />
      <div className="flex items-center justify-center h-[500px] flex-col m-8 text-2xl">
        <h1 className="font-archivo text-6xl m-4">404 - Page Not Found</h1>
        <p>Sorry, there is nothing to see here!</p>
      </div>
      <LandingFooter />
    </>
  );
};

export default NotFoundPage;
