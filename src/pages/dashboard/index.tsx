import {NextPageWithLayout} from '@/util/page'
import {PrimaryLayoutWithSidebar} from '@/components/layouts/exporter'
import ProfileGraph from './comp/ProfileGraph'
import {useAuth} from '@/context/AuthContext'
import Calander from './comp/Calander'
import UpcommingClass from './comp/UpcommingClass'

const Dashboard: NextPageWithLayout = () => {
	const {currentUser} = useAuth()

	return (
		<section className="w-full h-screen bg-gray-100 flex flex-col gap-4 p-4 overflow-y-scroll	">
			<div className="flex flex-col lg:flex-row gap-4 h-full">
				{/* left side */}
				<div className="flex flex-col w-full lg:w-3/4 h-fit gap-4 ">
					<div className="flex  md:flex-row gap-4">
						<StatCard title="Courses enrolled " value="0" icon="user" />
						<StatCard title="Courses completed" value="0" icon="product" />
						<StatCard title="Courses enrolled" value="0" icon="order" />
						<StatCard title="Time spent (toady)" value="0" icon="order" />
					</div>

					<ProfileGraph />
				</div>
				{/* right side */}
				<div className="flex flex-col w-full lg:w-1/4 bg-white rounded-2xl  h-fit gap-4">
					<Calander />
					<div className="flex flex-col gap-2 p-2 ">
						{UpcommingClasses.map((item, index) => {
							return <UpcommingClass key={index} {...item} />
						})}
					</div>
				</div>
			</div>
		</section>
	)
}

const UpcommingClasses = [
	{
		time: '10:00 AM',
		title: 'Introduction to UI/UX',
		progress: '20%',
		tasks: '2/10',
	},
	{
		time: '11:00 AM',
		title: 'Data Structures and Algorithms',
		progress: '20%',
		tasks: '2/10',
	},
	{
		time: '12:00 AM',
		title: 'CI/CD and DevOps',
		progress: '20%',
		tasks: '2/10',
	},
]

const StatCard = ({
	title,
	value,
	icon,
	side,
}: {
	title: string
	value: string
	icon: string
	side?: string
}) => {
	return (
		<div className="h-fit w-full bg-white rounded-2xl  flex flex-col  p-4 gap-4">
			<div className="">{title}</div>

			<div className="flex items-end gap-2 ">
				<span className="text-4xl  font-archivo font-semibold">{value}</span>
				<span className="text-sm text-gray-500">{side}</span>
			</div>
		</div>
	)
}

const Graph = () => {
	return <div className="w-full h-full bg-white rounded-2xl"></div>
}

export default Dashboard
Dashboard.getLayout = (page) => {
	return <PrimaryLayoutWithSidebar>{page}</PrimaryLayoutWithSidebar>
}
