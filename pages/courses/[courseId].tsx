import React from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/context/AuthContext'
import { CourseContext } from '@/context/CourseContext'
import { useContext } from 'react'
import { Topbar } from '@/components/components'
import { PlaylistCard } from '@/components/components'

const Playlist = () => {
  const router = useRouter()
  const { courseId } = router.query
  const { currentUser } = useAuth()
  const { videos, categories, playlist } = useContext(CourseContext)
  const filteredPlaylist = playlist.filter((playlist: any) => {
    return playlist.categoryId === courseId
  })

  return (
    <div className='flex flex-col w-full min-h-screen bg-zinc-100'>
      <Topbar showBackIcon />
      <div className='grid lg:grid-cols-4 gap-4 p-4'>
      {filteredPlaylist && filteredPlaylist.length > 0 ? (
        filteredPlaylist.map((playlist: any) => (
          <PlaylistCard key={playlist.id} playlist={playlist} />
        ))
      ) : (
        <div className=' flex m-auto text-2xl font-archivo text-zinc-500 '>
          No playlist found
        </div>
      )}
      </div>
    </div>
  )
}

export default Playlist
