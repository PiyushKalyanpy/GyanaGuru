export const convertDurationToTime = (duration: string): number => {
	const durationArray = duration.split(':')
	const hours = parseInt(durationArray[0])
	const minutes = parseInt(durationArray[1])
	const seconds = parseInt(durationArray[2])

	return hours * 3600 + minutes * 60 + seconds
}

export const convertTimeToDuration = (time: number): string => {
	const addZero = (time: any) => {
		return time < 10 ? '0' + time : time
	}
	const hours = addZero(Math.floor(time / 3600))
	const minutes = addZero(Math.floor((time % 3600) / 60))
	const seconds = addZero(Math.floor((time % 3600) % 60))
	return `${hours}:${minutes}:${seconds}`
}
