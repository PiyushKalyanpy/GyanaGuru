import { Topbar, VideoCard } from '@/components/components'
import { useAuth } from '@/context/AuthContext'
import { CourseContext } from '@/context/CourseContext'
import { useContext } from 'react'
import { useRouter } from 'next/router'

const Videos = () => {
  const { currentUser } = useAuth()
  const { playlistId } = useRouter().query
  const { videos, categories, playlist } = useContext(CourseContext)
  const filteredVideos = videos.filter((video: any) => {
    return video.playlistId === playlistId
  })
  return (
    <div className='flex flex-col w-full min-h-screen'>
      <Topbar showBackIcon />
      <div className='grid grid-cols-4 gap-4 p-4'>
      {filteredVideos && filteredVideos.length > 0 ? (
        filteredVideos.map((video: any) => <VideoCard key={video.id} video={video} />)
      ) : (
        <div className=' flex m-auto text-2xl font-archivo text-zinc-500 '>
          No videos found
        </div>
      )}
      </div>
    </div>
  )
}

export default Videos
