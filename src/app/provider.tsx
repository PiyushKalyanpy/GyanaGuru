'use client';

import { ThemeProvider } from 'next-themes';
import { AuthContextProvider } from '../context/authContext';
import { CourseContextProvider } from '@/context/courseContext';
import { Toaster } from '@/components/ui/toaster';

export function Providers({ children }: any) {
  return (
    <CourseContextProvider>
      <AuthContextProvider>
        <ThemeProvider defaultTheme="light">
          {children}
          <Toaster />
        </ThemeProvider>
      </AuthContextProvider>
    </CourseContextProvider>
  );
}
