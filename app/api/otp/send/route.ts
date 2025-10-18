import twilio from "twilio";
import redis from "@/lib/redis";
import { projectUpdate } from "next/dist/build/swc/generated-native";
import { NextResponse } from "next/server";
import { success } from "zod";
const client = twilio(
    process.env.TWILIO_ACCOUNT_SID || '',
    process.env.TWILIO_AUTH_TOKEN || ''
)

const generateOTP = ()=> Math.floor(100000 + Math.random()*900000).toString()

export async function POST(req:Request) {
    const { mobileNumber , userType} =await req.json()
    if(!["myWorker" , "myUser" , "myVendor"].includes(userType)){
        return NextResponse.json({
            success:false,
            message : "Invalid user type"
        },
    {
        status:400
    })
    }
    try{
        const otp = generateOTP()
        await redis.set(`otp:${mobileNumber}`, otp, "EX", 120);

        await client.messages.create({
            body: `Your OTP from kambazar is ${otp}`,
            from:process.env.TWILIO_PHONE_NUMBER,
            to:mobileNumber
        })
    return NextResponse.json({
        success:true,
        message: "OTP sent successfully"
    })
    }catch(err:any){
        return NextResponse.json({
            success:false,
            error:err.message
        },
    {
        status:500
    })
    }
}