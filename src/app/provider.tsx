'use client'

import { ThemeProvider } from 'next-themes'
import { AuthContextProvider } from '../context/authContext'
import { CourseContextProvider } from '@/context/courseContext'


export function Providers({ children }: any) {
    return (
        <CourseContextProvider>
            <AuthContextProvider>
                <ThemeProvider defaultTheme='light' >
                    {children}
                </ThemeProvider>
            </AuthContextProvider>
        </CourseContextProvider>

    )

}