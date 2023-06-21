import { ReactNode, useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';
import VanillaTilt from 'vanilla-tilt';
import Image from 'next/image';
import WhyChooseUsData from '../../data/why_choose_us.json';

type InfoCardProps = {
  title: string;
  description: string;
};

const InfoCard = ({ title, description }: InfoCardProps) => {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === 'dark';
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.5,
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
