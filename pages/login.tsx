import { ButtonWithImage } from "@/Components/components";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { setCookie, getCookie } from "cookies-next";
import { DarkModeToggle } from "../Components/components";
import { AuthContext } from "@/context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./signup";

const Login = () => {
  const router = useRouter();

  const { currentUser, loginWithGoogle, login } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (currentUser) {
      setCookie("login", true);
      router.push("/dashboard");
    }
  }, [currentUser]);

  const error = () => {
    toast.error("Login Failed", {
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

  const success = () => {
    toast.success("Account Created", {
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

  const handleLoginClick = () => {
    login(userData.email, userData.password)
      .then(({ res }: any) => {
        setCookie("login", true);
        router.push("/dashboard");
      })
      .catch(({ err }: any) => {
        error();
      });
  };

  return (
    <>
      <div className="absolute right-14 top-5">
        <DarkModeToggle />
      </div>
      <ToastContainer />

      <div className="flex w-full h-screen bg-gray-200 dark:bg-neutral-950">
        <div className="flex flex-col w-10/12 p-4 m-auto bg-white rounded-lg md:w-8/12 lg:w-1/4 h-fit min-h-1/4 dark:bg-neutral-900 ">
          <div className="flex flex-col items-center space-y-8 ">
            {/* logo with title */}
            <div
              onClick={() => router.push("/")}
              className="flex flex-row items-center space-x-1 cursor-pointer "
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
                className="hidden dark:block hover:animate-ping"
              />

              <h1 className="font-semibold text-md animate-pulse ">GyanaGuru</h1>
            </div>

            {/* login heading and text */}
            <div className="flex flex-col w-full px-2 space-y-2">
              <h3 className="text-3xl font-medium text-center ">Login</h3>
              <h4 className="flex justify-center">Welcome to the login page of Gyana Guru.</h4>
            </div>

            {/* login form */}
            <div className="flex flex-col w-full mx-4 space-y-4  ">
              <ButtonWithImage
                buttonName="Login with Google"
                icon="/images/google.svg "
                onClick={loginWithGoogle}
              />

              {/* make or with divider */}
              <div className="flex flex-row items-center my-4 space-x-4">
                <hr className="w-full border-neutral-300" />
                <h4 className="font-medium text-zinc-500 dark:text-zinc-50">
                  or
                </h4>
                <hr className="w-full border-neutral-300" />
              </div>

              {/* login with email and password */}
              <div className="flex flex-col space-y-4">
                <input
                  type="email"
                  placeholder="email@example.com"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                  className="p-2 border rounded-lg border-neutral-300 focus:outline-none focus:border-2 focus:border-black dark:bg-neutral-900 dark:placeholder:text-zinc-50"
                />
                <div className="flex w-full space-x-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={userData.password}
                    onChange={(e) =>
                      setUserData({ ...userData, password: e.target.value })
                    }
                    className="w-full p-2 border rounded-lg focus:outline-none focus:border-2 focus:border-black dark:bg-neutral-900 border-neutral-300 dark:placeholder:text-zinc-50"
                  />
                  <div
                    className="flex items-center p-2 border rounded-lg text-zinc-500 focus:outline-none focus:border-2 focus:border-black border-neutral-300 "
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-icons-outlined dark:text-zinc-300 cursor-pointer ">
                      {showPassword ? "visibility" : "visibility_off"}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-right text-black cursor-pointer w-fit start-left hover:underline dark:text-sky-500">
                  Forgot Password?
                </p>
              </div>

              {/* login button */}
              <div
                onClick={handleLoginClick}
                className="flex flex-row space-x-4 py-4 transition hover:scale-[1.02]"
              >
                <button className="w-full p-2 text-white bg-black border rounded-lg focus:outline-none focus:border-2 focus:border-black dark:bg-white dark:text-black border-neutral-600 dark:placeholder:text-white">
                  Login
                </button>
              </div>

              {/* Create Account */}
              <div className="flex flex-col items-center justify-between mt-4 text-sm">
                <p className="w-fit text-slate-900 dark:text-sky-600">
                  Don&apos;t have an account
                </p>
                <p
                  onClick={() => router.push("/signup")}
                  className="text-black cursor-pointer w-fit hover:underline dark:text-green-500
                  animate-pulse"
                >
                  Create an account
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
