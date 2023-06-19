
import WhyChooseUsData from "../../data/why_choose_us.json";
import Image from "next/image";
import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef } from 'react';
import {useTheme} from "next-themes";

const WhyChooseUs = () => {
  return (
    <div id="whychooseus" className="px-20 mt-40 dark:bg-neutral-950">
      <h1 className="text-4xl text-center font-semibold font-archivo text-slate-900 text-black dark:text-zinc-50 p-4 mb-10">{`Why Choose Us`}</h1>
      <div className="grid grid-cols-6  gap-8 w-full items-center">
        <div className="col-span-4 grid grid-cols-3 gap-8 backgroundColor: seafoam dark : backgroundColor: champagne  ">
        {WhyChooseUsData.whyChooseUs.map((item, index) => {
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
        // Add additional styling for the InfoCard
        borderRadius: '4px', // Set border radius for rounded corners
        border: '1px solid #ccc', // Add a border
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add a box shadow
        padding: '16px', // Add padding to create some space around the content
        margin: '8px', // Add margin for spacing between cards
        
        // backgroundColor:  '#FFFFFF', // Set background color// Set background color
      }}
    >
      <InfoCard
        key={index}
        title={item.title}
        description={item.description}
      />
    </div>
  );
})}

        </div>
        <div className="col-span-2 flex justify-self-end">
          <Image
            className=" "
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
  return (

    <div className="  p-4  hover:bg-seafoam dark:hover:bg-champagne transition-colors font-archivo rounded-3xl ">
      <div className="space-y-4  ">
        <h3 className="text-2xl font-semibold font-archivo ">{title}</h3>
        <p className={`font-inter ${isDarkMode ? 'text-white' : 'text-black'}`}>
          {description}
        </p>
      </div>
    </div>


  );
};

export default WhyChooseUs;
