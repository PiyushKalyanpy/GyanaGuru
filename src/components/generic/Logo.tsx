import Image from "next/image";
const Logo = ({
  width = 8,
  height = 8,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <div>
      <Image
        src="/images/favicon.svg"
        alt="12"
        width={40}
        height={40}
        className={`object-cover w-${width} h-${height}`}
      />
    </div>
  );
};

export default Logo;
