import { NextPageWithLayout } from '../util/page'
import {
  PrimaryLayoutWithSidebar,
  DashboardSidebar
} from '@/components/layouts/exporter'
import { SidebarItem } from '../util/types'
import { ToastContainer } from 'react-toastify'
import {
  Sidebar,
  AddCourse,
  UpdateCourse,
  StudentReport,
  ManageSite,
  DeleteCourse
} from '../components/admin/Exporter'
import { useState } from 'react'

const Admin: NextPageWithLayout = () => {
  const [active, setActive] = useState(1)

  return (
    <section className='w-full h-screen bg-white'>
      <div className='absolute'>
        <ToastContainer />
      </div>
      <div className='flex h-full w-full border'>
        <div className='w-1/4 border'>
          <Sidebar pageNumber={1} active={active} setActive={setActive} />
        </div>

        <div className='bg-zinc-100 w-full border'>
          {(() => {
            if (active == 1) return <AddCourse />
            if (active == 2) return <UpdateCourse />
            if (active == 3) return <DeleteCourse />
            if (active == 4) return <StudentReport />
            if (active == 5) return <ManageSite />
          })()}
        </div>
      </div>
    </section>
  )
}

export default Admin

Admin.getLayout = page => {
  return <PrimaryLayoutWithSidebar>{page}</PrimaryLayoutWithSidebar>
}
