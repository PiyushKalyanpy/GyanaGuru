import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import Rating from '../../components/util/Rating'
import { CourseContext } from '@/context/CourseContext'

const VideoCard = ({ video }: any) => {
  const router = useRouter()
  const {
    id,
    name,
    description,
    imageUrl,
    categoryId,
    viewCount,
    likes,
    duration,
    rating
  } = video
  const { videoViewed } = useContext(CourseContext)

  const handleClick = () => {
    videoViewed(id)
    router.push(`/courses/playlist/video/${id}`)
  }

  return (
    <div
      onClick={handleClick}
      className='w-full overflow-hidden bg-white cursor-pointer select-none  dark:bg-zinc-900 rounded-xl'
    >
      <div className='relative h-40'>
        <Image
          src={imageUrl}
          alt='Thumbnail'
          layout='fill'
          objectFit='cover'
          className='object-cover w-full'
        />
        <div className='absolute px-2 py-1 text-xs text-white rounded bottom-2 right-2 bg-gray-900/50 backdrop-blur-sm'>
          {duration}
        </div>
      </div>
      <div className='p-4 '>
        <h3 className='mb-2 font-medium  line-clamp-2'>{name}</h3>
        {/* <div className='flex items-center mb-2 text-gray-500'>
          <span className='mr-1'>{'\u2022'}</span>
          <Rating value={rating} noOfVotes={likes} />
        </div>
        {/* <p className='text-sm text-gray-600'>{description}</p> */}
        <div className='flex items-center mt-2 text-gray-500'>
          <span className='mr-2'>{viewCount} views</span>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
