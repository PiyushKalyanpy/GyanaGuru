import Image from 'next/image'
import { getDatabase, ref, push, set } from 'firebase/database'
import { useState } from 'react'

const LandingContact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function writeUserData (name: any, email: any, message: any) {
    const db = getDatabase()
    const usersRef = ref(db, 'contact')
    const newUserRef = push(usersRef)

    set(newUserRef, {
      username: name,
      email: email,
      message: message
    })
      .then(() => {
        setName('')
        setEmail('')
        setMessage('')
      })
      .catch(error => {
        console.log('Error writing data:', error)
      })
  }
  return (
    <div className='w-full h-fit lg:p-20 dark:bg-neutral-950'>
      <div className='flex flex-col  md:flex-row gap-8 w-full items-center'>
        <div className='hidden lg:flex items-center md:col-span-2'>
          <Image
            className='m-auto h-96 object-cover rounded-3xl select-none'
            src='/images/contact.png'
            alt='Picture of the author'
            width={400}
            height={400}
          />
        </div>
        <div className='flex flex-col p-10 space-y-8 mx-auto z-10 md:col-span-4 w-full'>
          <div className='lg:w-3/4 space-y-4'>
            <h2 className='text-4xl font-bold font-archivo text-slate-900 dark:text-zinc-100 '>
              Contact Us
            </h2>
            <h2 className='font-archivo text-zinc-700 dark:text-zinc-100'>
              Have questions or feedback? We{`'`}d love to hear from you. Please
              fill out the form below and we{`'`}ll get back to you as soon as
              possible.
            </h2>
            <form
              onSubmit={e => {
                e.preventDefault()
                writeUserData(name, email, message)
              }}
            >
              <input
                className='w-full bg-zinc-100 h-12 mt-4 p-4 outline-none focus:outline-zinc-200 text-zinc-800 font-archivo text-lg rounded-lg placeholder:text-zinc-800/50'
                type='text'
                placeholder='Name'
                aria-label='Enter your Name'
                required
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <input
                className='w-full bg-zinc-100 h-12 mt-4 p-4 outline-none focus:outline-zinc-200 text-zinc-800 font-archivo text-lg rounded-lg placeholder:text-zinc-800/50'
                type='email'
                placeholder='E-mail'
                aria-label='Enter your Email'
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <textarea
                className='w-full bg-zinc-100 h-40 mt-4 p-4 outline-none focus:outline-zinc-200 text-zinc-800 font-archivo text-lg rounded-lg placeholder:text-zinc-800/50 resize-none'
                placeholder='Message'
                aria-label='Enter the message you like to send'
                required
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
              <button
                className='w-20% bg-black text-white dark:bg-white dark:text-black  h-12 mt-4 p-2 outline-none hover:outline-zinc-200 transition  text-lg rounded-lg placeholder:text-zinc-800/50 hover:scale-[1.04]'
                type='submit'
                aria-describedby='submit your form'
                role='button'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingContact
