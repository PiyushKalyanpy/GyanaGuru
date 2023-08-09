const Calander = () => {
	return (
		<div className="flex w-full h-fit rounded-2xl p-4 gap-4 overflow-y-scroll hide-scrollbar ">
			<DateItem day="Mon" date="12" isSelected={false} />
			<DateItem day="Tue" date="13" isSelected={true} />
			<DateItem day="Wed" date="14" isSelected={false} />
			<DateItem day="Thu" date="15" isSelected={false} />
			<DateItem day="Fri" date="16" isSelected={false} />
			<DateItem day="Sat" date="17" isSelected={false} />
			<DateItem day="Sun" date="18" isSelected={false} />
		</div>
	)
}

const DateItem = ({day, date, isSelected}: any) => {
	return (
		<div
			className={`flex flex-col w-1/7 h-1/7  rounded-full p-2 items-center  h-full gap-2 ${
				isSelected && 'bg-zinc-100 '
			}`}>
			<div
				className={`p-2 w-10 h-10 flex items-center justify-center font-archivo text-sm  rounded-full  ${
					isSelected ? ' bg-blue-600 text-white' : 'text-gray-500'
				} `}>
				{date}
			</div>
			<div className="text-sm p-2">{day}</div>
		</div>
	)
}

export default Calander
