import React, { useEffect } from 'react'
import Image from 'next/image'

const LandingThreeGrid = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.transform')

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            'translate-y-0',
            'opacity-100',
            'translate-x-0'
          )
          entry.target.classList.remove('translate-x-full', 'opacity-0')
        } else {
          entry.target.classList.remove(
            'translate-y-0',
            'opacity-100',
            'translate-x-0'
          )
          entry.target.classList.add('translate-x-full', 'opacity-0')
        }
      })
    })

    elements.forEach(element => {
      observer.observe(element)
    })
  }, [])
  return (
    <div className='grid gap-4 px-10 lg:px-20 mb-20  grid-rows-11 lg:grid-cols-11 h-fit lg:h-96 dark:bg-neutral-950'>
      {/* Showcase 1 */}
      <div className='transform translate-x-full opacity-0 transition duration-500 ease-in-out flex  lg:col-span-4 w-full h-96 row-span-4   bg-orange-50 rounded-3xl overflow-hidden'>
        <div className='flex flex-col items-end justify-end  '>
          <Image
            src='/images/landing0101.jpg'
            width={800}
            height={800}
            alt='landing '
            className='w-full h-full object-cover'
          />  
        </div>
      </div>
      {/* Showcase 4 */}
      <div className="transform translate-x-full opacity-0 transition duration-500 ease-in-out  flex lg:col-span-4 w-full h-96 row-span-4  bg-[url('/images/landing0102.jpg')] object-cover overflow-hidden bg-orange-100 rounded-3xl">
        <div className='flex flex-col items-end justify-end w-full'>
          <h1 className='w-full h-20 p-4 text-lg text-white font-archivo bg-orange-700/20 backdrop-blur-lg '>{`With our platform, you can learn anytime, anywhere, and at your own pace.`}</h1>
        </div>
      </div>
      {/* Showcase 3 */}

      <div className="transform translate-x-full opacity-0 transition duration-500 ease-in-out col-span-3  bg-slate-200 rounded-3xl">
        <div className="flex flex-col justify-end items-end w-full">
          <h1 className="text-3xl font-archivo  text-slate-700 p-4 m-4">{`We provide accessible and affordable education for all with a wide range of courses and expert instructors.`}</h1>
        </div>
      </div>
    </div>
  )
}

export default LandingThreeGrid
