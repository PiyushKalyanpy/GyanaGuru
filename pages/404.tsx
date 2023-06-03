import { useRouter } from "next/router";
import { LandingNav, LandingFooter } from "@/Components/components";

const NotFoundPage = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  return (
    <div className="flex flex-col h-screen justify-between">
      <LandingNav pageNotFound={true} />
      <div className="flex items-center justify-center flex-col m-32 text-2xl">
        <h1 className="font-archivo text-6xl m-4">404 - Page Not Found</h1>
        <p>Sorry, there is nothing to see here!</p>
        <div
          onClick={handleGoBack}
          className="font-urbanist flex flex-row items-center gap-4 p-1 mt-8 border-2 border-black rounded-full cursor-pointer dark:border-zinc-50"
        >
          <h4 className="ml-2 text-lg">Go Back</h4>
          <span className="p-2 text-white -rotate-90 bg-black dark:text-zinc-800 dark:bg-zinc-50 rounded-full material-icons">
            arrow_outward
          </span>
        </div>
      </div>
      <LandingFooter />
    </div>
  );
};

export default NotFoundPage;
