import Image from 'next/image';

interface LoginCardProps {
  onClick: () => void;
}

const LoginCard = ({ onClick }: LoginCardProps) => {
  return (
    <div className="flex w-screen h-screen bg-zinc-100 dark:bg-zinc-900 p-8">
      <div className="flex flex-col items-center m-auto  bg-white dark:bg-zinc-950 rounded-2xl p-4 space-y-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center  bg-white dark:bg-zinc-800 rounded-full shadow-xl w-fit ">
            <Image
              src="/assets/colorLogo.svg"
              alt="nextjs"
              width={50}
              height={50}
            />
          </div>
          <div className="flex flex-col items-center space-y-2">
            <h2 className="text-2xl font-bold font-archivo text-black ">
              Welcome back{' '}
            </h2>
            <p className="text-center text-zinc-500">
              Discover the magic of Gyanaguru with just one click!
            </p>
          </div>
          <button
            onClick={onClick}
            className="flex p-4 transition bg-black dark:bg-zinc-400 rounded-xl space-x-2 font-inter hover:bg-zinc-800"
          >
            <Image
              src="/assets/google.svg"
              alt="google"
              width={24}
              height={24}
            />
            <span className="dark:text-white text-white">
              Continue with Google
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
