import { NextPageWithLayout } from '../util/page'
import {
  PrimaryLayoutWithSidebar,
  DashboardSidebar
} from '@/components/layouts/exporter'

const Home: NextPageWithLayout = () => {
  return (
    <section className='w-full h-screen bg-white'>
      This is the home page ui design for the dashboard
    </section>
  )
}

export default Home

Home.getLayout = page => {
  return <PrimaryLayoutWithSidebar>{page}</PrimaryLayoutWithSidebar>
}
