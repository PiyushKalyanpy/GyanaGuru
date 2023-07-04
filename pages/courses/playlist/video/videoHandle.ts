import { useRouter } from 'next/router'
import { use, useContext, useEffect, useRef } from 'react'
import { CourseContext } from '@/context/CourseContext'
import YouTube from 'react-youtube'
import { ToastContainer, Zoom } from 'react-toastify'
import {
  BackNavButton,
  CommentSection,
  NotesContainer,
  PdfCard,
  PdfContainer,
  ReactEmojiButton,
  VideoNoteCard
} from '@/components/components'
import { AuthContext } from '@/context/AuthContext'
import { convertTimeToDuration } from '@/util/conversion'

  const { videoId } = router.query
  const {
    videos,
    updateVideoLike,
    getComments,
    comments,
    getNote,
    notes,
    setNote
  } = useContext(CourseContext)
  const { currentUser } = useContext(AuthContext)
  const video = videos.find((video: any) => video.id === videoId)
  const videoPlayer: any = useRef(null)
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

const opts = {
    height: '100%',
    width: '100%',

    playerVars: {
      autoplay: 0
    }
  }
  const handleReady = (event: any) => {
    videoPlayer.current = event.target
  }
  const handleLike = () => {
    const likeCount = likes + 1
    updateVideoLike(videoId, likeCount)
    console.log(likeCount)
  }
  const handleAddNote = () => {
    if (videoPlayer.current) {
      const currentTime = videoPlayer.current?.playerInfo.currentTime
      const duration = convertTimeToDuration(currentTime)
      setNote(currentUser?.uid, videoId, {
        videoId: videoId,
        uid: currentUser?.uid,
        time: duration,
        title: 'New Note',
        description: 'New Note Description jsnkjn'
      })
    }
  }
  const updatePlayerTime = (time: number) => {
    if (videoPlayer.current) {
      console.log(time)
      videoPlayer.current.seekTo(time)
      videoPlayer.current.playVideo()
    }
  }