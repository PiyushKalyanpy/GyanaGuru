import { ButtonWithImage } from "@/Components/components";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { setCookie, getCookie } from "cookies-next";
import { LoginWithGooglePopUp, auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
  const router = useRouter();

  // user object from useAuthState
  const [user, _] = useAuthState(auth);

  const [Local, setUser] = useState({
    email: "",
    password: "",
  });
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
    }
  };

  return (
    <div className="flex w-full h-screen bg-gray-200 ">
      <p
        className="bg-black text-white rounded-lg py-2 px-4 cursor-pointer flex items-center absolute left-2 top-2"
        onClick={() => router.push("/")}
      >
        <span className="text-white bg-black rounded-full material-icons">
          arrow_back_ios
        </span>
        Back
      </p>
      <div className="flex flex-col w-10/12 md:w-8/12 lg:w-1/4 bg-white rounded-lg h-fit m-auto min-h-1/4 p-4 ">
        <div className="flex flex-col space-y-8 items-center ">
          {/* logo with title */}
          <div
            onClick={() => router.push("/")}
            className="flex cursor-pointer flex-row items-center space-x-4 "
          >
            <Image src="/logo.svg" alt="logo" width={40} height={40} />

            <h1 className="text-md font-semibold ">GyanaGuru</h1>
          </div>

          {/* login heading and text */}
          <div className="flex w-full px-2 flex-col space-y-2 ">
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
              <hr className="w-full border-gray-300" />
              <h4 className="font-medium text-zinc-500">or</h4>
              <hr className="w-full border-gray-300" />
            </div>

            {/* login with email and password */}
            <div className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={Local.email}
                onChange={(e) => setUser({ ...Local, email: e.target.value })}
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-2 focus:border-black"
              />
              <div className="flex w-full space-x-2">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={Local.password}
                  onChange={(e) =>
                    setUser({ ...Local, password: e.target.value })
                  }
                  className="w-full border focus:outline-none focus:border-2 focus:border-black border-gray-300 rounded-lg p-2"
                />
                <div
                  className="flex items-center text-zinc-500 border focus:outline-none focus:border-2 focus:border-black border-gray-300 rounded-lg p-2  "
                  onClick={() => showPasswordToggle()}
                >
                  <span className="material-icons-outlined ">
                    {showPassword ? "visibility" : "visibility_off"}
                  </span>
                </div>
              </div>

              <p className="w-fit text-right start-left text-sm text-black hover:underline cursor-pointer">
                Forgot Password?
              </p>
            </div>

            {/* login button */}
            <div
              onClick={() => continueToHomePage()}
              className="flex flex-row space-x-4 py-4 transition hover:scale-[1.02]"
            >
              <button className="bg-black text-white rounded-lg p-2 w-full">
                Login
              </button>
            </div>

            {/* Create Account */}
            <div className="flex flex-col items-center mt-4 text-sm justify-between">
              <p className="w-fit text-slate-600">Don&apos;t have an account</p>
              <p
                onClick={() => createAccount()}
                className="w-fit text-black hover:underline cursor-pointer"
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
        <p className="font-archivo text-center m-auto font-thin text-4xl text-zinc-400">
          Only for developers
        </p>
        <p className="text-center m-auto font-archivo font-light text-3xl pt-6 text-zinc-300">
          Under Construction
        </p>

        <div className="text-black mt-10 ">
          ------ Test emails and password ------
          <p className="m-4">Email : abc@pk01</p>
          <p>Password : 5258897</p>
        </div>
      </div>

      {/* test data end */}
    </div>
  );
};

export default Login;
