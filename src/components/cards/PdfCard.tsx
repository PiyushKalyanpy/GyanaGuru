const PdfCard = () => {
	return (
		<div>
			<div className="flex w-full p-4 space-x-4   bg-black text-white rounded-2xl ">
				<div className="flex items-center justify-between">
					<span className="material-symbols-outlined">attach_file</span>
				</div>
				<>
					{/* note text content */}
					<div>
						<div className="text-lg font-semibold font-urbanist">
							No available file
						</div>
						<div className="w-full">🙅</div>
					</div>
				</>
			</div>
		</div>
	)
}

export default PdfCard
