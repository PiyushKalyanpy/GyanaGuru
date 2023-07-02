import { useRouter } from 'next/router'
import { useContext } from 'react'
import { CourseContext } from '@/context/CourseContext'
import YouTube from 'react-youtube'
import { useEffect } from 'react'
import { showToast } from '@/components/util/Toast'
import { ToastContainer } from 'react-toastify'

const VideoPlayer = () => {
  const router = useRouter()
  const { videoId } = router.query
  const { videos, updateVideoLike } = useContext(CourseContext)
  const video = videos.find((video: any) => video.id === videoId)
  const {
    name,
    description,
    createdBy,
    likes,
    viewCount,
    duration,
    imageUrl,
    url
  } = video || {}
  const videoYTId = url?.split('v=')[1]

  const opts = {
    height: '100%',
    width: '100%',

    playerVars: {
      autoplay: 1
    }
  }

  const handleReady = (event: any) => {
    // Perform any actions when the YouTube player is ready
    // For example, event.target.playVideo();
  }

  const handleLike = () => {
    // setTimeout(() => {
    // }, 1000)
    updateVideoLike(videoId, likes + 1)
    console.log(likes)
  }

  return (
    <div className='h-screen'>
      <ToastContainer />
      <div className='w-screen h-full p-4 overflow-y-scroll bg-zinc-200 dark:bg-zinc-900'>
        {/* top bar with title and buttons */}
        <div className='flex'>
          <div className='flex items-center px-4 pt-4 space-x-4 bg-zinc-100 dark:bg-zinc-800 w-fit rounded-t-4xl'>
            <span
              onClick={() => router.back()}
              className='p-4 text-sm bg-white rounded-full cursor-pointer dark:bg-zinc-900 dark:text-white material-icons text-zinc-600'
            >
              arrow_back_ios_new
            </span>
            <h1 className='px-4 pr-8 text-xl font-archivo'>
              {/* {curretPlaylist && curretPlaylist[0].name} */}
              {name}
            </h1>
          </div>
          <div className='w-20 bg-zinc-100 dark:bg-zinc-800'>
            <div className='w-full h-full bg-zinc-200 dark:bg-zinc-900 rounded-bl-4xl'></div>
          </div>
        </div>
        {/* video content with comment + notes */}
        <div className='flex flex-col w-full h-full border-red-500 border-3 bg-zinc-100 dark:bg-zinc-800 rounded-bl-2xl rounded-r-3xl'>
          {/* video section */}
          <div className='flex flex-col h-full p-4 md:w-full lg:w-3/4  '>
            <div className='flex w-full overflow-hidden h-full rounded-3xl bg-zinc-200'>
              <YouTube
                videoId={videoYTId}
                opts={opts}
                onReady={handleReady}
                className='w-full h-full'
                onPause={e => {
                  console.log(e)
                  e.target.currentTime = 33
                }}
              />
            </div>
          </div>
          {/* like button  */}
          <span onClick={handleLike} className='p-4 text-xl material-icons cursor-pointer'> thumb_up_alt </span>
          <div className='w-1/4 h-full p-4 space-y-10 md:hidden lg:grid grid-row-2 '></div>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer
