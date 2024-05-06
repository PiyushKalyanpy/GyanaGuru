'use client'
import { SessionProvider } from "next-auth/react";

export default function App({ children }: any) {
  return <SessionProvider>{children}</SessionProvider>;
}

  