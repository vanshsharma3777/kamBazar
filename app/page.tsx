'use client'

import { useRouter } from "next/navigation"
import { toast } from "sonner"


export default function(){
 const router = useRouter()
  return (
    <div className="flex justify-center items-center ">
      <button onClick={()=>{
        router.push('/role')
      }} className="bg-red-400 cursor-pointer ">CLICK ME </button>
      <button className="bg-green-500 cursor-pointer" onClick={()=>{
        toast.success("Hello vansh")
      }}>
        Get grettings
      </button>
    </div>
  )
}