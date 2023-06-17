import Image from 'next/image'

const ButtonWithImage = ({ buttonName, onClick, icon }: any) => {
  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer place-content-center  space-x-4 rounded-lg hover:scale-[1.03] transition w-full border p-2 "
    >
      <Image
        src="google.svg"
        alt="icon"
        width={20}
        height={20}
      />
      <h3 className=" font-medium">{buttonName}</h3>
    </div>
  )
}

export default ButtonWithImage
