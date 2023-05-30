import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";

const HeroSection = () => {
  const router = useRouter();
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
          entry.target.classList.remove(
            "translate-x-full",
            "opacity-0",
            "-translate-x-full"
          );
        } else {
          entry.target.classList.remove(
            "translate-y-0",
            "opacity-100",
            "translate-x-0"
          );
          entry.target.classList.add(
            "translate-x-full",
            "opacity-0",
            "-translate-x-full"
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
      
      <div className="flex flex-row items-center justify-center w-full h-screen p-12 px-20 pt-40 bg-white">
      

        <div className="transition duration-500 ease-in-out transform -translate-x-full opacity-0">
          <h1 className="text-black text-8xl w-fit font-archivo">
            Revolutionizing Education in India
          </h1>
          <div className="flex flex-row items-start mt-10 space-x-9">
              <h2 className="text-3xl text-zinc-600 ">
              Personalized learning for
            </h2>
            <div className="flex flex-row items-center space-x-6">
              <h2 className=" font-medium text-black text-5xl font-archivo">
                Free
              </h2>
              <Image
                src="/images/arrow_big.svg"
                alt="arrow"
                width={60}
                height={60}
              />
              <div
                onClick={() => router.push("/courses")}
                className="flex flex-row items-center p-3 border-2 border-black rounded-full cursor-pointer hover:bg-black hover:text-white transition ease-in-out duration-300 delay-75"
              >
                <h4 className="font-semibold">Explore Courses</h4>
              </div>
            </div>
          </div>
        </div>

        <img
          className="transition duration-500 ease-in-out transform translate-x-full opacity-0"
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
