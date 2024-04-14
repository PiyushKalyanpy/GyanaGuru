import "./landing.css";
const HeroSection = () => {
  return (
    <section className="hero-section flex flex-col items-center gap-5 h-lvh  w-full   place-content-center">
      <h4 className="text-gray-500">TOP PLATFORM FOR ORGANISING EDUCATION</h4>
      <div className="flex flex-col items-center gap-12">
        <h2 className="text-6xl font-bold text-center">
          Improve your Learning <br /> with Gyanaguru
        </h2>
        <div className="flex gap-4 ">
          <button className="px-4 py-3 shadow-2xl  outline-none  border border-gray-200 cursor-pointer rounded-2xl shadow-gray-200 h-fit">
            How it work's
          </button>
          <button className="px-4 py-3 shadow-2xl shadow-indigo-600/50 outline-none text-white   bg-indigo-600 cursor-pointer rounded-2xl h-fit">
            Get Started for Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
