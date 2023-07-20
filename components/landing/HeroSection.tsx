import Image from 'next/image'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const HeroSection = () => {
  const router = useRouter()

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
          entry.target.classList.remove(
            'translate-x-full',
            'opacity-0',
            '-translate-x-full'
          )
        } else {
          entry.target.classList.remove(
            'translate-y-0',
            'opacity-100',
            'translate-x-0'
          )
          entry.target.classList.add(
            'translate-x-full',
            'opacity-0',
            '-translate-x-full'
          )
        }
      })
    })

    elements.forEach(element => {
      observer.observe(element)
    })
  }, [])

  return (
    <div className='flex flex-row items-center justify-center w-full lg:pr-12 lg:pt-12 lg:pl-12 mb-20 px-4 bg-white mt-40 dark:bg-neutral-950 '>
       
      <div className='flex flex-col items-center w-full space-y-10 transition duration-500 ease-in-out transform -translate-x-full opacity-0 lg:items-start lg:flex-col  lg:justify-between lg:pr-16 lg:pl-20'>
        <div className='flex-col text-center font-inter space-y-10'>
          <h1 className='space-y-10 text-4xl font-bold leading-snug text-black lg:font-semibold lg:text-6xl dark:text-zinc-50 lg:text-start'>
            <h2>
              Empower Yourself Through Knowledge with&nbsp;
              <span className='underline text-zinc-600 dark:text-zinc-200'>
                Gyanaguru
              </span>
            </h2>
          </h1>
          <div className='flex flex-col items-center justify-center mt-4 text-center lg:justify-start lg:flex-row lg:mt-10 lg:space-x-10 '>
            <h2 className='text-2xl lg:text-xl text-zinc-600 dark:text-zinc-50'>
              Personalized learning for
            </h2>
            <div className='flex items-center mt-2 space-x-4 text-center lg:mt-0'>
              <h2 className='font-extrabold text-transparent text-black text-8xl bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600 lg:text-8xl font-archivo '>
                Free
              </h2>
            </div>
          </div>
        </div>
        <div className='flex'>
        <div
          onClick={() => router.push('/login')}
          className=' flex items-center justify-center p-4 text-white duration-700 ease-out bg-black border-2 border-black rounded-full cursor-pointer w-fit h-fit  dark:bg-zinc-50 hover:scale-110'
        >
          <h4 className='flex items-center text-xl font-archivo dark:text-zinc-800 space-x-3'>
            <span className='hidden lg:block'>Explore Courses</span>
            <span className='lg:hidden'>Get Started</span>
            <span className='text-white material-icons dark:text-black'>
              north_east
            </span>
          </h4>
        </div>
        </div>
      </div>
      <div className='hidden w-3/4 h-full pr-10 lg:flex'>
        <Image
          src='/images/hero.webp'
          alt='Hero Section Image'
          width={1000}
          height={1000}
          className='hidden object-contain p-4 lg:block scale-10 w-96 h-96 lg:w-full lg:h-full '
        />
      </div>
    </div>
  )
}

export default HeroSection
