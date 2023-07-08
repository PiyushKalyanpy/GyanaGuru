import { useRouter } from 'next/router'

const BackNavButton = () => {
  const router = useRouter()
  return (
    <div>
      <span
        onClick={() => router.back()}
        className='p-4 text-sm bg-white rounded-full cursor-pointer dark:bg-zinc-900 dark:text-white material-icons text-zinc-600'
      >
        arrow_back_ios_new
      </span>
    </div>
  )
}

export default BackNavButton
