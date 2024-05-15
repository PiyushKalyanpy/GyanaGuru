"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavItems from "./NavItems";
import { Button } from "../ui/button";

const Header = () => {
  const router = useRouter();
  const [courseName, setCourseName] = useState("");

  return (
    <header className="w-full border-b flex justify-between p-4  items-center">
      <div className=" flex  items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            priority
            src="/images/beta_logo.svg"
            alt="12"
            width={100}
            height={100}
            className="object-cover w-48 h-full p-2 cursor-pointer select-one bg-white/50 rounded-2xl backdrop-blur-sm full"
          />
        </Link>
      </div>

      <nav className="hidden md:flex  w-full max-w-lg items-center gap-8">
        {/* input for course search */}
        <div className="flex items-center m-2 bg-white border border-gray-300 place-content-center hover:border-indigo-500 focus:border-indigo-500 active:border-indigo-500 gap-2bg-gray-100 rounded-2xl">
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            className="px-4 py-2 outline-none rounded-2xl placeholder:font-light"
            placeholder="I want to learn"
          />
          <button
            onClick={() => router.push("/login")}
            className="flex items-center px-4 py-2 cursor-pointer rounded-xl h-fit"
          >
            <span className="material-icons-round">search</span>
          </button>
        </div>

        <NavItems />
      </nav>

      <div className="flex gap-4 items-center ">
        <SignedOut>
          <button
            onClick={() => router.push("/sign-in")}
            className="flex items-center px-4 py-2 border border-gray-200 cursor-pointer rounded-xl"
          >
            Log In
          </button>
        </SignedOut>

        <SignedIn>
          <div className="hidden  md:flex items-center">
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>

        <Sheet>
          <SheetTrigger>
            <Button
              asChild
              className="flex items-center px-4 py-2 border border-gray-200 cursor-pointer rounded-xl"
            >
              <span className="material-symbols-outlined">shopping_cart</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-white">
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger>
              <Button
                asChild
                className="flex md:hidden items-center px-4 py-2 border border-gray-200 cursor-pointer rounded-xl"
              >
                <span className="material-symbols-outlined">menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-white">
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
