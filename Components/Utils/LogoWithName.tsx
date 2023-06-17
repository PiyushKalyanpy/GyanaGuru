import Image from 'next/image'
import { useRouter } from 'next/router'
const LogoWithName = ({ width, height }: any) => {
  const router = useRouter()
  return (
    <div
      onClick={() => router.push('/')}
      className="flex  items-center  cursor-pointer w-full h-fit  justify-center "
    >
      <Image
        src="./logo.svg"
        width={width}
        height={height}
        alt="logo"
      />
      <h1 className="font-archivo font-semibold text-xl ">GyanaGuru</h1>
    </div>
  )
}

export default LogoWithName
