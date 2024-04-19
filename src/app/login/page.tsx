import Logo from "@/components/generic/Logo";

const Login = () => {
  return (
    <main className="flex items-center w-screen h-screen bg-gray-100 place-content-center">
      <section className="flex flex-col gap-8 p-8 bg-white shadow-2xl rounded-3xl shadow-gray-200 ">
        <Logo width={20} height={20} />
        <div className="flex flex-col gap-2 text-gray-700">
          <h1 className="text-2xl font-bold">Login </h1>
          <h2 className="text-normal">Login to continue with Gyanaguru</h2>
        </div>
        <button className="flex items-center p-2 text-center text-white bg-indigo-500 hover:bg-indigo-600 rounded-xl ">
          <span className="w-full font-medium text-center outline-none ">
            Login with Google
          </span>
        </button>
      </section>
    </main>
  );
};

export default Login;
