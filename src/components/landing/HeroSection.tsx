import "./landing.css";
const HeroSection = () => {
  return (
    <section className="flex flex-col items-center gap-8 h-screen w-full   place-content-center">
      <h4 className="text-white/200">TOP PLATFORM FOR ORGANISING EDUCATION</h4>
      <h2 className="text-6xl font-thin text-center font-archivo">
        Improve your Learning <br /> with Gyanaguru
      </h2>
      <button className="px-4 py-3 shadow-2xl shadow-indigo-600/50 outline-none    bg-indigo-600 cursor-pointer rounded-2xl h-fit">
        Get Started for Free
      </button>
    </section>
  );
};

export default HeroSection;
