import Image from "next/image";
const LogoWithName = ({width, height} : any) => {
  return (
    <div className="flex flex-row items-center p-0 gap-6 w-[230px] h-[49px] top-[43px] left-[37px] justify-center absolute">
      <Image src="./logo.svg" width={width} height={height} alt="logo" />
      <h1 className="font-archivo font-semibold text-xl ">GyanaGuru</h1>
    </div>
  );
};

export default LogoWithName;
