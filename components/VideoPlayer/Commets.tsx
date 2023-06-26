import Image from 'next/image';
import { useEffect, useState } from 'react';

const Commets = () => {
  const comments = [
    {
      id: 1,
      text: " Wow, this course has been eye-opening! I've been a web developer for a few years, but I never knew about this technique. It's going to save me so much time and effort. Thank you for sharing this valuable information!",
      dateCreated: '2021-09-01',
      videoId: 1,
      likes: 2,
      dislikes: 0,
      replies: 0,
      createdBy: {
        id: 1,
        name: 'Shimika Jain',
        profileImage:
          'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      },
      reactions: [
        {
          id: 1,
          userId: 1,
          type: 'like',
        },
        {
          id: 2,
          userId: 2,
          type: 'dislike',
        },
      ],
    },
    {
      id: 2,
      text: "@David Wilson I totally agree! This technique has been a game-changer for me too. It's incredible how one small tip can make such a big difference in our workflows. Kudos to the instructor for introducing it!",
      dateCreated: '2021-09-01',
      videoId: 1,
      likes: 2,
      dislikes: 0,
      replies: 0,
      createdBy: {
        id: 1,
        name: 'Rufi Chauhan',
        profileImage:
          'https://images.unsplash.com/photo-1563671889-7bfa8c578a7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      },
      reactions: [
        {
          id: 1,
          userId: 1,
          type: 'like',
        },
        {
          id: 2,
          userId: 2,
          type: 'dislike',
        },
      ],
    },
    {
      id: 3,
      text: "@Robert Jackson Great suggestion! Adding coding challenges and projects to the course is something we've been planning. Stay tuned for upcoming videos where you'll get more hands-on experience. Thanks for the feedback!",
      dateCreated: '2021-09-01',
      videoId: 1,
      likes: 2,
      dislikes: 0,
      replies: 0,
      createdBy: {
        id: 1,
        name: 'Aman Verma',
        profileImage:
          'https://images.unsplash.com/flagged/photo-1578507054195-f96dec3a8b14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
      },
      reactions: [
        {
          id: 1,
          userId: 1,
          type: 'like',
        },
        {
          id: 2,
          userId: 2,
          type: 'dislike',
        },
      ],
    },
    {
      id: 4,
      text: "@Robert Jackson Great suggestion! Adding coding challenges and projects to the course is something we've been planning. Stay tuned for upcoming videos where you'll get more hands-on experience. Thanks for the feedback!",
      dateCreated: '2021-09-01',
      videoId: 1,
      likes: 2,
      dislikes: 0,
      replies: 0,
      createdBy: {
        id: 1,
        name: 'Aman Verma',
        profileImage:
          'https://images.unsplash.com/flagged/photo-1578507054195-f96dec3a8b14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
      },
      reactions: [
        {
          id: 1,
          userId: 1,
          type: 'like',
        },
        {
          id: 2,
          userId: 2,
          type: 'dislike',
        },
      ],
    },
  ];
  const [commentText, setCommentText] = useState('');
  const [commentLength, setCommentLength] = useState(0);

  useEffect(() => {
    setCommentLength(commentText.length);
  }, [commentText]);

  return (
    <div className="relative w-full h-full space-y-4 ">
      {/* comment input  */}
      <div className="sticky top-0 pt-4 pb-4 bg-zinc-100 dark:bg-zinc-800">
        <div className="flex px-2 py-2 bg-white dark:bg-zinc-900 rounded-xl">
          <div className="flex flex-row items-center justify-between w-full ">
            {/* user profile image  */}
            <div className="flex w-full space-x-4 ">
              <div className="w-8 h-8">
                <Image
                  src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt="user profile image"
                  quality={50}
                  width={100}
                  height={100}
                  className="object-cover w-full h-full rounded-full "
                />
              </div>
              <input
                className="w-full outline-none dark:bg-zinc-900"
                type="text"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Add a comment..."
              />
            </div>
            <span
              className={
                `cursor-pointer material-icons  hover:text-black transition` +
                (commentLength != 0 ? 'text-black' : 'text-zinc-400')
              }
            >
              send
            </span>
          </div>
        </div>
      </div>
      {/* comments  */}
      <div className="flex flex-col space-y-8 ">
        {comments.map((comment) => (
          <SingleComment key={comment.id} {...comment} />
        ))}
      </div>
    </div>
  );
};

const SingleComment = (comment: unknown) => {
  let {
    id,
    text,
    dateCreated,
    videoId,
    likes,
    dislikes,
    replies,
    createdBy,
    reactions,
  }: any = comment;
  // created by is an object -> {id, name, profileImage}

  const convertDateToAgoFormat = (date: string) => {
    const seconds = Math.floor(
      (new Date().getTime() - new Date(date).getTime()) / 1000
    );
    let interval = seconds / 31536000;
    if (interval > 1) {
      return Math.floor(interval) + ' years ago';
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + ' months ago';
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + ' days ago';
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + ' hours ago';
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + ' minutes ago';
    }
    return Math.floor(seconds) + ' seconds ago';
  };
  let time = convertDateToAgoFormat(dateCreated);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [isDisliked, setIsDisliked] = useState(false);
  const [dislikeCount, setDislikeCount] = useState(dislikes);

  const handleLikeClick = () => {
    // if already liked then remove like
    setIsDisliked(false);
    setDislikeCount(dislikes--);
    likes = isLiked ? likes - 1 : likes + 1;
    setLikeCount(likes);
    setIsLiked(!isLiked);
  };

  const handleDislikeClick = () => {
    // if already disliked then remove dislike
    setIsLiked(false);
    setLikeCount(likes--);
    dislikes = isDisliked ? dislikes - 1 : dislikes + 1;
    setDislikeCount(dislikes);
    setIsDisliked(!isDisliked);
  };

  return (
    <div className="flex w-full space-x-4 ">
      {/* user profile image */}
      <div className="">
        <div className="w-10 h-10">
          <Image
            src={createdBy.profileImage}
            alt="user profile image"
            quality={50}
            width={100}
            height={100}
            className="object-cover w-full h-full rounded-full "
          />
        </div>
      </div>
      {/* comment details  */}
      <div className="flex flex-col space-y-3 ">
        {/* name and time */}
        <div className="flex flex-row space-x-2">
          <p className="font-medium">{createdBy.name}</p>
          <p>·</p>
          <p>{time}</p>
        </div>
        {/* comment text */}
        <div>
          {/* show @ name with violet color */}
          <div className="text-sm font-inter line-clamp-3">{text}</div>
        </div>
        {/* likes, dislikes and reactions */}
        <div className="flex space-x-4">
          <div className="flex space-x-2">
            <span
              onClick={handleLikeClick}
              className={`cursor-pointer material-icons ${
                isLiked ? 'text-blue-500' : 'text-zinc-800'
              }`}
            >
              thumb_up{isLiked ? '' : '_off'}_alt
            </span>

            <p>{likeCount}</p>
          </div>
          <div className="flex space-x-2">
            <span
              onClick={handleDislikeClick}
              className={`cursor-pointer material-icons ${
                isDisliked ? 'text-rose-950' : 'text-zinc-800'
              }`}
            >
              thumb_down{isDisliked ? '' : '_off'}_alt
            </span>

            <p>{dislikeCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commets;
