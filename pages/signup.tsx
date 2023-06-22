import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { showToast } from "@/Components/util/Toast";

const SignUp = () => {
  const router = useRouter();
  const { signUpWithGoogle, currentUser } = useContext(AuthContext);

  return (
    <div className="flex w-screen h-screen bg-zinc-100 p-8">
      <ToastContainer />
      <div className="flex flex-col items-center m-auto  bg-white rounded-2xl p-4 space-y-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center  bg-white rounded-full shadow-xl w-fit ">
            <Image
              src="/icons/logo128.svg"
              alt="nextjs"
              width={50}
              height={50}
            />
          </div>
          <div className="flex flex-col items-center space-y-2">
            <h2 className="text-2xl font-bold font-archivo text-black ">
              Create Account{" "}
            </h2>
            <p className="text-center text-zinc-500">
              Discover the magic of Gyanaguru with just one click!
            </p>
          </div>
          <button
            onClick={signUpWithGoogle}
            className="flex p-4 transition bg-zinc-100 rounded-xl space-x-2 font-inter hover:bg-zinc-200"
          >
            <Image
              src="/icons/google.svg"
              alt="google"
              width={24}
              height={24}
            />
            <span className="text-black">Sign Up with Google</span>
          </button>
        </div>
        <div className="flex place-content-center w-full text-zinc-500">
          <p className="text-sm text-center">
            Already have an account? &nbsp;
            <Link href="/login">
              <span className="text-blue-500  underline text-medium ">
                Log in
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
