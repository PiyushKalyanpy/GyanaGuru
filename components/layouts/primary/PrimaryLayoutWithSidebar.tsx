import DashboardSidebar from '../sidebar/DashboardSidebar'
import Head from 'next/head'
import { useAuth } from '../../../context/authContext'

export interface IPrimaryLayoutWithSidebar {
  children: any
}

const PrimaryLayoutWithSidebar: React.FC<IPrimaryLayoutWithSidebar> = ({
  children
}: any) => {
  const { currentUser } = useAuth()
  if (!currentUser) {
    return <div>loading...</div>
  }

  return (
    <>
      <Head>
        <title>Sidebar</title>
      </Head>
      <main className='flex flex-col  lg:flex-row'>
        <DashboardSidebar />
        <div className='w-full'
        >{children}</div>
      </main>
    </>
  )
}

export default PrimaryLayoutWithSidebar
