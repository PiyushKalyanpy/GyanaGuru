const Rating = ({value, noOfVotes}: any) => {
	const filledStars = Math.floor(value)
	const hasHalfStar = value % 1 !== 0

	const renderStar = (index: any) => {
		if (index < filledStars) {
			return (
				<span key={index} className="inline-block w-4 h-4 mr-1 rounded-full">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-4 h-4 text-yellow-400"
						viewBox="0 0 20 20"
						fill="currentColor">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							className="text-yellow-400"
							d="M10 0L13.09 6.09L20 7.82L15.45 12.72L16.64 20L10 16.36L3.36 20L4.55 12.72L0 7.82L6.91 6.09L10 0Z"
						/>
					</svg>
				</span>
			)
		} else if (index === filledStars && hasHalfStar) {
			return (
				<span
					key={index}
					className="inline-block w-4 h-4 mr-1 overflow-hidden rounded-full">
					{/* svg for half star yellow half gray */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-4 h-4 text-yellow-400"
						viewBox="0 0 20 20"
						fill="currentColor">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							className="text-yellow-400"
							d="M10 0L13.09 6.09L20 7.82L15.45 12.72L16.64 20L10 16.36L3.36 20L4.55 12.72L0 7.82L6.91 6.09L10 0Z"
						/>
					</svg>
				</span>
			)
		} else {
			return (
				<span key={index} className="inline-block w-4 h-4 mr-1 rounded-full">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-4 h-4 text-gray-300"
						viewBox="0 0 20 20"
						fill="currentColor">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							className="text-gray-300"
							d="M10 0L13.09 6.09L20 7.82L15.45 12.72L16.64 20L10 16.36L3.36 20L4.55 12.72L0 7.82L6.91 6.09L10 0Z"
						/>
					</svg>
				</span>
			)
		}
	}

	const renderStars = () => {
		const stars = []
		for (let i = 0; i < 5; i++) {
			stars.push(renderStar(i))
		}
		return stars
	}

	return (
		<div className="flex">
			{renderStars()}
			{/* showing value and no of votes */}

			<span className="ml-1 text-sm text-zinc-500">
				{value} · {noOfVotes} votes
			</span>
		</div>
	)
}

export default Rating
