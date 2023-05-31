import Image from "next/image";
import { useRouter } from "next/router";

const LogoWithName = ({ width, height }: any) => {

  const router = useRouter();

  const handleClickonLogo = () => {
    router.push("/");
  };

  return (
    <div className="flex  items-center   w-full h-fit  justify-center cursor-pointer " onClick={handleClickonLogo}>
      <Image src="./logo.svg" width={width} height={height} alt="logo" />
      <h1 className="font-archivo font-semibold text-xl ">GyanaGuru</h1>
    </div>
  );
};

export default LogoWithName;