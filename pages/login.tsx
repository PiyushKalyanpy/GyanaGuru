import { ButtonWithImage } from "@/Components/components";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { setCookie, getCookie } from "cookies-next";
import { LoginWithGooglePopUp, auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { DarkModeToggle } from "../Components/components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const router = useRouter();

  // user object from useAuthState
  const [user, _] = useAuthState(auth);

  const [Local, setUser] = useState({
    email: "",
    password: "",
  });

  const success = () => {
    toast.success("Sucessfully Login", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const Invalid = ()=>{
    toast.error('Invalid Credentials', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  const [showPassword, setShowPassword] = useState(false);

  // watch the user object changes
  useEffect(() => {
    if (user) {
      setCookie("login", true);
      router.push("/dashboard");
    }
  }, [user]);

  // login with google
  const loginWithGoogle = () => LoginWithGooglePopUp();

  const showPasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  const createAccount = () => {
    router.push("/signup");
  };
  const continueToHomePage = () => {
    if (Local.email === "abc@pk01" && Local.password === "5258897") {
      setCookie("login", true);
      router.push("/dashboard");
      success();
    }
    else{
      Invalid();
    }
  };

  // Alerts Section

  const warning = () => {
    toast.warn("Please Enter valid Credentials", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (<>
      <div className="absolute right-14 top-5">
        <ToastContainer />
        <DarkModeToggle />
      </div>
      <div className="flex w-full h-screen bg-gray-200 dark:bg-neutral-950">
        <div className="flex flex-col w-10/12 md:w-8/12 lg:w-1/4 bg-white rounded-lg h-fit m-auto min-h-1/4 p-4 dark:bg-neutral-900 ">
          <div className="flex flex-col space-y-8 items-center ">
            {/* logo with title */}
            <div
              onClick={() => router.push("/")}
              className="flex cursor-pointer flex-row items-center space-x-1 "
            >
              <Image
                src="/logo.svg"
                alt="logo"
                width={40}
                height={40}
                className="dark:hidden"
              />
              <Image
                src="/logodark.svg"
                alt="dark mode logo"
                width={40}
                height={40}
                className="hidden dark:block"
              />
              <h1 className="text-md font-semibold ">GyanaGuru</h1>
            <h1 className="text-md font-semibold ">GyanaGuru</h1>
          </div>

          {/* login heading and text */}
          <div className="flex w-full px-2 flex-col space-y-2">
            <h3 className="text-3xl font-medium ">Login</h3>
            <h4 className="flex">Welcome to the login page of Gyana Guru.</h4>
          </div>

          {/* login form */}
          <div className="flex flex-col space-y-4 w-full mx-4 ">
            <ButtonWithImage
              buttonName="Login with Google"
              icon="/images/google.svg"
              onClick={loginWithGoogle}
            />

            {/* make or with divider */}
            <div className="flex flex-row space-x-4 my-4 items-center">
              <hr className="w-full border-neutral-600" />
              <h4 className="font-medium text-zinc-500 dark:text-zinc-50">or</h4>
              <hr className="w-full border-neutral-600" /> 
            </div>

            {/* login heading and text */}
            <div className="flex w-full px-2 flex-col space-y-2">
              <h3 className="text-3xl font-medium ">Login</h3>
              <h4 className="flex">Welcome to the login page of Gyana Guru.</h4>
            </div>

            {/* login form */}
            <div className="flex flex-col space-y-4 w-full mx-4 ">
              <ButtonWithImage
                buttonName="Login with Google"
                icon="/images/google.svg"
              />

              {/* make or with divider */}
              <div className="flex flex-row space-x-4 my-4 items-center">
                <hr className="w-full border-neutral-600" />
                <h4 className="font-medium text-zinc-500 dark:text-zinc-50">
                  or
                </h4>
                <hr className="w-full border-neutral-600" />
              </div>

              {/* login with email and password */}
              <div className="flex flex-col space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={Local.email}
                  onChange={(e) => setUser({ ...Local, email: e.target.value })}
                  className="border border-neutral-600 rounded-lg p-2 focus:outline-none focus:border-2 focus:border-black dark:bg-neutral-900 dark:placeholder:text-zinc-50"
                />
                <div className="flex w-full space-x-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={Local.password}
                    onChange={(e) =>
                      setUser({ ...Local, password: e.target.value })
                    }
                    className="w-full border focus:outline-none focus:border-2 focus:border-black  dark:bg-neutral-900  border-neutral-600 rounded-lg p-2 dark:placeholder:text-zinc-50"
                  />
                  <div
                    className="flex items-center text-zinc-500 border focus:outline-none focus:border-2 focus:border-black border-neutral-600 rounded-lg p-2  "
                    onClick={() => showPasswordToggle()}
                  >
                    <span className="material-icons-outlined dark:text-zinc-300 ">
                      {showPassword ? "visibility" : "visibility_off"}
                    </span>
                  </div>
                </div>

                <p className="w-fit text-right start-left text-sm text-black hover:underline cursor-pointer dark:text-zinc-50">
                  Forgot Password?
                </p>
              </div>

              {/* login button */}
              {Local.email && Local.password ? (
                <>
                  <div
                    onClick={() => continueToHomePage()}
                    className="flex flex-row space-x-4 py-4 transition hover:scale-[1.02]"
                  >
                    <button className="w-full border focus:outline-none focus:border-2 focus:border-black  dark:bg-white dark:text-black  border-neutral-600 rounded-lg p-2 dark:placeholder:text-white bg-black text-white">
                      Login
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div
                    onClick={() => warning()}
                    className="flex flex-row space-x-4 py-4 transition hover:scale-[1.02]"
                  >
                    <button className="w-full border focus:outline-none focus:border-2 focus:border-black  dark:bg-white dark:text-black  border-neutral-600 rounded-lg p-2 dark:placeholder:text-white bg-black text-white">
                      Login
                    </button>
                  </div>
                </>
              )}

              {/* Create Account */}
              <div className="flex flex-col items-center mt-4 text-sm justify-between">
                <p className="w-fit text-slate-600 dark:text-gray-100">
                  Don&apos;t have an account
                </p>
                <p
                  onClick={() => createAccount()}
                  className="w-fit text-black hover:underline cursor-pointer dark:text-gray-100"
                >
                  Create an account
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* test data  */}
        <div className="text-center m-auto font-inter text-xl text-zinc-400">
          {/* add tailwind classes for above message */}
          <p className="font-archivo text-center m-auto font-thin text-4xl text-zinc-400 dark:text-zinc-100">
            Only for developers
          </p>
          <p className="text-center m-auto font-archivo font-light text-3xl pt-6 text-zinc-300">
            Under Construction
          </p>

          <div className="text-black mt-10 dark:text-zinc-100">
            ------ Text emails and password ------
            <p className="m-4 dark:text-zinc-100">Email : abcpk@01</p>
            <p className="dark:text-zinc-100">Password : 5258897</p>
          </div>
        </div>

        {/* test data end */}
      </div>
      </div>
    </>
  );
};
export default Login;
