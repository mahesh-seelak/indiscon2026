"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/");
    }, 2000);

    return () => clearTimeout(timeout); 
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-6">
      <h1 className="text-6xl font-bold text-blue-500">404</h1>
      <h2 className="text-3xl font-semibold mt-2 text-gray-800">
        Oops! Page Not Found
      </h2>
      <p className="mt-1 text-sm text-gray-500">Redirecting to the homepage...</p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Return to IEEE INDICON 2026
      </Link>

      <div className="mt-8 text-gray-500 text-sm">
        <p>&copy; 2026 IEEE INDICON. All rights reserved.</p>
      </div>
    </div>
  );
}
