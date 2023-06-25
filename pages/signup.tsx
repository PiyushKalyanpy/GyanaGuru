import { ButtonWithImage } from "@/components/components"
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import { DarkModeToggle } from "../components/components";
import { ToastContainer, toast } from "react-toastify";


const SignUp = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const showPasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  const { currentUser, signup } = useContext(AuthContext);

  const warning = () => {
    toast.warn("Please Complete all fields", {
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

  const error = ({ message }: any) => {
    toast.error(`${message}`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  const handleSignUp = () => {
    if (
      userData.email === "" ||
      userData.password === "" ||
      userData.confirmPassword === ""
    ) {
      warning();
    } else if (userData.password !== userData.confirmPassword) {
      error({ message: "Passwords do not match" });
    } else {
      signup(userData.email, userData.password)
        .then(({ data }: any) => {
          success();
          router.push("/dashboard");
        })
        .catch((err: any) => {
          error({ message: err.message });
        });
    }
  };
  return (
    <div className="flex w-full h-screen bg-gray-200 dark:bg-neutral-950">
      <div className="absolute right-14 top-5">
        <DarkModeToggle />
      </div>
      <ToastContainer />
      <div className="flex flex-col w-10/12 p-4  m-auto  bg-white rounded-lg md:w-8/12 lg:w-1/4 h-fit min-h-1/4 dark:bg-neutral-900">
        <div className="flex flex-col items-center space-y-8">  
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
                className="hidden dark:block"
              />

              <h1 className="font-semibold text-md ">GyanaGuru</h1>
            </div>

          {/* login heading and text */}
          <div className="flex flex-col w-full px-2 mt-8 space-y-2 ">
            <h3 className="text-3xl font-semibold ">Sign Up</h3>
            <h4 className="flex">Welcome to Gyana Guru. </h4>
          </div>

          {/* login form */}
          <div className="flex flex-col w-full mx-4 space-y-4 ">
            <ButtonWithImage
              buttonName="Continue with Google"
              icon="/images/google.svg"
            />

            {/* make or with divider */}
            <div className="flex flex-row items-center my-4 space-x-4">
              <hr className="w-full border-gray-200" />
              <h4 className="font-medium text-zinc-500 dark:text-zinc-50">or</h4>
              <hr className="w-full border-gray-300" />
            </div>

            {/* login with email and password */}
            <div className="flex flex-col space-y-4">
              {/* email */}
              <input
                type="email"
                placeholder="Email"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-2 focus:border-black dark:bg-neutral-900 dark:placeholder:text-zinc-50"
              />
              {/* password */}
              <div className="flex w-full space-x-2">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={userData.password}
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-2 focus:border-black dark:bg-neutral-900 border-neutral-300 dark:placeholder:text-zinc-50"
                />
              </div>
              {/* confirm password */}
              <div className="flex w-full space-x-2">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  value={userData.confirmPassword}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      confirmPassword: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-2 focus:border-black"
                />
                <div
                  className="flex items-center p-2 border border-gray-300 rounded-lg text-zinc-500 focus:outline-none focus:border-2 focus:border-black border-neutral-300 "
                  onClick={() => showPasswordToggle()}
                >
                  <span className="material-icons-outlined ">
                    {showPassword ? "visibility" : "visibility_off"}
                  </span>
                </div>
              </div>
            </div>

            {/* login button */}
            <div className="flex flex-row space-x-4 py-4 transition hover:scale-[1.02]">
              <button
                className="w-full p-2 text-white bg-black rounded-lg focus:outline-none focus:border-2 focus:border-black dark:bg-white dark:text-black border-neutral-600 dark:placeholder:text-white"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </div>

            {/* Create Account */}
            <div className="flex flex-col items-center justify-between mt-4 text-sm">
              <p className="w-fit text-slate-600 dark:text-gray-100">Already have an account</p>
              <p
                onClick={() => router.push("/login")}
                className="text-black cursor-pointer w-fit hover:underline dark:text-gray-100"
              >
                Sign In to you account
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
