import {NextPageWithLayout} from '@/util/page'
import CustomRedirectButton from '@/components/util/CustomRedirectButton'
import {PrimaryLayoutWithSidebar} from '@/components/layouts/exporter'

const Dashboard: NextPageWithLayout = () => {
	return (
		<section className="w-full h-screen bg-zinc-100 flex flex-col gap-14 justify-center items-center">
			<p>Dashboard not implemented yet</p>

			<CustomRedirectButton title="Explore courses" src="/courses" />
		</section>
	)
}
export default Dashboard
Dashboard.getLayout = (page) => {
	return <PrimaryLayoutWithSidebar>{page}</PrimaryLayoutWithSidebar>
}
