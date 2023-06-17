import { HomeSidebar } from '../Components/components'

const Settings = () => {
  return (
    <div className="grid w-full h-screen grid-cols-12 bg-white">
      <div className="col-span-2">
        <HomeSidebar pageNumber={4} />
      </div>
      <div className="col-span-10 bg-zinc-100">Settings</div>
    </div>
  )
}

export default Settings
