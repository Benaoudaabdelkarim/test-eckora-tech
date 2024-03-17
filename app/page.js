"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/loggedout/our_services');
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center ">
      test divigions
    </div>
  );
}
