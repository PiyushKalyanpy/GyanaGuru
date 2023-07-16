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
    <div className='flex flex-col w-full h-screen overflow-y-scroll bg-zinc-100 dark:bg-zinc-900'>
      {/* top Playlist details */}
     
      <Topbar showBackIcon />
      <div className='grid lg:grid-cols-4 gap-4 p-4 z-10'>
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
