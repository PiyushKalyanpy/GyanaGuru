import React, { useContext, useEffect } from 'react';
import { CourseContext } from '@/context/CourseContext';
import { useRouter } from 'next/router';

const Design = () => {
  const { fetchDesign, design } = useContext(CourseContext);

  useEffect(() => {
    fetchDesign();
    console.log('uf');
  }, []);

  console.log(design);
  return (
    <div className='flex flex-col  p-4 gap-4 w-screen h-screen bg-white '>
      <h2 className='text-6xl font-archivo font-bold  text-zinc-800 p-6'>
        Designs to implement
      </h2>
      <div className='grid grid-cols-4 gap-4 '>
        {design &&
          Object.entries(design).map(([key]) => [
            <DesignCard key={key} title={key} />,
          ])}
      </div>
    </div>
  );
};

const DesignCard = ({ title }: any) => {
  const router = useRouter()
  const handleClick = ()=>{
    router.push(`/design/${title}`)
  }
  const getRandomColorClass = () => {
    const colors = [
      'bg-red-100',
      'bg-blue-100',
      'bg-green-100',
      'bg-pink-100',
      'bg-purple-100',
      'bg-indigo-100',
      'bg-gray-100',
      'bg-teal-100',
      'bg-orange-100',
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const randomColorClass = getRandomColorClass();
  return (
    <div
    onClick={handleClick}
      className={`flex  rounded-3xl items-center p-4 w-full h-40 text-3xl font-archivo font-bold bottom-0 hover:scale-105 transition cursor-pointer ${randomColorClass}`}
    >
      <h2 className='flex m-auto'>{title}</h2>
    </div>
  );
};

export default Design;
