import Image from "next/image";

const HeroSection = () => {
  return (
    <div>
      <div className="flex flex-row px-20 items-center justify-center p-12 w-full h-screen bg-white">
        <div>
          <h1 className="text-8xl w-fit  font-archivo  text-black">
            Revolutionizing Education in India
          </h1>
          <div className="flex flex-row mt-10 gap-4 items-start">
            <h2 className="text-2xl  text-zinc-600 ">
              Personalized learning for
            </h2>
            <div className="flex flex-row space-x-8 items-center">
              <h2 className="text-8xl font-archivo font-medium text-black">
                Free
              </h2>
              <Image
                src="/images/arrow_big.svg"
                alt="arrow"
                width={80}
                height={80}
              />
              <div className="flex flex-row h-fit p-4 gap-4 border-2 bg-black text-white border-black  rounded-full items-center">
              <span className=" bg-black inline-flex "></span>

                <h4 className=" text-xl font-archivo ">Explore Courses</h4>
              </div>
            </div>
          </div>
        </div>

        <img
          src="/images/herosection.png"
          alt="hero"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default HeroSection;
