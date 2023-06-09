import { ButtonWithImage } from "@/Components/components";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { setCookie, getCookie } from "cookies-next";
import { DarkModeToggle } from "../Components/components";
import { AuthContext } from "@/context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const router = useRouter();

  const { currentUser, loginWithGoogle, login } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });



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
        console.log(res);
        console.log("sdfss")
        
      })
      .catch(({ err }: any) => {
        console.log(err);
        console.log("sdf")
        error();
      });
  };

  useEffect(() => {
    if (currentUser) {
      setCookie("login", true);
      router.push("/dashboard");
    }
  }, [currentUser]);

  return (
    <>
      <div className="absolute right-14 top-5">
        <DarkModeToggle />
      </div>
      <ToastContainer />

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
                  placeholder="Email"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                  className="border border-neutral-300 rounded-lg p-2 focus:outline-none focus:border-2 focus:border-black dark:bg-neutral-900 dark:placeholder:text-zinc-50"
                />
                <div className="flex w-full space-x-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={userData.password}
                    onChange={(e) =>
                      setUserData({ ...userData, password: e.target.value })
                    }
                    className="w-full border focus:outline-none focus:border-2 focus:border-black  dark:bg-neutral-900  border-neutral-300 rounded-lg p-2 dark:placeholder:text-zinc-50"
                  />
                  <div
                    className="flex items-center text-zinc-500 border focus:outline-none focus:border-2 focus:border-black border-neutral-300 rounded-lg p-2  "
                    onClick={() => setShowPassword(!showPassword)}
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
              <div
                onClick={handleLoginClick}
                className="flex flex-row space-x-4 py-4 transition hover:scale-[1.02]"
              >
                <button className="w-full border focus:outline-none focus:border-2 focus:border-black  dark:bg-white dark:text-black  border-neutral-600 rounded-lg p-2 dark:placeholder:text-white bg-black text-white">
                  Login
                </button>
              </div>

              {/* Create Account */}
              <div className="flex flex-col items-center mt-4 text-sm justify-between">
                <p className="w-fit text-slate-600 dark:text-gray-400">
                  Don&apos;t have an account
                </p>
                <p
                  onClick={() => router.push("/signup")}
                  className="w-fit text-black hover:underline cursor-pointer dark:text-gray-100"
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