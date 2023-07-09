import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect } from 'react'
import { showToast } from './Toast'

function DarkModeToggle () {
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    setTheme('light')
    // setTheme(theme === "dark" ? "light" : "liht")
  }, [theme])

  return (
    <button onClick={() => showToast('Functionality removed', 'info')}>
      <Image
        width={36}
        height={40}
        src='/darksun.svg'
        alt='dark mode'
        className='hidden dark:block  hover:scale-110 duration-300'
      />
      <Image
        width={36}
        height={40}
        src='/darkmoon.svg'
        alt='light mode'
        className='dark:hidden hover:scale-110 duration-300'
      />
    </button>
  )
}

export default DarkModeToggle
