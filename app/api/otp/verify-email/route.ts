import redis from "@/lib/redis"
import { error } from "console"
import { Flashlight } from "lucide-react"
import { NextResponse } from "next/server"

export async function POST(req:Request) {
const { email , otp } = await req.json()
console.log("OTP: ", otp)
console.log("EMAIL: ", email)
    try{
        console.log("OTP1: ", otp)
    if(!email ||! otp){
        console.log("OTP2: ", otp)
        return NextResponse.json({
            error:"Email and OTP are required",
            valid:false
        },{status:400})
    }
console.log("OTP3: ", otp)
    const storedOTP = await redis.get(`otp:${email}`)
    if(!storedOTP){
        console.log("OTP4: ", otp)
        console.log("Otp expired")
        return NextResponse.json({
            msg:"OTP expired or not found",
            valid:false
        },{status:400})
    }
    console.log("OTP5: ", otp)
    if(!(storedOTP ==otp)){
        return NextResponse.json({
            error:"Invalid OTP",
            valid : false
        },{status:400})
    }
    console.log("6: ", otp)
    await redis.del(`otp:${email}`);
    return NextResponse.json({
        error:"Email verified successfully",
        valid:true
    })
    }catch(error:any){
        console.log("internal error in verification of otp")
        return NextResponse.json({
            valid:false,
            error:"Internal error in  verification of otp"
        },{status:500})
    }
}