import Image from "next/image";
import { useEffect } from "react";

const HeroSection = () => {

  useEffect(() => {
    const elements = document.querySelectorAll(".transform");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            "translate-y-0",
            "opacity-100",
            "translate-x-0"
          );
          entry.target.classList.remove("translate-x-full", "opacity-0","-translate-x-full");
        } else {
          entry.target.classList.remove(
            "translate-y-0",
            "opacity-100",
            "translate-x-0"
          );
          entry.target.classList.add(
            "translate-x-full", "opacity-0", "-translate-x-full"
          );
        }
      });
    });

    elements.forEach((element) => {
      observer.observe(element);
    });
  }, []);

  return (
    <div>
      <div className="flex flex-row px-20 items-center justify-center p-12 w-full h-screen bg-white">
        <div className="transform -translate-x-full opacity-0 transition duration-500 ease-in-out">
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
        className="transform translate-x-full opacity-0 transition duration-500 ease-in-out"
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
