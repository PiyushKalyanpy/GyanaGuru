import {useRouter} from 'next/router'
import {useContext, useEffect, useRef, useState} from 'react'
import {CourseContext} from '@/context/CourseContext'
import YouTube from 'react-youtube'
import {ToastContainer} from 'react-toastify'
import {
	BackNavButton,
	CommentSection,
	NotesContainer,
	PdfCard,
	PdfContainer,
	ReactEmojiButton,
	VideoNoteCard,
} from '@/components/components'
import {AuthContext} from '@/context/AuthContext'
import {
	handleReady,
	handleLike,
	handleDislike,
	handleShare,
	handleAddNote,
	updatePlayerTime,
} from '@/components/handlers/videoHandlers'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
	faGithub,
	faWhatsapp,
	faFacebook,
	faTwitter,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

const VideoPlayer = () => {
	const router = useRouter()
	const {videoId} = router.query
	const {
		videos,
		updateVideoLike,
		getComments,
		updateUserCharge,
		updateVideoDislike,
		comments,
		getNote,
		notes,
		setNote,
	} = useContext(CourseContext)
	const {currentUser} = useContext(AuthContext)
	const video = videos.find((video: any) => video.id === videoId)
	const videoPlayer: any = useRef(null)
	const {
		name,
		description,
		createdBy,
		likedBy,
		dislikedBy,
		dislikes,
		likes,
		viewCount,
		duration,
		imageUrl,
		url,
	} = video || {}

	const isLiked = likedBy?.includes(currentUser?.uid)
	const isDisliked = dislikedBy?.includes(currentUser?.uid)
	console.log('video', isDisliked, isLiked)

	useEffect(() => {
		getComments(videoId)
		getNote(currentUser?.uid, videoId)
	}, [])

	const videoYTId = url?.split('v=')[1]
	const opts = {
		height: '100%',
		width: '100%',

		playerVars: {
			autoplay: 0,
		},
	}
	const [showModal, setShowModal] = useState(false)

	const videoActions = {
		videoLikes: likes,
		handleLike: () => handleLike({videoId, likes, updateVideoLike}),
		handleDislike: () => handleDislike({videoId, dislikes, updateVideoDislike}),
		handleShare: () => {
			setShowModal(!showModal)
		},
		handleNote: () =>
			handleAddNote({
				videoPlayer,
				currentUser,
				videoId,
				setNote,
			}),
		handleCharge: () => {
			updateUserCharge(videoId)
		},
		handleMore: () => {},
	}

	return (
		<div className="min-h-screen">
			<ToastContainer />

			<div className="w-screen h-full overflow-y-scroll bg-transparent lg:h-screen bg-zinc-100 dark:bg-zinc-900">
				{/* top bar with title and buttons */}
				<div className="hidden lg:flex">
					<div className="flex items-center px-4 pt-4 space-x-4 bg-transparent dark:bg-zinc-800 w-fit rounded-t-4xl">
						<span
							onClick={() => router.back()}
							className="p-4 text-sm bg-white rounded-full cursor-pointer dark:bg-zinc-900 dark:text-white material-icons text-zinc-600">
							arrow_back_ios_new
						</span>
						<h1 className="px-4 pr-8 text-xl font-archivo">
							{/* {curretPlaylist && curretPlaylist[0].name} */}
							{name}
						</h1>
					</div>
					<div className="w-20 bg-transparent dark:bg-zinc-800">
						<div className="w-full h-full bg-transparent dark:bg-zinc-900 rounded-bl-4xl"></div>
					</div>
				</div>
				{/* video content with comment + notes */}
				<div className="flex flex-col w-full h-full pb-10 bg-transparent border-red-500 lg:flex-row border-3 dark:bg-zinc-800 rounded-bl-2xl rounded-r-3xl">
					<div className="flex p-4 lg:hidden">
						<BackNavButton />
					</div>
					<div className="flex flex-col h-full lg:w-3/4 hide-scrollbar">
						{/* video section */}
						<div className="w-full h-full">
							<div className="flex flex-col p-4 space-y-4 h-5/6">
								<div className="relative w-full h-[300px] lg:h-[500px] overflow-hidden rounded-3xl bg-transparent">
									<div className="absolute z-10 text-white top-1/2 left-1/2">
										<button
											onClick={() =>
												handleAddNote({
													videoPlayer,
													currentUser,
													videoId,
													setNote,
												})
											}
											className="flex items-center p-1 rounded-full cursor-pointer hover:bg-zinc-100/20">
											<span className="material-symbols-outlined">add</span>
										</button>
									</div>
									<YouTube
										iframeClassName="absolute z-0"
										videoId={videoYTId}
										opts={opts}
										onReady={(e) => handleReady(e, videoPlayer)}
										className="w-full h-full"
										onPause={(e) => {
											const playerInfo = e.target.playerInfo
											const currentTime = playerInfo.currentTime
											e.target.seekTo(currentTime + 40)
										}}
									/>
								</div>
								<VideoButttons videoActions={videoActions} />
								<ShareModal showModal={showModal} setShowModal={setShowModal} />
							</div>
							{/* video details */}
							<div className="flex flex-col p-4 space-y-4">
								<div className="flex items-center justify-between">
									<div className="flex flex-col items-start space-y-4 lg:flex-row lg:space-x-4">
										<div className="flex items-center space-x-4">
											<img
												src={imageUrl}
												alt=""
												className="w-12 h-12 rounded-full"
											/>
											<div className="flex flex-col">
												<h1 className="lg:text-lg font-archivo">{name}</h1>
											</div>
										</div>
										<div className="flex items-center space-x-4">
											<span className="text-sm text-gray-500">
												{viewCount} views
											</span>
											<span className="text-sm text-gray-500">
												{duration} mins
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* comments section  */}
						<div className="w-full h-full p-4 space-y-10 lg:grid grid-row-2 ">
							<div className="w-full h-full">
								<CommentSection videoId={videoId} comments={comments} />
							</div>
						</div>
					</div>
					{/* right sidebar */}
					<aside className="flex flex-col p-4 space-y-6 lg:w-1/4">
						<PdfContainer />
						<NotesContainer
							notes={notes}
							updatePlayerTime={(time: any) =>
								updatePlayerTime({videoPlayer, time})
							}
						/>
					</aside>
				</div>
			</div>
		</div>
	)
}

const ShareModal = ({showModal, setShowModal}: any) => {
	const videoUrl = window.location.href

	const handleCopyToClipboard = () => {
		navigator.clipboard.writeText(videoUrl)
		alert('Link copied to clipboard!')
	}

	const handleShareOnWhatsApp = () => {
		const message = `Check out this amazing video: ${videoUrl}`
		const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
			message,
		)}`
		window.open(whatsappUrl, '_blank')
	}

	const handleShareOnInstagram = () => {
		const instagramUrl = `https://www.instagram.com/share?url=${encodeURIComponent(
			videoUrl,
		)}`
		window.open(instagramUrl, '_blank')
	}

	const handleShareOnGmail = () => {
		const subject = 'Check out this video!'
		const body = `Hey, I found this awesome video and thought you might like it:\n${videoUrl}`
		const gmailUrl = `mailto:?subject=${encodeURIComponent(
			subject,
		)}&body=${encodeURIComponent(body)}`
		window.location.href = gmailUrl
	}

	const handleShareOnFacebook = () => {
		const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
			videoUrl,
		)}`

		window.open(facebookUrl, '_blank')
	}

	const handleShareOnTwitter = () => {
		const tweetText = `Check out this awesome video: ${videoUrl}`
		const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
			tweetText,
		)}`
		window.open(twitterUrl, '_blank')
	}
	const shareButtons = `flex items-center justify-center w-fit  bg-zinc-100/20 hover:bg-zinc-100 p-4 rounded-full`

	return (
		<div>
			{showModal && (
				<div className="fixed top-0 bottom-0 z-10 left-0 right-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
					<div className="p-4 bg-white rounded-2xl">
						<h3 className="mb-4 text-xl font-bold">Share Video</h3>
						<div className="flex flex-wrap space-x-4">
							<button
								className={`${shareButtons}`}
								onClick={handleCopyToClipboard}>
								<span className="material-symbols-outlined">content_copy</span>
							</button>
							<button
								className={`${shareButtons} hover:text-green-500`}
								onClick={handleShareOnWhatsApp}>
								<FontAwesomeIcon icon={faWhatsapp} />
							</button>
							<button
								className={`${shareButtons} `}
								onClick={handleShareOnInstagram}>
								<FontAwesomeIcon icon={faInstagram} />
							</button>
							<button
								className={`${shareButtons}`}
								onClick={handleShareOnFacebook}>
								<FontAwesomeIcon icon={faFacebook} />
							</button>
							<button
								className={`${shareButtons}`}
								onClick={handleShareOnGmail}>
								<FontAwesomeIcon icon={faEnvelope} />
							</button>
							<button
								className={`${shareButtons}`}
								onClick={handleShareOnTwitter}>
								<FontAwesomeIcon icon={faTwitter} />
							</button>

							{/* Add more share buttons as needed */}
						</div>
						<button
							className="px-4 py-2 mt-4 text-white bg-gray-500 rounded-full"
							onClick={() => setShowModal(false)}>
							Close
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

const VideoButttons = ({videoActions}: any) => {
	const {
		videoLikes,
		handleLike,
		handleDislike,
		handleShare,
		handleNote,
		handleCharge,
		handleMore,
	} = videoActions

	const videoButtonStyle =
		'flex items-center space-x-2 px-4 px-2 rounded-full  hover:bg-zinc-100 transition active:bg-zinc-300'
	return (
		<div className="flex p-4 space-x-4 bg-white rounded-xl">
			<div onClick={handleNote}>
				<button className="flex items-center px-4 py-2 text-white bg-black rounded-full hover:bg-zinc-900">
					<span className="material-symbols-outlined">add</span>
					<span className="text-sm">Note</span>
				</button>
			</div>
			<div className="flex items-center px-4 py-2 space-x-2 rounded-full w-fit h-fit bg-zinc-100 ">
				<button onClick={handleLike} className="flex items-center space-x-2">
					<span className="material-symbols-outlined">thumb_up</span>
					<span className="text-sm">{videoLikes && videoLikes}</span>
				</button>
				<hr className="w-[1px] h-4 bg-zinc-400" />
				<button onClick={handleDislike} className="flex items-center space-x-2">
					<span className="material-symbols-outlined">thumb_down</span>
				</button>
			</div>
			<button onClick={handleShare} className={`${videoButtonStyle} `}>
				<span className="material-symbols-outlined">share</span>
				<span className="text-sm">Share</span>
			</button>
			<button onClick={handleCharge} className={`${videoButtonStyle}`}>
				<span
					className="material-symbols-rounded text-transparent bg-gradient-to-t from-red-500 via-orange-500 to-yellow-500 bg-clip-text"
					style={{
						fontVariationSettings: "'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 58",
					}}>
					bolt
				</span>
				<span className="text-sm">Charge</span>
			</button>
			<button onClick={handleMore} className={`${videoButtonStyle}`}>
				<span className="material-symbols-outlined">more_horiz</span>
			</button>
		</div>
	)
}

export default VideoPlayer
