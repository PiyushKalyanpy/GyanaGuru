import Image from "next/image";
const LogoWithName = ({ width, height }: any) => {
  return (
    <div className="flex  items-center   w-full h-fit  justify-center ">
      <Image src="/logo.svg" width={width} height={height} alt="logo" />
      <h1 className="font-archivo font-semibold text-xl ">GyanaGuru</h1>
    </div>
  );
};

export default LogoWithName;
