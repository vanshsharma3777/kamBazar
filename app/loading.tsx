// app/loading.tsx
"use client";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-100 via-sky-400 to-blue-100">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        className="w-10 h-10 border-4 border-white border-t-transparent rounded-full"
      />
      <h1 className="text-white text-xl font-semibold ml-4">Loading...</h1>
    </div>
  );
}
