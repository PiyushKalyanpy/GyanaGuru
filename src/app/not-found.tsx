import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex flex-col items-center w-full h-screen gap-8 place-content-center">
      <h3 className="text-4xl ">We are working on it 🧑‍💻</h3>
      <Link
        href="/"
        className="px-6 py-2 text-2xl text-white transition bg-black hover:bg-zinc-800 hover:shadow-2xl"
      >
        Go back to home
      </Link>
    </main>
  );
};

export default NotFound;
