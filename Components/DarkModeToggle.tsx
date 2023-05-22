import {useTheme} from "next-themes";
import Image from "next/image";

function DarkModeToggle() {
  const {theme, setTheme} = useTheme() 

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className=""
    >
      <Image
      width={39}
      height={40}
      src="/darksun.svg"
      alt="dark mode"
      className="hidden dark:block  hover:scale-110 duration-300"
      />
      <Image
      width={40}
      height={40}
      src="/darkmoon.svg"
      alt="light mode"
      className="dark:hidden hover:scale-110 duration-300"
      />
    </button>
  );
}

export default DarkModeToggle;