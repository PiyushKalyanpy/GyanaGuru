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
      <div className="flex flex-row items-center justify-center w-full h-screen p-12 px-20 pt-40 bg-white dark:bg-neutral-950">

      
      
        <div className="transition duration-500 ease-in-out transform -translate-x-full opacity-0">
          <h1 className="text-black text-8xl w-fit font-archivo dark:text-zinc-50">
            Revolutionizing Education in India
          </h1>
          <div className="flex flex-row items-start gap-4 mt-10">
            <h2 className="text-2xl text-zinc-600 dark:text-zinc-50">
              Personalized learning for
            </h2>
            <div className="flex flex-row items-center space-x-8">
              <h2 className="font-medium text-black text-8xl font-archivo dark:text-zinc-50">
                Free
              </h2>
              <Image
                src="/images/arrow_big.svg"
                alt="arrow"
                width={80}
                height={80}
                className="dark:hidden"
              />
              <Image
                src="/images/dark_arrow_big.svg"
                alt="arrow"
                width={80}
                height={80}
                className="hidden dark:block"
              />
              <div
                onClick={() => router.push("/courses")}
                className="flex flex-row items-center gap-4 p-4 text-white bg-black border-2 border-black rounded-full h-fit cursor-pointer dark:bg-zinc-50"
              >
                <span className="inline-flex bg-black "></span>

                <h4 className="text-xl  font-archivo">Explore Courses</h4>
                <span className="inline-flex bg-black "></span>
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
