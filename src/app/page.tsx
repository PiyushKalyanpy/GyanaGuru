"use client"
import ThemeToggle from '@/components/buttons/ThemeToggle'
import MainNavbar from '@/components/navbars/MainNavbar'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter()

  return (
    <main className="">
      <MainNavbar />
      <h2>This is the sample text website</h2>
      <button
      onClick={() => router.push('/login')}
      >Login</button>
    </main>
  )
}
