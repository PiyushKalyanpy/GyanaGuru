export interface Category {
	id: number
	name: string
	description: string
	imageUrl: string
}

export interface Reaction {
	id: number
	name: string
	description: string
	imageUrl: string
	dateCreated: Date
	dateModified: Date
}

export interface User {
	id: number
	name: string
	email: string
	password: string
	imageUrl: string
	dateCreated: Date
	dateModified: Date
	role: string
	likedVideos: Video[]
	dislikedVideos: Video[]
	savedVideos: Video[]
	playlists: Playlist[]
	likedComments: Comment[]
	dislikedComments: Comment[]
	likedReplies: Comment[]
	dislikedReplies: Comment[]
	likedReactions: Reaction[]
	dislikedReactions: Reaction[]
	likedPlaylist: Playlist[]
	dislikedPlaylist: Playlist[]
	likedCategory: Category[]
	dislikedCategory: Category[]
}

export interface Comment {
	id: number
	text: string
	videoId: number
	likes: number
	dislikes: number
	replies: Comment[]
	createdBy: User
	createdAt: Date
	reactions: Reaction[]
}

export interface Video {
	id: number
	name: string
	description: string
	imageUrl: string
	categoryId: string
	viewCount: number
	dateCreated: Date
	rating: number
	url: string
	playlistId: string
	comments: Comment[]
	restriction: number
	createdBy: string
	likes: number
	saved: boolean
	duration: number
}

export interface Playlist {
	id: number
	name: string
	description: string
	imageUrl: string
	categoryId: string
	numberOfVideos: number
	viewCount: number
	dateCreated: Date
	rating: number
	noOfVotes: number
	videos: Video[]
	restriction: number
	createdBy: string
}
