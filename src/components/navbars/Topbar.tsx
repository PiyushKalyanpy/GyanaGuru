import Image from 'next/image'
import {useState, useEffect, ChangeEvent, useContext} from 'react'
import {AuthContext} from '@/context/AuthContext'
import BackNavButton from '@/components/buttons/BackNavButton'
import {CourseContext} from '@/context/CourseContext'
import {DarkModeToggle} from '../components'

const Topbar = ({showBackIcon = false}) => {
	const {currentUser} = useContext(AuthContext)
	const [searchQuery, setSearchQuery] = useState('')
	const {isDBValveOpen, setIsDBValveOpen} = useContext(CourseContext)
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value)
	}

	useEffect(() => {
		let debounceTimer: string | number | NodeJS.Timeout | undefined

		const handleSearch = () => {}

		const debounceSearch = () => {
			clearTimeout(debounceTimer)
			debounceTimer = setTimeout(handleSearch, 300)
		}
		debounceSearch()
		return () => {
			clearTimeout(debounceTimer)
		}
	}, [searchQuery])

	if (!currentUser) return <div>Loading...</div>

	return (
		<div className="flex w-full p-4 h-fit z-10">
			<div className="flex justify-between w-full">
				{showBackIcon && <BackNavButton />}
				{/* Search bar  */}
				<SearchBar
					searchQuery={searchQuery}
					handleInputChange={handleInputChange}
				/>
				{/* database handler  */}
				{currentUser.email == 'kalyanpiyush560@gmail.com' && (
					<DBButton
						isDBValveOpen={isDBValveOpen}
						setIsDBValveOpen={setIsDBValveOpen}
					/>
				)}
				<DarkModeToggle />
				{/* Notificaton and profile  */}
				<div className="flex h-full gap-4 w-fit">
					<TopBarButtons iconAvailable={true} />
					<TopBarButtons
						imageAvailable={true}
						imageUrl={
							currentUser
								? currentUser.photoURL
									? currentUser.photoURL
									: '/images/empty_profile.png'
								: null
						}
					/>
					{/* <DarkModeToggle/> */}
				</div>
			</div>
		</div>
	)
}

const DBButton = ({isDBValveOpen, setIsDBValveOpen}: any) => {
	return (
		<div onClick={() => setIsDBValveOpen(!isDBValveOpen)} className="relative">
			<span
				className={`p-4 rounded-2xl material-symbols-outlined cursor-pointer  active:bg-zinc-200 bg-white `}>
				database
			</span>
			<div className="absolute top-2 right-2">
				<span className="relative flex h-3 w-3">
					<span
						className={`animate-ping absolute inline-flex h-full w-full rounded-full  opacity-75  ${
							isDBValveOpen ? 'bg-green-500' : ' bg-rose-500'
						} `}></span>
					<span
						className={`relative inline-flex rounded-full h-3 w-3   ${
							isDBValveOpen ? 'bg-green-500' : ' bg-rose-500'
						} `}></span>
				</span>
			</div>
		</div>
	)
}

interface SearchBarProps {
	searchQuery: string
	handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const SearchBar = ({searchQuery, handleInputChange}: SearchBarProps) => {
	return (
		<div className="flex flex-row items-center w-3/4 w-1/4 p-1 pl-4 pr-1 overflow-hidden dark:bg-zinc-800 bg-white  rounded-2xl h-fit font-archivo">
			<input
				type="text"
				placeholder="Search for courses"
				className="w-full p-2 text-xl bg-white dark:bg-zinc-800 border-0 outline-none font-archivo placeholder:font-archivo placeholder:font-light placeholder:text-zinc-400"
				value={searchQuery}
				onChange={handleInputChange}
			/>
			<span className="p-3 cursor-pointer rounded-xl material-icons dark:hover:bg-zinc-900 hover:bg-gray-200 active:bg-gray-300 ">
				search
			</span>
		</div>
	)
}

const TopBarButtons = ({
	iconAvailable = false,
	imageAvailable = false,
	imageUrl = null,
	Icon = null,
	onClick,
}: any) => {
	return (
		<div className="flex items-center p-1 transition border dark:border-0 dark:bg-zinc-800 rounded-full h-fit hover:ring hover:ring-gray-200">
			{iconAvailable ? (
				<div className="flex ">
					<NotificationIcon />
				</div>
			) : null}
			{imageAvailable ? (
				<div className="relative w-12 h-12 overflow-hidden rounded-full">
					<Image src={imageUrl} layout="fill" alt="Profile Image" />s
				</div>
			) : null}
		</div>
	)
}

const NotificationIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-6 h-6 m-3">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
			/>
		</svg>
	)
}

export default Topbar
