import { ButtonWithImage } from "@/Components/components";

const Login = () => {

    

  return (
    <div className="flex w-full h-screen bg-gray-200 ">
      <div className="flex flex-col w-10/12 lg:w-1/4 bg-white h-fit m-auto min-h-1/4 p-4 ">
        <div className="flex flex-col space-y-8 items-center ">

          {/* logo with title */}
          <div className="flex flex-row items-center space-x-4 ">
            <img src="/logo.svg" alt="logo" width={40} height={40} />

            <h1 className="text-md font-semibold ">GyanaGuru</h1>
          </div>

          {/* login heading and text */}
          <div className="flex items-center flex-col space-y-2 ">
            <h3 className="text-3xl font-medium ">Login</h3>
            <h4 className="flex text-center px-4">
              Welcome to the login page of Gyana Guru.
            </h4>
          </div>

          {/* login form */}
          <div className="flex flex-col space-y-4 w-full mx-4 ">
            <ButtonWithImage
              buttonName="Login with Google"
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
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-2 focus:border-violet-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="border focus:outline-none focus:border-2 focus:border-violet-500 border-gray-300 rounded-lg p-2"
              />
              <p className="w-fit text-right start-left text-sm text-violet-800 hover:underline cursor-pointer">
                Forgot Password?
              </p>
            </div>

            {/* login button */}
            <div className="flex flex-row space-x-4 py-4 transition hover:scale-[1.02]">
              <button className="bg-violet-700 text-white rounded-lg p-2 w-full">
                Login
              </button>
            </div>

            {/* forgot password */}
            <div className="flex flex-col items-center mt-4 justify-between">
              <p className="w-fit text-slate-600">Don't have an account</p>
              <p className="w-fit text-violet-800 hover:underline cursor-pointer">
                Create an account
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
