import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { CourseContext } from '@/context/CourseContext'
import YouTube from 'react-youtube'
import { ToastContainer } from 'react-toastify'
import { CommentSection, ReactEmojiButton } from '@/components/components'

const VideoPlayer = () => {
  const router = useRouter()
  const { videoId } = router.query
  const { videos, updateVideoLike, getComments, comments } = useContext(CourseContext)
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

  useEffect(() => {
    getComments(videoId)

  }, []);

  const videoYTId = url?.split('v=')[1]

  const opts = {
    height: '100%',
    width: '100%',

    playerVars: {
      autoplay: 1
    }
  }

  const handleReady = (event: any) => {}

  const handleLike = () => {
    const likeCount = likes + 1
    updateVideoLike(videoId, likeCount)
    console.log(likeCount)
  }
//   const comments = {
//     "csCtDDoZWlVhQ7OZYXTXOvTvyQF3": {
//         "-NZSuEJexWk_xTNZ3oBa": {
//             "comment": {
//                 "comment": "thi asdn",
//                 "createdAt": "2023-07-03T22:38:29.839Z",
//                 "name": "Piyush Kalyan",
//                 "photoURL": "https://lh3.googleusercontent.com/a/AGNmyxaORNFuhul9r_Mh1V-RAeUXmVaW7-oKL-W6x3W_sA=s96-c",
//                 "uid": "csCtDDoZWlVhQ7OZYXTXOvTvyQF3",
//                 "videoId": "3mgLPKWKtBldVL5lFgQk"
//             },
//             "createdAt": 1688423954007
//         },
//         "-NZSuzMdw3OuRPdltBVv": {
//             "comment": {
//                 "comment": "unkonw comment control the game ",
//                 "createdAt": "2023-07-03T22:42:20.773Z",
//                 "name": "Piyush Kalyan",
//                 "photoURL": "https://lh3.googleusercontent.com/a/AGNmyxaORNFuhul9r_Mh1V-RAeUXmVaW7-oKL-W6x3W_sA=s96-c",
//                 "uid": "csCtDDoZWlVhQ7OZYXTXOvTvyQF3",
//                 "videoId": "3mgLPKWKtBldVL5lFgQk"
//             },
//             "createdAt": 1688424150807
//         }
//     }
// }

  return (
    <div className='h-screen'>
      <ToastContainer />
      <div className='w-screen h-full p-4 overflow-y-scroll bg-zinc-200 dark:bg-zinc-900'>
        {/* top bar with title and buttons */}
        <div className='hidden lg:flex'>
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
        <div className='flex flex-col w-full h-full border-red-500 lg:flex-row border-3 bg-zinc-100 dark:bg-zinc-800 rounded-bl-2xl rounded-r-3xl'>
          {/* video section */}
          <div className='w-full lg:w-3/4'>
            <div className='flex flex-col p-4 h-3/4 '>
              <div className='flex w-full h-full overflow-hidden rounded-3xl bg-zinc-200'>
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
            {/* video details */}
            <div className='flex lg:hidden flex-col p-4 space-y-4'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-4'>
                  <div className='flex items-center space-x-4'>
                    <img
                      src={imageUrl}
                      alt=''
                      className='w-12 h-12 rounded-full'
                    />
                    <div className='flex flex-col'>
                      <h1 className='text-lg font-archivo'>{name}</h1>
                    </div>
                  </div>
                  <div className='flex items-center space-x-4'>
                    <span className='text-sm text-gray-500'>
                      {viewCount} views
                    </span>
                    <span className='text-sm text-gray-500'>
                      {duration} mins
                    </span>
                  </div>
                </div>
             
              </div>
            </div>
            <VideoButttons />{' '}
          </div>
          {/* comments section  */}
          <div className='w-full lg:w-1/4 h-full p-4 space-y-10  lg:grid grid-row-2 '>
            <div className='w-full h-3/4'>
              <CommentSection videoId={videoId}  comments={comments}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const VideoButttons = () => {
  return (
    <div>
      <span className='p-4 text-xl cursor-pointer material-icons'>
        {' '}
        thumb_up_alt{' '}
      </span>
      <span className='p-4 text-xl cursor-pointer material-icons'>
        {' '}
        thumb_down_alt{' '}
      </span>

      <span className='p-4 text-xl cursor-pointer material-icons'> share </span>

      <span className='p-4 text-xl cursor-pointer material-icons'>
        {' '}
        whatshot{' '}
      </span>
    </div>
  )
}

export default VideoPlayer
