import Image from "next/image";

const ButtonWithImage = ({ buttonName, onClick, icon }: any) => {
  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer place-content-center  space-x-4 rounded-lg hover:scale-[1.03] transition w-full border p-2 "
      // A11Y
      role="button"
    >
      <Image
        src="google.svg"
        alt="icon"
        width={20}
        height={20}
        // A11Y
        role="img"
        aria-label="Google Icon"
      />
      <h3
        className=" font-medium"
        // A11Y
        role="presentation"
      >
        {buttonName}
      </h3>
    </div>
  );
};

export default ButtonWithImage;
