"use client";
import { ClerkProvider } from "@clerk/nextjs";

export default function App({ children }: any) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
