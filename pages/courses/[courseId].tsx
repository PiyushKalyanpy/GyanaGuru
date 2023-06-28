import { useRouter } from 'next/router'

const VideoPlayer = () => {
  const router = useRouter()
  const { courseId } = router.query

  return <div>
    {courseId}
  </div>
}

export default VideoPlayer
