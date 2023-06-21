import WhyChooseUsData from "../../data/why_choose_us.json";
import Image from "next/image";
import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef } from 'react';
import { useTheme } from "next-themes";

const WhyChooseUs = () => {
  return (
    <div id="whychooseus" className="px-20 mt-40 dark:bg-neutral-950">
      <h1 className="text-4xl text-center font-semibold font-archivo text-slate-900 text-black dark:text-zinc-50 p-4 mb-10">{`Why Choose Us`}</h1>
      <div className="grid grid-cols-6  gap-8 w-full items-center">
        <div className="col-span-4 grid grid-cols-3 gap-8 backgroundColor:grey dark:backgroundColor: #F7EDE3">
          {WhyChooseUsData.whyChooseUs.map((item, index) => (
            <InfoCard key={index} title={item.title} description={item.description} />
          ))}
        </div>
        <div className="col-span-2 flex justify-self-end">
          <Image
            className=""
            src="/images/whychooseus.png"
            alt="Picture of the author"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ title, description }: any) => {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === 'dark';
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    }
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        display: 'inline-block',
        width: '100%',
        borderRadius: '4px',
        border: '1px solid #ccc',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '16px',
        margin: '8px',
      }}
    >
      <div className="p-4 hover:bg-grey dark:hover:bg-champagne transition-colors font-archivo rounded-3xl">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold font-archivo">{title}</h3>
          <p className={`font-inter ${isDarkMode ? 'text-white' : 'text-black'}`}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
