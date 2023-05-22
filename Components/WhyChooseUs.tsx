import WhyChooseUsData from "../data/why_choose_us.json";
import Image from "next/image";
import { TfiArrowRight } from "react-icons/tfi";


const WhyChooseUs = () => {
  return (
    <div id="whychooseus" className="px-20 py-20 mt-40 bg-zinc-100">
      <h1 className="text-4xl text-center font-semibold font-archivo text-slate-900 p-4 mb-10">{`Why`} <span className="relative bg-neutral-900 rounded-3xl p-2 text-white">Choose</span> {`Us?`}</h1>
      <div className="flex w-full">
        <div className="flex w-full items-center justify-center gap-8 m-full">
          {WhyChooseUsData.whyChooseUs.map((item, index) => {
            return (
              <InfoCard
                key={index}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
        {/* <div className="col-span-2 flex justify-self-end">
          <Image
            className="rounded-xl"
            src="/images/wcu.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div> */}
      </div>
    </div>
  );
};

const InfoCard = ({ title, description }: any) => {
  return (
    <div className="flex flex-col justify-between w-72 border-2 border-white hover:border-2 hover:border-neutral-600 h-full relative font-archivo rounded-3xl transition duration-300 ease-in-out shadow-md bg-white hover:shadow-xl">
      {/* <span className=" absolute inline-flex -z-10 mt-2 h-4 w-20 rounded-full bg-seafoam opacity-75"></span> */}
      <div className="h-40 w-full rounded-3xl bg-seafoam p-4">
        <h3 className="text-2xl font-semibold font-archivo">{title}</h3>
      </div>
      <div className="m-4 h-full">
        <p className="text-black font-inter break-words text-base">{description}</p>
      </div>
      <div className="m-4 inline">
        <button className="p-2 w-full rounded-3xl transition duration-300 ease-in-out bg-neutral-600 text-white hover:bg-neutral-800 inline flex justify-center items-center gap-1">{`Get Started`} <TfiArrowRight className="inline" /></button>
      </div>
    </div>
  );
};

export default WhyChooseUs;
