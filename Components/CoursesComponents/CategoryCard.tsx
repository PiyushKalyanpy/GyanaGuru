import Image from "next/image";

const CategoryCard = ({ imageUrl, title, id = 1 }: any) => {
  return (
    <div className="flex flex-col space-y-4 items-center bg-white rounded-xl w-80  p-4 overflow-hidden">
      {/* <div className="relative  w-full items-center justify-between mb-4">
            <span className="absolute right-0 bg-gray-300 text-gray-700 px-2 py-1 text-xs rounded-full">{id}</span>
          </div> */}
      <div className="relative w-full h-20 aspect-w-3 aspect-h-2 ">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <h3 className="text-lg font-inter  font-medium items-center">{title}</h3>
    </div>
  );
};

export default CategoryCard;
