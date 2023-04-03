import { useRouter } from 'next/router';
import Image from 'next/image';
const CategoryCard = ({categoryName, imageUrl}:any) => {
    const router = useRouter();
    const handleCardClick = () => {
        router.push("/course/[subcourse]", `/course/${categoryName.toLowerCase()}`);
    }

    return (
        <div onClick={handleCardClick} className="flex flex-col active:bg-indigo-300 hover:bg-indigo-200 hover:text-indigo-600 w-full bg-white p-8 items-center rounded-lg" >
            {/* <Image width={50} height={90} className='rounded-xl' src={imageUrl} alt={categoryName} /> */}
            <h2 className="text-center w-full text-xl ">{categoryName}</h2>
        </div>
    );
}

export default CategoryCard;