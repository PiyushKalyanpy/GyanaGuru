import DashboardSidebar from '../sidebar/DashboardSidebar'
import Head from 'next/head'
import { useAuth } from '../../../context/AuthContext'

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
      <main className=' w-screen h-screen flex flex-col  lg:flex-row  overflow-hidden'>
        <DashboardSidebar />
        <div className='w-full overflow-hidden'>{children}</div>
      </main>
    </>
  )
}

export default PrimaryLayoutWithSidebar
