import HomeNav from "../shared/Header";
import BentoGrid from "./BentoGrid";
import HeroSection from "./HeroSection";
import HomeFooter from "./HomeFooter";
import Subjects from "./Subjects";

const LandingPage = () => (
  <main className="flex text-black flex-col  bg-[#ffffff] w-full h-full min-h-screen ">
    <HomeNav />
    <main className="z-10 flex  flex-col min-h-screen gap-12 px-40 flex-1">
      sdf
      {/* <HeroSection />
      <BentoGrid />
      <Subjects /> */}
    </main>

    <HomeFooter />
  </main>
);

export default LandingPage;
