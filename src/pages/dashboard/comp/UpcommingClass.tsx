const UpcommingClass = ({time, title, progress, tasks}: any) => {
	return (
		<div>
			<div className="flex flex-col w-full h-fit bg-white rounded-2xl p-2 gap-4">
				<div className="flex justify-between items-center">
					<div className="flex gap-4 items-center">
						<div className=" flex w-12 text-sm  h-12 bg-zinc-100 rounded-full items-center justify-center">
							{progress}
						</div>
						<div className="flex flex-col">
							<div className="font-semibold">{time}</div>
							<div className="text-sm">{title}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UpcommingClass
