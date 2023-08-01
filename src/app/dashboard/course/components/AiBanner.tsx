const AiBanner = () => {
  return (
    <div className="md:flex w-full rounded-2xl bg-white">
      <div className="relative w-full h-full p-6 bg-white rounded-xl ">
        <div className="z-10 relative flex flex-col space-y-4 ">
          <h2 className="text-4xl sm:text-5xl font-bold font-archivo text-zinc-900">
            Discover the power of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-violet-500 via-pink-500 to-sky-600">
              AI
            </span>{' '}
            with Education
          </h2>
          <h6 className="text-xl sm:text-2xl text-zinc-700">
            Introducing our groud breaking approach to learning
          </h6>
          <button className="flex hover:scale-105 transition px-4 py-2 space-x-2 border-2 rounded-full border-zinc-600 w-fit ">
            <p>Join Now</p>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        <div className="absolute right-0 top-0 z-0 h-full w-fit">
          <img
            src="/assets/aibackground.png"
            alt=""
            className="w-full h-full rounded-xl "
          />
        </div>
      </div>
    </div>
  );
};

export default AiBanner;
