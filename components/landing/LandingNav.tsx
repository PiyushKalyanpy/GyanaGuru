import Link from 'next/link'
import { useRouter } from 'next/router'
import { DarkModeToggle } from '../components'
import { useState } from 'react'

const LandingNav = () => {
  const router = useRouter()
  const navLinkStyle =
    "font-archivo relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black dark:after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:rounded-full after:duration-500 after:origin-center"
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavLinkClick = (sectionId: any) => {
    setIsMenuOpen(!isMenuOpen)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleGetStartedClick = () => {
    router.push('/login')
  }

  const handleClick = () => {
    router.push('/')
  }

  return (
    <div className='sticky top-0 z-20 w-full border-b-2 border-white bg-white/30 backdrop-blur-md dark:bg-neutral-950/50 dark:border-zinc-700'>
      <div className='flex flex-row items-center justify-between w-full px-6 py-4 lg:px-20 '>
        {/* Logo with Title */}
        <div
          className='flex flex-row items-center cursor-pointer'
          onClick={handleClick}
        >
          <img src='/logo.svg' alt='logo' className='dark:hidden' />
          <img
            src='/logodark.svg'
            alt='dark mode logo'
            className='hidden dark:block'
          />
          <h1 className='text-lg font-semibold font-archivo '>GyanaGuru</h1>
        </div>
        {/* Nav Links */}

        <div className='hidden lg:flex'>
          <NavLinks
            navLinkStyle={navLinkStyle}
            handleNavLinkClick={handleNavLinkClick}
          />
        </div>
        {/* Get Started Button and Dark Mode Button*/}
        <div className='flex-row items-center hidden gap-4 md:flex'>
          <div
            onClick={handleGetStartedClick}
            className='flex flex-row items-center gap-4 p-1 border-2 border-black rounded-full cursor-pointer dark:border-zinc-50'
          >
            <h4 className='ml-2 font-medium '>Get Started</h4>
            <span className='p-2 text-white bg-black rounded-full dark:text-zinc-800 dark:bg-zinc-50 material-icons'>
              arrow_outward
            </span>
          </div>
          <div className='mt-1'>
            <DarkModeToggle />
          </div>
        </div>

        {/* menu button for smaller screens */}
        <div className='md:hidden space-x-4'>
          {/* <DarkModeToggle/> */}
          <span
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='material-icons text-2xl cursor-pointer dark:text-white'
          >
            <MenuIcon />
          </span>
        </div>
      </div>
      <div
        className={`md:hidden justify-center py-10 ${
          isMenuOpen ? 'flex' : 'hidden'
        }`}
      >
        <NavLinks
          handleNavLinkClick={handleNavLinkClick}
          navLinkStyle={navLinkStyle}
        />
      </div>
    </div>
  )
}

const NavLinks = ({ navLinkStyle, handleNavLinkClick }: any) => {
  return (
    <div className='flex flex-col items-center gap-8  lg:flex-row transiton '>
      <Link
        className={navLinkStyle}
        href='#'
        onClick={() => handleNavLinkClick('')}
      >
        Home
      </Link>
      <Link className={navLinkStyle} href='/static/about-us'>
        About Us
      </Link>
      <Link
        className={navLinkStyle}
        href='#ourservices'
        onClick={() => handleNavLinkClick('ourservices')}
      >
        Our Services
      </Link>
      <Link
        className={navLinkStyle}
        href='#benefits'
        onClick={() => handleNavLinkClick('whychooseus')}
      >
        Benefits
      </Link>
      <Link className={navLinkStyle} href='/static/faq'>
        {/* adding badge on div for new */}
        <div>FAQ</div>
      </Link>
    </div>
  )
}

const MenuIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='w-6 h-6'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25'
    />
  </svg>
)

export default LandingNav
