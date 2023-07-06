import { PrimaryLayoutWithSidebar } from '@/components/layouts/exporter'
import { useContext } from 'react'
import { VideoCard, CategoryCard, PlaylistCard } from '@/components/components'
import { NextPageWithLayout } from '@/util/page'
import { CourseContext } from '@/context/CourseContext'
import { Topbar } from '@/components/components'
import Loading from '@/components/util/Loading'
import { useAuth } from '@/context/AuthContext'

const Courses: NextPageWithLayout = () => {
  let { videos, categories, playlist } = useContext(CourseContext)
  const { currentUser } = useAuth()
  videos = videos.filter((video: any) => video.restriction === 1)
  return (
    <section className='w-full h-full bg-zinc-100 dark:bg-zinc-950 border-3 border-red-500 overflow-y-scroll'>
      <Topbar />
      <CategoryList categories={categories} />
      <PlaylistList playlists={playlist} playlistTitle={`Popular playlists`} />
      <VideoList videos={videos} videoTitle={`Popular videos`} />
    </section>
  )
}

const CategoryList = ({ categories }: any) => {
  return (
    <div className='flex flex-col p-4 space-y-4 overflow-hidden w-full'>
      <h2 className='text-zinc-600'>Categories</h2>
      <div className='flex w-full overflow-x-scroll gap-4 hide-scrollbar snap-x'>
        {categories.length > 0 ? (
          categories.map((category: any) => (
            <CategoryCard
              key={category.id}
              imageUrl={category.imageUrl}
              name={category.name}
              id={category.id}
            />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  )
}

const PlaylistList = ({ playlists, playlistTitle }: any) => {
  return (
    <div className='flex flex-col p-4 space-y-4'>
      <h2 className='text-zinc-600'>{playlistTitle} </h2>
      <div className='grid  lg:grid-cols-3 gap-4'>
        {playlists && playlists.length > 0 ? (
          playlists.map((playlist: any) => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))
        ) : (
          <div className='flex'>
            <Loading />
          </div>
        )}
      </div>
    </div>
  )
}

const VideoList = ({ videos, videoTitle }: any) => {
  return (
    <div className='flex flex-col p-4 space-y-4'>
      <h2 className='text-zinc-600'>{videoTitle} </h2>
      <div className='grid lg:grid-cols-3 gap-6'>
        {videos && videos.length > 0 ? (
          videos.map((video: any) => <VideoCard key={video.id} video={video} />)
        ) : (
          <div className='flex'>
            <Loading />
          </div>
        )}
      </div>
    </div>
  )
}

export default Courses

Courses.getLayout = page => {
  return <PrimaryLayoutWithSidebar>{page}</PrimaryLayoutWithSidebar>
}
