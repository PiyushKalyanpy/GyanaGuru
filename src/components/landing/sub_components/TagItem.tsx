import Link from "next/link";
const TagItem = ({ item }: any) => {
  return (
    <li className="transition-all hover:scale-105 ">
      <Link
        href={`/tags/`}
        className="px-4 py-2 border border-gray-200 cursor-pointer rounded-2xl h-fit"
      >
        {item}
      </Link>
    </li>
  );
};

export default TagItem;
