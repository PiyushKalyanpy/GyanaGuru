import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContext } from 'react';
import Link from 'next/link'
import { ToastContainer } from 'react-toastify';
import { AuthContext } from '@/context/AuthContext'

const Login = () => {
  const router = useRouter()
  const { loginWithGoogle, currentUser } = useContext(AuthContext)
  if (currentUser) router.replace('/dashboard')

  return (
    <div className='flex w-screen h-screen bg-zinc-100 p-8'>
      <ToastContainer />
      <div className='flex flex-col items-center m-auto  bg-white rounded-2xl p-4 space-y-6'>
        <div className='flex flex-col items-center space-y-6'>
          <div className='flex items-center  bg-white rounded-full shadow-xl w-fit '>
            <Image
              src='/icons/logo128.svg'
              alt='nextjs'
              width={50}
              height={50}
            />
          </div>
          <div className='flex flex-col items-center space-y-2'>
            <h2 className='text-2xl font-bold font-archivo text-black '>
              Welcome back{' '}
            </h2>
            <p className='text-center text-zinc-500'>
              Discover the magic of Gyanaguru with just one click!
            </p>
          </div>
          <button
            onClick={loginWithGoogle}
            className='flex p-4 transition bg-black rounded-xl space-x-2 font-inter hover:bg-zinc-800'
          >
            <Image
              src='/icons/google.svg'
              alt='google'
              width={24}
              height={24}
            />
            <span className='dark:text-white text-white'>
              Continue with Google
            </span>
          </button>
        </div>
        <div className='flex place-content-center w-full'>
          <p className='text-sm text-center text-zinc-600'>
            Don{`'`}t have an account? &nbsp;
            <Link href='/signup'>
              <span className='text-blue-500  underline text-medium '>
                Sign up
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
