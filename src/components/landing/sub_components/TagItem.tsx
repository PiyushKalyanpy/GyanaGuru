import { useRouter } from "next/navigation";

const TagItem = ({ item }: any) => {
  const router = useRouter();

  return (
    <li className="list-none transition-all hover:scale-105 w-fit">
      <button
        onClick={() => router.push("/courses?query=" + item)}
        className="px-4 py-2 border border-gray-200 cursor-pointer rounded-2xl h-fit"
      >
        {item}
      </button>
    </li>
  );
};

export default TagItem;
