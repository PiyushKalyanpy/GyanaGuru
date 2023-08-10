import {Chart} from 'react-google-charts'

const ProfileGraph = () => {
	const data = [
		['day', 'coures'],
		['mon', 0],
		['tue', 0],
		['wed', 20],
		['thu', 0],
		['fri', 0],
		['sat', 0],
	]
	const options = {
		chart: {
			title: 'Course Progress',
			subtitle: 'your daily progress',
		},
	}
	return (
		<div className="w-full bg-white h-full  rounded-2xl p-4 ">
			<Chart
				chartType="Line"
				width="100%"
				height="400px"
				data={data}
				options={options}
				style={{borderRadius: '18px'}}
			/>
		</div>
	)
}

export default ProfileGraph
