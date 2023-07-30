"use client"

import './globals.css'
import type { Metadata } from 'next'
import "material-symbols"
import { Inter, Archivo } from 'next/font/google'
import { Providers } from './provider'

const inter = Inter({ subsets: ['latin'] })
const archivo = Archivo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gyanaguru',
  description: 'online learning webapp',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${archivo.className}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
