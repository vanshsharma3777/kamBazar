import { sendVerificationEmail } from "@/lib/mailer"
import redis from "@/lib/redis"
import { NextServer } from "next/dist/server/next"
import { NextResponse } from "next/server"
import { success } from "zod"


export async function POST(req:Request) {
    const { email } = await req.json()
        console.log("email :" , email)
    try{
        
    if(!email){
        return NextResponse.json({
            error:'email not found',
            valid:false
        },{status:400})
    }
    console.log("got it" ,)
    const otp = Math.floor(100000 +Math.random()*900000).toString()
    console.log("opt ban gyi" ,) 
    await redis.set(`otp:${email}`, otp , `EX`, 120)
    await sendVerificationEmail(email , otp )
    console.log("success" ,) 
    return NextResponse.json({
        valid:true,
        msg:"OTP sent successfully"
    })
    }catch(error:any){
        console.log("Internal error in sending user the otp")
        return NextResponse.json({
            msg:"Internal error in sending OTP",
            error:error.message,
            stack:error.stack,
            valid:false
        },{status:500})
    }
}