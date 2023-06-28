import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

const VideoCard = ({ imageUrl, title, id }: any) => {
  const router = useRouter()
  const handleClick = () => {
    router.push(`/course/${id}`)
  }
  return (
    <div
      onClick={handleClick}
      className='flex  cursor-pointer flex-col hover:scale-[1.05] transition space-y-4 items-center bg-white dark:bg-zinc-800 rounded-xl w-80  p-4 overflow-hidden'
    >
      <div className='relative w-full h-20 aspect-w-3 aspect-h-2 '>
        <Image
          src={imageUrl}
          alt={title}
          layout='fill'
          quality={100}
          objectFit='cover'
          className='rounded-xl'
        />
      </div>
      <h3 className='items-center text-lg font-medium font-inter'>{title}</h3>
    </div>
  )
}

export default VideoCard
