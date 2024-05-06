"use client";
import { useSession } from "next-auth/react";
import LandingPage from "@/components/landing/LandingPage";
import {redirect} from "next/navigation";

export default function Home() {

  return (
    <section>
      <LandingPage />
    </section>
  );
}
