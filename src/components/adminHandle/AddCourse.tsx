import React, {useState} from 'react'
import {CourseContext} from '@/context/CourseContext'
import {useContext} from 'react'
import {AuthContext} from '@/context/AuthContext'
import {showToast} from '../util/Toast'

const AddCourseItems = () => {
	const [addingOption, setAddingOption] = useState(1)
	const {addPlaylist, addCategory, categories, addVideo, playlist} =
		useContext(CourseContext)
	const {currentUser} = useContext(AuthContext)

	return (
		<div className="flex flex-col w-full h-full gap-4 p-4 dark:bg-zinc-900">
			<div className="">
				<AdditionOptions active={addingOption} setActive={setAddingOption} />
			</div>
			<div className="w-full h-full bg-white dark:bg-zinc-800 rounded-xl ">
				{(() => {
					if (addingOption == 1)
						return <AddCategory addCategory={addCategory} />
					if (addingOption == 2)
						return (
							<AddPlaylist
								categories={categories}
								currentUser={currentUser}
								addPlaylist={addPlaylist}
							/>
						)
					if (addingOption == 3)
						return (
							<AddVideo
								addVideo={addVideo}
								categories={categories}
								playlists={playlist}
								currentUser={currentUser}
							/>
						)
				})()}
			</div>
		</div>
	)
}

const AdditionOptions = ({active, setActive}: any) => {
	return (
		<div className="flex justify-around w-full gap-4 p-2 bg-white rounded-xl dark:bg-zinc-800 ">
			<button
				onClick={() => setActive(1)}
				className={`flex rounded-xl p-2 justify-center transition hover:bg-zinc-100 dark:hover:bg-zinc-900 w-full ${
					active == 1 ? 'bg-black text-white hover:bg-zinc-800' : ''
				} `}>
				Add a new Category
			</button>
			<button
				onClick={() => setActive(2)}
				className={`flex rounded-xl dark:hover:bg-zinc-900 p-2 justify-center transition hover:bg-zinc-100 w-full ${
					active == 2 ? 'bg-black text-white hover:bg-zinc-800' : ''
				} `}>
				Add a new Playlist
			</button>
			<button
				onClick={() => setActive(3)}
				className={`flex rounded-xl p-2 dark:hover:bg-zinc-900 justify-center transition hover:bg-zinc-100 w-full ${
					active == 3 ? 'bg-black text-white hover:bg-zinc-800' : ''
				} `}>
				Add a new Video
			</button>
		</div>
	)
}

//  form for adding new category
const AddCategory = ({addCategory}: any) => {
	const [category, setCategory] = useState({
		name: '',
		description: '',
		imageUrl: '',
	})

	const isFormFilled =
		category.name.length > 0 &&
		category.description.length > 0 &&
		category.imageUrl.length > 0

	const handleSubmit = (e: any) => {
		e.preventDefault()
		isFormFilled
			? addCategory(category)
			: showToast('Please fill all fields', 'error')
		// clear all the fields
		setCategory({
			name: '',
			description: '',
			imageUrl: '',
		})
	}
	return (
		<div className="w-full m-5 ">
			<div className="flex justify-center">
				<form className="w-1/2">
					<div className="flex flex-col gap-4">
						<label className="text-lg font-medium ">Category Name</label>
						<input
							type="text"
							value={category.name}
							onChange={(e) => setCategory({...category, name: e.target.value})}
							className="p-2 border-2 rounded-lg border-zinc-100"
						/>

						<label className="text-lg font-medium ">Thumbnail Image URL</label>
						<input
							type="text"
							value={category.imageUrl}
							onChange={(e) =>
								setCategory({
									...category,
									imageUrl: e.target.value,
								})
							}
							className="p-2 border-2 rounded-lg border-zinc-100"
						/>
						<label className="text-lg font-medium ">Category Description</label>
						<textarea
							className="p-2 border-2 rounded-lg border-zinc-100"
							rows={4}
							value={category.description}
							onChange={(e) =>
								setCategory({
									...category,
									description: e.target.value,
								})
							}></textarea>
						<button
							type="submit"
							onClick={handleSubmit}
							className="p-2 text-white bg-black rounded-lg">
							Add Category
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

// form for adding new playlist
const AddPlaylist = ({addPlaylist, categories, currentUser}: any) => {
	const userId = currentUser && currentUser.uid
	const [playlist, setPlaylist] = useState({
		id: 0,
		name: '',
		description: '',
		imageUrl: '',
		categoryId: categories.length > 0 ? categories[0].id : '',
		numberOfVideos: 0,
		viewCount: 0,
		noOfVotes: 0,
		dateCreated: new Date(),
		rating: 0,
		videos: [],
		restriction: 1, // -1 for restricted, 0 for private, 1 for public
		createdBy: currentUser && currentUser.uid,
	})
	React.useEffect(() => {}, [playlist])

	const isPlaylistFormFilled = () => {
		return (
			playlist.name.length > 0 &&
			playlist.description.length > 0 &&
			playlist.imageUrl.length > 0 &&
			playlist.categoryId.length > 0
		)
	}

	const handleSubmit = (e: any) => {
		e.preventDefault()
		isPlaylistFormFilled()
			? addPlaylist(playlist)
			: showToast('Please fill all fields', 'error')
		// clear all the fields
		setPlaylist({
			id: 0,
			name: '',
			description: '',
			imageUrl: '',
			categoryId: categories.length > 0 ? categories[0].id : '',
			numberOfVideos: 0,
			viewCount: 0,
			noOfVotes: 0,
			dateCreated: new Date(),
			rating: 0,
			videos: [],
			restriction: 1, // -1 for restricted, 0 for private, 1 for public
			createdBy: currentUser && currentUser.uid,
		})
	}
	return (
		<div className="w-full m-5 ">
			<div className="flex justify-center">
				<form className="w-1/2">
					<div className="flex flex-col gap-4">
						<label className="text-lg font-medium ">Select Category</label>
						{/* dropdown for selecting category */}
						<select
							className="p-2 border-2 rounded-lg border-zinc-100"
							value={playlist.categoryId}
							onChange={(e) =>
								setPlaylist({
									...playlist,
									categoryId: e.target.value,
								})
							}>
							{categories.map((category: any) => (
								<option key={category.id} value={category.id}>
									{category.name}
								</option>
							))}
						</select>

						<label className="text-lg font-medium ">Playlist Name</label>
						<input
							type="text"
							value={playlist.name}
							onChange={(e) => setPlaylist({...playlist, name: e.target.value})}
							className="p-2 border-2 rounded-lg border-zinc-100"
						/>

						<label className="text-lg font-medium ">Thumbnail Image URL</label>
						<input
							type="text"
							value={playlist.imageUrl}
							onChange={(e) =>
								setPlaylist({
									...playlist,
									imageUrl: e.target.value,
								})
							}
							className="p-2 border-2 rounded-lg border-zinc-100"
						/>
						<label className="text-lg font-medium ">Category Description</label>
						<textarea
							className="p-2 border-2 rounded-lg border-zinc-100"
							rows={4}
							value={playlist.description}
							onChange={(e) =>
								setPlaylist({
									...playlist,
									description: e.target.value,
								})
							}></textarea>

						{/* three radio buttons to select public private and restricted  */}
						<div className="flex w-full gap-4">
							<label className="flex justify-center w-full p-2 border-2 rounded-lg border-zinc-100">
								<input
									type="radio"
									value="public"
									checked={playlist.restriction === 1}
									onChange={(e) =>
										setPlaylist({
											...playlist,
											restriction: 1,
										})
									}
								/>
								Public
							</label>

							<label className="flex justify-center w-full p-2 border-2 rounded-lg border-zinc-100">
								<input
									className=""
									type="radio"
									value="private"
									checked={playlist.restriction === 0}
									onChange={(e) =>
										setPlaylist({
											...playlist,
											restriction: 0,
										})
									}
								/>
								Private
							</label>

							<label className="flex justify-center w-full p-2 border-2 rounded-lg border-zinc-100">
								<input
									type="radio"
									value="restricted"
									checked={playlist.restriction === -1}
									onChange={(e) =>
										setPlaylist({
											...playlist,
											restriction: -1,
										})
									}
								/>
								Restricted
							</label>
						</div>
						<button
							type="submit"
							onClick={handleSubmit}
							className="p-2 text-white bg-black rounded-lg active:bg-gray-700">
							Add Playlist
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

// form for adding new video
const AddVideo = ({addVideo, categories, playlists, currentUser}: any) => {
	const userId = currentUser && currentUser.uid
	const [video, setVideo] = useState({
		id: 0,
		name: '',
		description: '',
		imageUrl: '',
		categoryId: categories.length > 0 ? categories[0].id : '',
		viewCount: 0,
		createdAt: new Date(),
		rating: 0,
		url: '',
		playlistId: playlists.length > 0 ? playlists[0].id : '',
		comments: [],
		restriction: 1,
		createdBy: currentUser && currentUser.uid,
		likes: 0,
		duration: 0, // in seconds
	})
	const playlistBelongsCategory = playlists.filter(
		(playlist: any) => playlist.categoryId === video.categoryId,
	)

	const isVideoFormFilled = () => {
		return video.categoryId.length > 0 && video.playlistId.length > 0
	}

	const clearAll = () => {
		setVideo({
			id: 0,
			name: '',
			description: '',
			imageUrl: '',
			categoryId: categories.length > 0 ? categories[0].id : '',
			viewCount: 0,
			createdAt: new Date(),
			rating: 0,
			url: '',
			playlistId: playlists.length > 0 ? playlists[0].id : '',
			comments: [],
			restriction: 1,
			createdBy: currentUser && currentUser.uid,
			likes: 0,
			duration: 0, // in seconds
		})
	}
	const handleSubmit = (e: any) => {
		e.preventDefault()
		handleAddLink(e)
		if (isVideoFormFilled()) {
			addVideo(video)
			clearAll()
		} else {
			showToast('Please fill all the fields', 'error')
		}
	}

	const handleAddLink = async (e: any) => {
		e.preventDefault()
		const videoId = video.url.split('=')[1]
		const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`
		const response = await fetch(url)
		const data = await response.json()
		const videoData = data.items[0].snippet
		setVideo({
			...video,
			name: videoData.title,
			description: videoData.description,
			imageUrl: videoData.thumbnails.standard.url,
		})
	}

	return (
		<div className="w-full m-5 ">
			<div className="flex justify-center">
				<form className="w-1/2">
					<div className="flex flex-col gap-4">
						<label className="text-lg font-medium ">Select Category</label>
						{/* dropdown for selecting category */}
						<select
							className="p-2 border-2 rounded-lg border-zinc-100"
							value={video.categoryId}
							onChange={(e) =>
								setVideo({...video, categoryId: e.target.value})
							}>
							{categories.map((category: any) => (
								<option key={category.id} value={category.id}>
									{category.name}
								</option>
							))}
						</select>

						<label className="text-lg font-medium ">Select Playlist</label>
						{/* dropdown for selecting playlist */}
						<select
							className="p-2 border-2 rounded-lg border-zinc-100"
							value={video.playlistId}
							onChange={(e) =>
								setVideo({...video, playlistId: e.target.value})
							}>
							{playlistBelongsCategory.map((playlist: any) => (
								<option key={playlist.id} value={playlist.id}>
									{playlist.name}
								</option>
							))}
						</select>

						<label className="text-lg font-medium ">Video Link</label>
						<div className="flex w-full space-x-4">
							<input
								type="text"
								value={video.url}
								onChange={(e) => setVideo({...video, url: e.target.value})}
								className="flex w-full p-2 border-2 rounded-lg border-zinc-100"
							/>

							<button
								onClick={handleAddLink}
								className="flex p-3 space-x-4 text-white bg-black rounded-lg w-fit active:bg-gray-700">
								<span className="text-white material-icons"> add_link</span>
								{/* <p>Fetch Video</p> */}
							</button>
						</div>
						<button
							onClick={handleSubmit}
							className="flex p-3 space-x-4 text-white bg-black rounded-lg w-fit active:bg-gray-700">
							Handle Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default AddCourseItems
