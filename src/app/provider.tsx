'use client'

import { ThemeProvider } from 'next-themes'
import { AuthContextProvider } from '../context/authContext'


export function Providers({ children }: any) {
    return (
        <AuthContextProvider>
            <ThemeProvider defaultTheme='light' >
                {children}
            </ThemeProvider>
        </AuthContextProvider>
    )

}