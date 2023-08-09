import { Chart } from "react-google-charts";



const ProfileGraph = () => {
	const data = [
		["day", "coures"],
		["mon", 11],
		["tue", 2],
		["wed", 2],
		["thu", 2],
		["fri", 7],
		["sat", 7],
		["sun", 7],

	];
	const options = {
		chart: {
			title: "Course Progress",
			subtitle: "your daily progress",
			is3D: true,
		},
		is3D: true,		
	};
	return (
		<div className="w-full bg-white h-full  rounded-2xl p-4 ">
			<Chart
				chartType="Line"
				width="100%"
				height="400px"
				data={data}
				options={options}
				style={{ borderRadius: "18px" }}
			/>

		</div>
	);
}



export default ProfileGraph;