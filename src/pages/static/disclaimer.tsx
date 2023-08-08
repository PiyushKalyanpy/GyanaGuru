import DisclaimerData from '../../data/disclaimer.json'
import {useRouter} from 'next/router'

const Disclaimer = () => {
	const router = useRouter()
	const onBackClick = () => {
		router.back()
	}

	return (
		<div className="h-screen w-full">
			<div className="flex flex-col space-y-8 m-6">
				{DisclaimerData.map((item: any, index: number) => {
					return (
						<>
							{item && (
								<div key={index} className="flex flex-col space-y-4">
									<h1 className="text-2xl font-bold">{item.heading}</h1>
									<p className="text-lg">{item.paragraph}</p>
								</div>
							)}
						</>
					)
				})}
			</div>
		</div>
	)
}

export default Disclaimer
