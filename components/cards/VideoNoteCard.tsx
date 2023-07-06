import { useState } from 'react'
import { convertDurationToTime } from '@/util/conversion'
import { useContext } from 'react'
import { CourseContext } from '@/context/CourseContext'

const VideoNoteCard = ({ note, updatePlayerTime, noteId }: any) => {
  const [isNoteExpanded, setIsNoteExpanded] = useState(false)
  const { time, title, description, tags, uid, videoId } = note.note
  const {deleteNote} = useContext(CourseContext)


  return (
    <div className='flex flex-col w-full p-4 space-y-4   bg-white rounded-2xl '>
      <div className='flex items-center justify-between'>
        <TimeButton time={time} updatePlayerTime={updatePlayerTime} />
        <span
          onClick={() => setIsNoteExpanded(!isNoteExpanded)}
          className='p-2   rounded-full cursor-pointer material-symbols-outlined hover:bg-zinc-100'
        >
          {isNoteExpanded ? 'expand_more' : 'expand_less'}
        </span>
        <span
          onClick={() => deleteNote(uid, videoId, noteId)}
          className='p-2   rounded-full cursor-pointer material-symbols-outlined hover:bg-rose-100 hover:text-rose-500'
        >
          delete
        </span>
      </div>
      {isNoteExpanded && (
        <>
          {/* note text content */}
          <div>
            <div
              className='text-lg font-semibold outline-none font-urbanist'
              contentEditable
            >
              {title}
            </div>
            <div
              className='w-full whitespace-pre-line outline-none '
              style={{ wordWrap: 'break-word' }}
              contentEditable
            >
              {description}
            </div>
          </div>
          {/* tags  */}
          <div className='flex flex-wrap gap-2 items-center'>
            {/* add button  */}
            <button className='flex items-center p-1 rounded-full cursor-pointer hover:bg-zinc-100'>
              <span className='material-symbols-outlined'>add</span>
            </button>
            {tags &&
              tags.map((tag: any, index: any) => {
                return (
                  <div key={index}>
                    <TagItem tag={tag} />
                  </div>
                )
              })}
          </div>
        </>
      )}
    </div>
  )
}

const TimeButton = ({ time , updatePlayerTime}: any) => {
  return (
    <div onClick={() => updatePlayerTime(convertDurationToTime(time))} className='flex p-2 space-x-2 text-white bg-black rounded-full cursor-pointer w-fit'>
      <span className='text-white material-symbols-outlined'>play_circle</span>
      <p>{time}</p>
    </div>
  )
}

const TagItem = ({ tag }: any) => {
  return (
    <div className='px-2 text-indigo-800 bg-indigo-100 rounded-full w-fit'>
      <p>{tag}</p>
    </div>
  )
}

export default VideoNoteCard
