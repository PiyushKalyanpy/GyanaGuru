import Image from "next/image";

const CategoryCard = ({ imageUrl, title, id = 1 }: any) => {
  return (
    <div className="flex flex-col hover:scale-[1.05] transition space-y-4 items-center bg-white dark:bg-zinc-800 rounded-xl w-80  p-4 overflow-hidden">
      <div className="relative w-full h-20 aspect-w-3 aspect-h-2 ">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <h3 className="items-center text-lg font-medium font-inter">{title}</h3>
    </div>
  );
};

export default CategoryCard;
