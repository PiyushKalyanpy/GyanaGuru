import React from 'react'
import PlaylistCard from '../cards/PlaylistCard'

const PlaylistList = ({ playlists, playlistTitle }: any) => {
  return (
    <div className='flex flex-col p-4 space-y-4'>
      <h2 className='text-zinc-600'>{playlistTitle} </h2>
      <div className='grid grid-cols-3 gap-4'>
        {playlists &&
          playlists.length > 0 &&
          playlists.map((playlist: any) => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
      </div>
    </div>
  )
}

export default PlaylistList
