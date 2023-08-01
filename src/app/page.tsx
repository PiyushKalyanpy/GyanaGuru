'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="">
      <h2>This is the sample text website</h2>
      <button onClick={() => router.push('/login')}>Login</button>
    </main>
  );
}
