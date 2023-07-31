import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface CategoryCardProps {
    imageUrl: string
    name: string
    id: string
}

const CategoryCard = (item: any) => {
    const { imageUrl, name, id } = item
    console.log(imageUrl)
    const router = useRouter()
    const handleClick = () => {
        router.push(`/courses/${id}`)
    }
    return (
        <div
            onClick={handleClick}
            className='flex flex-none cursor-pointer flex-col hover:scale-105 transition space-y-4 items-center bg-white  dark:bg-zinc-900 rounded-xl w-60 lg:w-80  p-4 overflow-hidden snap-start'
        >
            <div className='relative w-full h-20 aspect-w-3 aspect-h-2 '>
                <Image
                    src={imageUrl}
                    alt={name}
                    layout='fill'
                    quality={50}
                    objectFit='cover'
                    className='rounded-xl'
                />
            </div>
            <h3 className='items-center text-lg font-medium font-inter text-black dark:text-white'>
                {name}
            </h3>

        </div>
    )
}

export default CategoryCard
