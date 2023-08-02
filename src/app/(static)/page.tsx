import Link from 'next/link';

export default function Home() {
  return (
    <main className="px-6 py-12 md:px-12 max-w-7xl mx-auto grid gap-24 mt-24">
      <h2>This is the sample text website</h2>
      <Link href={"/login"}>Login</Link>
    </main>
  );
}
