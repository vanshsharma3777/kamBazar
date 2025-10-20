"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Select Account Type
      </h1>

      <div className="flex flex-col gap-4 w-60">
        <button
          onClick={() => router.push("/user")}
          className="bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition-all duration-200 shadow-md"
        >
          User
        </button>

        <button
          onClick={() => router.push("/vendor")}
          className="bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition-all duration-200 shadow-md"
        >
          Vendor
        </button>

        <button
          onClick={() => router.push("/worker")}
          className="bg-purple-500 text-white py-3 rounded-xl font-semibold hover:bg-purple-600 transition-all duration-200 shadow-md"
        >
          Worker
        </button>
      </div>
    </main>
  );
}
