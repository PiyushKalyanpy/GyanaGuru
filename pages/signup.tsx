import { ButtonWithImage } from "@/Components/components";
import { useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const SignUp = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showalert, setshowalert] = useState(true);

  const [showPassword, setShowPassword] = useState(false);
  const showPasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  const moveToSignIn = () => {
    router.push("/login");
  };

  const warning=()=>{
    toast.warn('Please Complete all fields', {
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

  const success = ()=>{
    toast.success('Account Created', {
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

  return (
    <div className="flex w-full h-screen bg-gray-200 ">
      <ToastContainer/>
      <div className="flex flex-col w-10/12 md:w-8/12 lg:w-1/4 bg-white rounded-lg h-fit m-auto min-h-1/4 p-4 ">
        <div className="flex flex-col space-y-8 items-center ">
          {/* logo with title */}
          {/* <div className="flex flex-row items-center space-x-4 ">
            <img src="/logo.svg" alt="logo" width={40} height={40} />

            <h1 className="text-md font-semibold ">GyanaGuru</h1>
          </div> */}

          {/* login heading and text */}
          <div className="flex w-full px-2 flex-col mt-8 space-y-2 ">
            <h3 className="text-3xl font-semibold ">Sign Up</h3>
            <h4 className="flex">Welcome to Gyana Guru. </h4>
          </div>

          {/* login form */}
          <div className="flex flex-col space-y-4 w-full mx-4 ">
            <ButtonWithImage
              buttonName="Continue with Google"
              icon="/images/google.svg"
            />

            {/* make or with divider */}
            <div className="flex flex-row space-x-4 my-4 items-center">
              <hr className="w-full border-gray-300" />
              <h4 className="font-medium text-zinc-500">or</h4>
              <hr className="w-full border-gray-300" />
            </div>

            {/* login with email and password */}
            <div className="flex flex-col space-y-4">
              {/* email */}
              <input
                type="email"
                placeholder="Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-2 focus:border-black"
              />
              {/* password */}
              <div className="flex w-full space-x-2">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  className="w-full border focus:outline-none focus:border-2 focus:border-black border-gray-300 rounded-lg p-2"
                />
              </div>
              {/* confirm password */}
              <div className="flex w-full space-x-2">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  value={user.confirmPassword}
                  onChange={(e) =>
                    setUser({ ...user, confirmPassword: e.target.value })
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
            </div>

            {/* login button */}
            <div className="flex flex-row space-x-4 py-4 transition hover:scale-[1.02]">
              {
                ((!user.email)||(!user.password)||(!user.confirmPassword))?(<button className="bg-black text-white rounded-lg p-2 w-full" onClick={()=>warning()}>
                Sign Up
              </button>):(<button className="bg-black text-white rounded-lg p-2 w-full" onClick={()=>success()}>
                Sign Up
              </button>)
              }
              
            </div>

            {/* Create Account */}
            <div className="flex flex-col items-center mt-4 text-sm justify-between">
              <p className="w-fit text-slate-600">Already have an account</p>
              <p
                onClick={() => moveToSignIn()}
                className="w-fit text-black hover:underline cursor-pointer"
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
