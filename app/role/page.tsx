'use client'

import axios from 'axios';
import { User, Store, Wrench, LogOut, Sparkles } from 'lucide-react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Session {
    user: {
      id: string;          // <-- add this line
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }

   interface User {
    sub: string;
  }

export default function Home() {
  const router = useRouter()
  const [userData, setUserData] = useState<any>(null);

  const handleNavigate = async (role : string)=>{
     try {
      console.log(role)
        const token  = localStorage.getItem('token')
        if(!token){
          router.push(`/${role}/signin`);
        }else{
          router.push(`/${role}/dashboard`);
        }
      
    } catch (err) {
      console.error("Failed to fetch user", err);
    }

  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-4">
      <div className="max-w-md w-full">
        {/* Header Section with Branding */}
        <div className="text-center mb-12">
          <div className="mb-6 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 blur-2xl"></div>
            <h1 className="text-6xl font-black mb-2 relative tracking-tight">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
                Kaam
              </span>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow-sm">
                Bazar
              </span>
            </h1>
          </div>

          <p className="text-xl font-semibold bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent mb-2">
            Work Today, Earn Today
          </p>
          <p className="text-gray-500 text-base">
            Instant connections🛜 , instant earnings💵
          </p>
        </div>

        {/* Role Selection Heading */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Choose Your Path</h2>
          <p className="text-gray-600">Select your role to get started</p>
        </div>

        {/* Role Cards */}
        <div className="space-y-4 mb-6">
          {/* User Card */}
          <button
            onClick={()=>{
             router.push('/user/home')
            }}
            className="w-full bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 group"
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                <User className="w-7 h-7 text-white" />
              </div>
              <div className="flex-grow text-left">
                <h3 className="text-xl font-bold text-gray-800 mb-1">User</h3>
                <p className="text-sm text-gray-500">Find services & get work done</p>
              </div>
              <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          {/* Vendor Card */}
          <button
            onClick={()=>{
              handleNavigate("vendor")
            }}
            className="w-full bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 group"
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                <Store className="w-7 h-7 text-white" />
              </div>
              <div className="flex-grow text-left">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Vendor</h3>
                <p className="text-sm text-gray-500">Grow your business online</p>
              </div>
              <svg className="w-6 h-6 text-gray-400 group-hover:text-green-500 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          {/* Worker Card */}
          <button
            onClick={()=>{
              handleNavigate("worker")
            }}
            
            className="w-full bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 group"
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                <Wrench className="w-7 h-7 text-white" />
              </div>
              <div className="flex-grow text-left">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Worker</h3>
                <p className="text-sm text-gray-500">Earn daily with your skills</p>
              </div>
              <svg className="w-6 h-6 text-gray-400 group-hover:text-purple-500 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>


        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-8">
          Need help? <span className="text-indigo-600 hover:text-indigo-700 cursor-pointer font-medium transition-colors">Contact Support</span>
        </p>
      </div>
    </main>
  );
}