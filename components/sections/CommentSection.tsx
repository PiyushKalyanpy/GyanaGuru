import Image from 'next/image'
import { ReactEmojiButton } from '../components'
import { calculateTime } from '@/util/calculateTime'
import { Emoji, EmojiStyle } from 'emoji-picker-react'
import { useState, useContext } from 'react'
import { useAuth } from '@/context/AuthContext'
import { CourseContext } from '@/context/CourseContext'

const CommentSection = ({ comments, videoId }: any) => {
  const sampleCommnet = {
    userProfileUrl: '/images/empty_profile.png',
    userName: 'John Doe',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    time: '2021-09-01T12:00:00.000Z',
    likes: 10,
    dislikes: 2,
    reactions: [
      {
        reactionIcon: '1fac0',
        reactionCount: 10
      },
      {
        reactionIcon: '1f609',
        reactionCount: 10
      },
      {
        reactionIcon: '1fac0',
        reactionCount: 10
      }
    ]
  }
  const { currentUser } = useAuth()
  const { addComment } = useContext(CourseContext)
  const [userComment, setUserComment] = useState({
    uid: currentUser.uid,
    name: currentUser.displayName,
    photoURL: currentUser.photoURL,
    comment: '',
    createdAt: new Date().toISOString(),
    replies: [],
    videoId: videoId || 'empty',
    reactions: []
  })
  const handleCommentClick = () => {
    addComment(videoId, userComment)
    setUserComment({ ...userComment, comment: '' })
  }

  return (
    <div className='flex flex-col  border bg-white rounded-2xl overflow-hidden h-full justify-between'>
      <div className='flex items-center justify-between space-x-4 bg-zinc-200 px-4 py-2'>
        <p className='text-lg font-medium text-zinc-700'>Comments</p>
        <p className='text-lg font-medium text-zinc-700'>
          {comments && comments.length}
        </p>
      </div>
      <div className='flex flex-col space-y-6 bg-white p-4 h-full overflow-y-scroll'>
        {comments ? null : (
          <p className='text-lg text-center font-medium text-zinc-700 h-full'>
            Be the first to comment
          </p>
        )}

        {!comments || Object.values(comments).length === 0 ? (
          <p className='text-lg text-center font-medium text-zinc-700 h-full'>
            Be the first to comment
          </p>
        ) : (
          Object.values(comments).map((commentItem: any) => {
            return (
              <>
                {Object.values(commentItem).map((comment: any) => {
                  return (
                    <SingleCommentThread
                      key={2}
                      comments={comment.comment}
                      videoId={videoId}
                    />
                  )
                })}
              </>
            )
          })
        )}
      </div>
      <div className='flex items-center space-x-4 w-full bg-zinc-100 p-2'>
        <div className=''>
          <Image
            src={currentUser?.photoURL || '/images/empty_profile.png'}
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
    </div>
  )
}

const SingleCommentThread = ({ comments }: any) => {
  let {
    photoURL,
    name,
    comment,
    createdAt,
    likes,
    dislikes,
    replies,
    reactions
  } = comments
  const timeInAgoFormat = calculateTime(createdAt)

  return (
    <div className='flex w-full'>
      <div className='flex items-center space-x-4 w-full'>
        <div className='flex flex-col space-y-2 w-full'>
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
            <h1 className='text-md font-archivo font-medium'>{name}</h1>
            <p>·</p>
            <p className='text-sm text-zinc-500'>{timeInAgoFormat}</p>
          </div>
          <p className='text-sm text-zinc-900'>{comment}</p>
          <div className='flex justify-between items-center '>
            <div className='flex space-x-2'>
              <ReactEmojiButton />
             { reactions && <ReactionsDisplay reactions={reactions} />}
            </div>
            {/* reply button */}
            <button className='text-sm text-zinc-500 hover:text-blue-500'>
              Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const ReactionsDisplay = ({ reactions }: any) => {
  return (
    <div className='flex border-2 rounded-xl w-fit space-x-1 items-center p-1 cursor-pointer'>
      {/* limit reactions to 3 and if exceed show +{other reaction count} */}
      {reactions && reactions.map((reaction: any) => {
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
    </div>
  )
}

export default CommentSection
