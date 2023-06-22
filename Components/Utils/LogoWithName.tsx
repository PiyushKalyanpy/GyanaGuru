import Image from "next/image";
import { useRouter } from "next/router";
const LogoWithName = ({ width, height }: any) => {
  const router = useRouter();
  return (
    <div 
      onClick={() => router.push("/")} 
      className="flex  items-center  cursor-pointer w-full h-fit  justify-center "
      // A11Y
      role="button"
      tabIndex={0}
      aria-label="Button to go to Home page"
    >
      <Image 
        src="./logo.svg" 
        width={width} 
        height={height} 
        alt="logo" 
        // A11Y
        role="img"
        aria-label="Logo Image"
      />
      <h1 
        className="font-archivo font-semibold text-xl "
        // A11Y
        role="presentation"
        aria-label="GyanaGuru Website"
      >
        GyanaGuru
      </h1>
    </div>
  );
};

export default LogoWithName;
