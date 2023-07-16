import Image from 'next/image'
import { ReactEmojiButton } from '../components'
import { calculateTime } from '@/util/calculateTime'
import { Emoji, EmojiStyle } from 'emoji-picker-react'
import { useState, useContext, useEffect } from 'react'
import { useAuth } from '@/context/AuthContext'
import { CourseContext } from '@/context/CourseContext'
import { showToast } from '../util/Toast'

const CommentContainer = ({ comments, videoId }: any) => {
  const { currentUser } = useAuth()
  const { addComment, deleteComment } = useContext(CourseContext)
  const [userComment, setUserComment] = useState({
    uid: currentUser.uid,
    name: currentUser.name,
    photoURL: currentUser.photoURL,
    comment: '',
    createdAt: new Date().toISOString(),
    replies: [],
    videoId: videoId || 'empty',
    reactions: []
  })
  console.log(userComment)
  const handleCommentClick = () => {
    addComment(videoId, userComment)
    setUserComment({ ...userComment, comment: '' })
  }

  return (
    <div className='flex flex-col w-full  border bg-white rounded-2xl overflow-hidden h-full justify-between'>
      <div className='flex items-center justify-between space-x-4 bg-zinc-100 px-4 py-2'>
        <p className='text-lg font-medium text-zinc-700'>Comments</p>
        <p className='text-lg font-medium text-zinc-700'>
          {comments && comments.length}
        </p>
      </div>
      {/* current user comment input */}
      <div className='flex items-center space-x-4 w-full bg-zinc-100 p-2'>
        <div className=''>
          <Image
            src={currentUser?.photoURL || '/images/empty_profile.webp'}
            alt='user'
            width={50}
            height={50}
            className='rounded-full filter zincscale'
          />
        </div>
        <input
          type='text'
          value={userComment.comment}
          onChange={e =>
            setUserComment({ ...userComment, comment: e.target.value })
          }
          placeholder='Add a public comment...'
          className='w-full border-none focus:ring-0 bg-transparent text-black outline-none'
        />
        {/* send button */}
        <button
          onClick={handleCommentClick}
          className={`text-sm  hover:text-black ${
            userComment ? 'text-black' : 'text-zinc-500'
          }`}
        >
          <span className='material-symbols-outlined'>send</span>
        </button>
      </div>
      <div className='flex flex-col space-y-6 bg-white p-4 h-full overflow-y-scroll hide-scrollbar'>
        {!comments || Object.values(comments).length === 0 ? (
          <p className='text-lg text-center font-medium text-zinc-700 h-full'>
            Be the first to comment
          </p>
        ) : (
          <>
            {comments &&
              Object.entries(comments).map(([key, commentItem]: any) => {
                return (
                  <>
                    {commentItem && (
                      <SingleCommentThread
                        comments={commentItem.comment}
                        videoId={videoId}
                        commentId={key}
                        key={key}
                        currentUser={currentUser}
                        deleteComment={deleteComment}
                      />
                    )}
                  </>
                )
              })}
          </>
        )}
      </div>
    </div>
  )
}

const SingleCommentThread = ({
  comments,
  videoId,
  commentId,
  deleteComment,
  currentUser
}: any) => {
  let {
    photoURL,
    name,
    comment,
    createdAt,
    likes,
    dislikes,
    replies,
    reaction
  } = comments
  let timeInAgoFormat = calculateTime(createdAt)
  const [isOptionVisible, setIsOptionVisible] = useState(false)
  const onOptionClick = (e: any, option: string) => {
    if (option === 'reply') {
      showToast('Replying to comment is not available yet', 'info')
    }
    if (option === 'delete') {
      if (currentUser.uid !== comments.uid) {
        showToast('You are not authorized to delete this comment', 'error')
        return
      }
      // showToast('Deleting comment is not available yet', 'info')
      deleteComment(videoId, commentId, comments)
    }
  }

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (e.target.id !== 'comment_option') {
        setIsOptionVisible(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
  }, [])

  return (
    <div className='flex w-full'>
      <div className='flex items-center space-x-4 w-full'>
        <div className='flex flex-col space-y-2 w-full'>
          {/* comment header - user details and time */}
          <div className='flex justify-between items-center '>
            <div className='flex items-center space-x-4'>
              <div>
                <Image
                  src={photoURL}
                  alt='user'
                  width={40}
                  height={40}
                  className='rounded-full filter zincscale'
                />
              </div>
              <div className='flex space-x-1 items-center'>
                <h1 className='text-md font-archivo font-medium'>{name}</h1>
                <p>·</p>
                <p className='text-sm text-zinc-500'>{timeInAgoFormat}</p>
              </div>
            </div>
            <div className='relative'>
              <button onClick={() => setIsOptionVisible(!isOptionVisible)}>
                <span
                  id='comment_option'
                  className='material-symbols-outlined cursor-pointer'
                >
                  more_vert
                </span>
              </button>

              {isOptionVisible ? (
                <div className='absolute z-10 top-10 right-0 bg-white rounded-xl  shadow-lg p-4 space-y-2'>
                  <button
                    onClick={e => onOptionClick(e, 'reply')}
                    className='flex  items-center space-x-2  p-2   text-sm text-zinc-900 cursor-pointer hover:text-blue-600'
                  >
                    <span className='material-symbols-outlined'>reply</span>
                    <span>Reply</span>
                  </button>
                  {currentUser.uid === comments.uid && (
                    <button
                      onClick={e => onOptionClick(e, 'delete')}
                      className='flex  items-center space-x-2 p-2  text-sm text-zinc-900 cursor-pointer hover:text-rose-600'
                    >
                      <span className='material-symbols-outlined'>delete</span>
                      <span>Delete</span>
                    </button>
                  )}
                </div>
              ) : null}
            </div>
          </div>
          {/* comment text */}
          <p className='text-sm text-zinc-900'>{comment}</p>
          {/* reaction on comment */}
          <div className='flex justify-between items-center '>
            <div className='flex space-x-2'>
              <ReactEmojiButton videoId={videoId} commentId={commentId} />
              {reaction && <ReactionsDisplay reactions={reaction} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ReactionsDisplay = ({ reactions }: any) => {
  const length = Object.keys(reactions).length
  const [totalReactionCount, setTotalReactionCount] = useState(0)

  useEffect(() => {
    const calculateTotalReactionCount = () => {
      let count = 0
      Object.entries(reactions).forEach(([key, reaction]: any) => {
        count += reaction.reactionCount
      })
      setTotalReactionCount(count)
    }

    calculateTotalReactionCount()
  }, [reactions])

  return (
    <div className='flex border-2 rounded-xl w-fit space-x-1 items-center p-1 cursor-pointer'>
      {Object.entries(reactions)
        .slice(0, 3)
        .map(([key, reaction]: any) => {
          return (
            <div
              key={reaction.reactionIcon}
              className='hover:scale-110 transition active:scale-50'
            >
              <Emoji
                unified={reaction.reactionIcon}
                emojiStyle={EmojiStyle.NATIVE}
                size={16}
              />
            </div>
          )
        })}
      {totalReactionCount > 3 && (
        <div className='flex'>
          <p>+ </p>
          <p>{totalReactionCount - 3}</p>
        </div>
      )}
    </div>
  )
}

export default CommentContainer
